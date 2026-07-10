import { useAuthStore } from "@/stores/auth.store";
import {
  ArchivoNarrow_400Regular,
  ArchivoNarrow_600SemiBold,
  ArchivoNarrow_700Bold,
} from '@expo-google-fonts/archivo-narrow';
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  JetBrainsMono_500Medium,
} from '@expo-google-fonts/jetbrains-mono';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Image } from "expo-image";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

const AuthGuard = () => {
  const token = useAuthStore((state) => state.token);
  const segments = useSegments();
  const router = useRouter();
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    if (useAuthStore.persist.hasHydrated()) {
      setHydrated(true);
    }
    return unsub;
  }, []);

  useEffect(() => {
    if(!hydrated) return;

    const segment = segments[0];
    const needsAuthCheck = segment === "(tabs)" || segment === undefined;
    const needsTabsCheck = segment === "(auth)" || segment === undefined;

    if (!token && needsAuthCheck) {
      router.replace("/(auth)");
    }

    if (token && needsTabsCheck) {
      router.replace("/(tabs)");
    }

  }, [token, segments, hydrated]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(modals)" options={{
        presentation: 'modal',
        animation: 'slide_from_bottom'
      }} />
    </Stack>
  );
}

const cacheImages = (images: any[]) => {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const RootLayout = () => {

  const [fontsLoaded] = useFonts({
    ArchivoNarrow_400Regular,
    ArchivoNarrow_600SemiBold,
    ArchivoNarrow_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    JetBrainsMono_500Medium,
  });

  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        try {
          const imagAssets = cacheImages([require("@/assets/images/icon.png")]);

          await Promise.all([...imagAssets]);
        } catch (error) {

        } finally {
          setIsAppReady(true);
          SplashScreen.hideAsync();
        }
      })()
    }
  }, [fontsLoaded]);

  if (!isAppReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <AuthGuard />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default RootLayout;