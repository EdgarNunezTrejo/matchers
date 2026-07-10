# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run start` — start the Expo dev server (Metro). Press `i`/`a`/`w` in the terminal to open iOS/Android/web, or scan the QR code with Expo Go.
- `npm run ios` / `npm run android` / `npm run web` — start the dev server and open directly on that platform.
- `npm run lint` — runs `expo lint` (ESLint via Expo's config).
- `npm run reset-project` — one-way scaffold reset: moves `src/` and `scripts/` into `example/` and regenerates a blank `src/app`. Only run if explicitly asked; this is destructive to the current app code.

There is no test suite configured in this repo.

## Architecture

This is an Expo Router app (file-based routing) using the `src/` directory convention, targeting iOS, Android, and web from one codebase.

- **Routing**: routes live in `src/app/`. `src/app/_layout.tsx` is the root layout — it wraps the app in `ThemeProvider` (light/dark based on `useColorScheme`), shows `AnimatedSplashOverlay` until ready, and renders `AppTabs`. `typedRoutes` is enabled in `app.json`, so route params are typed.
- **Platform-specific files**: Expo/Metro resolves `*.web.tsx`/`*.web.ts` over the default `*.tsx`/`*.ts` when bundling for web. This repo uses that split for anything needing a materially different implementation per platform:
  - `app-tabs.tsx` (native, via `expo-router/unstable-native-tabs`) vs. `app-tabs.web.tsx` (custom floating tab bar built from `expo-router/ui` primitives).
  - `animated-icon.tsx` vs. `animated-icon.web.tsx`.
  - `use-color-scheme.ts` (handles static-rendering hydration) vs. `use-color-scheme.web.ts` (thin re-export of React Native's hook).
  When changing behavior in one of these, check whether the sibling platform file also needs the change.
- **Theming**: `src/constants/theme.ts` defines `Colors.light`/`Colors.dark`, `Fonts`, and `Spacing` scale (semantic steps: `half`, `one`...`six`, not raw pixels). `useTheme()` (`src/hooks/use-theme.ts`) resolves the current color scheme to a `Colors` entry. `ThemedText` and `ThemedView` (`src/components/`) are the standard building blocks — they take a `type`/`themeColor` prop keyed into `Colors`/text styles rather than inline colors, and most screens compose UI from these instead of raw `Text`/`View`.
- **Path aliases**: `@/*` maps to `src/*` and `@/assets/*` maps to `assets/*` (see `tsconfig.json`). Use these instead of relative imports across directories.
- **Native tab icons**: `AppTabs` (native) references PNGs in `assets/images/tabIcons/` with `renderingMode="template"` for tint-based coloring; the web tab bar renders its own `SymbolView`/text-based UI instead.
