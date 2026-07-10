import { Platform } from 'react-native';

// ─── Colors ──────────────────────────────────────────────────────────────────

export const Colors = {
  light: {
    background: {
      primary: '#f8f9ff',
      secondary: '#eff4ff',
      tertiary: '#ffffff',
      accent: '#e5e8ef',
    },
    text: {
      primary: '#191b23',
      secondary: '#44474e',
      tertiary: '#74777f',
      inverse: '#ffffff',
      accent: '#534ab7',
    },
    button: {
      primary: '#534ab7',
      onPrimary: '#ffffff',
      secondary: '#eff4ff',
      outline: '#c4c6cf',
    },
    status: {
      success: '#2e7d32',
      error: '#d32f2f',
      warning: '#ed6c02',
      info: '#534ab7',
    },
    border: {
      default: '#c4c6cf',
      subtle: '#e5e8ef',
      focus: '#534ab7',
      radius: 16,
    },
    divider: {
      default: '#e5e8ef',
      opacity: 0.08,
    },
    toast: {
      success: '#4ade80',
      error: '#f87171', 
      warning: '#fbbf24',
      info: '#818cf8',
    }
  },
  dark: {
    background: {
      primary: '#11131c',
      secondary: '#191b24',
      tertiary: '#0c0e17',
      accent: '#373943',
    },
    text: {
      primary: '#e2e1e9',
      secondary: '#c6c5d0',
      tertiary: '#90909a',
      inverse: '#11131c',
      accent: '#534ab7',
    },
    button: {
      primary: '#534ab7',
      onPrimary: '#ffffff',
      secondary: '#373943',
      outline: '#44474e',
    },
    status: {
      success: '#34c759',
      error: '#ff3b30',
      warning: '#ffcc00',
      info: '#534ab7',
    },
    border: {
      default: '#44474e',
      subtle: '#373943',
      focus: '#534ab7',
      radius: 16,
    },
    divider: {
      default: '#373943',
      opacity: 0.12,
    },
    toast: {
      success: '#4ade80',
      error: '#f87171', 
      warning: '#fbbf24',
      info: '#818cf8',
    }
  },
} as const;

export type ThemeColors = typeof Colors.light;
export type ThemeColor = keyof ThemeColors;

// ─── Typography ──────────────────────────────────────────────────────────────

export const Typography = {
  displayLg: {
    fontFamily: 'ArchivoNarrow_700Bold',
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 40,
    letterSpacing: -0.64,
  },
  headlineMd: {
    fontFamily: 'ArchivoNarrow_600SemiBold',
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
  },
  headlineSm: {
    fontFamily: 'ArchivoNarrow_600SemiBold',
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  bodyLg: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodyMd: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  labelMd: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 12,
    fontWeight: '500' as const,
    lineHeight: 16,
    letterSpacing: 0.6,
  },
  labelSm: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 10,
    fontWeight: '500' as const,
    lineHeight: 14,
  },
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────

export const Spacing = {
  base: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  containerPadding: 16,
  gutter: 12,
} as const;

// ─── Border Radius ───────────────────────────────────────────────────────────

export const Radius = {
  sm: 2,
  default: 4,
  md: 6,
  lg: 8,
  xl: 12,
  full: 9999,
} as const;

// ─── Fonts ───────────────────────────────────────────────────────────────────

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
});

// ─── Layout ──────────────────────────────────────────────────────────────────

export const Layout = {
  maxContentWidth: 800,
  bottomTabHeight: Platform.select({ ios: 50, android: 80 }) ?? 0,
} as const;