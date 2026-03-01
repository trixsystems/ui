/**
 * @trx/ui-common — Design Tokens
 *
 * Fonte de verdade para todos os tokens de design.
 * Hierarquia: primitive → semantic → component
 *
 * @example
 * import { tokens } from '@trx/ui-common/tokens'
 * const primary = tokens.color.brand.primary // '#6ee7b7'
 */

export const tokens = {
  /** Cores do sistema — primitivas e semânticas */
  color: {
    /** Cor de marca (acento) */
    brand: {
      primary: '#6ee7b7',
      primaryHover: '#5ddba8',
      primaryGlow: 'rgba(110, 231, 183, 0.25)',
      /** Variantes dark mode (Dracula) */
      primaryDark: '#bd93f9',
      primaryDarkHover: '#caa9fc',
      primaryDarkGlow: 'rgba(189, 147, 249, 0.35)',
      soft: '#dcfce7',
      softDark: 'rgba(189, 147, 249, 0.15)',
    },
    /** Cores de status */
    success: {
      DEFAULT: '#10b981',
      dark: '#50fa7b',
      soft: '#ecfdf5',
      softDark: 'rgba(80, 250, 123, 0.15)',
    },
    warning: {
      DEFAULT: '#f59e0b',
      dark: '#ffb86c',
      soft: '#fffbeb',
      softDark: 'rgba(255, 184, 108, 0.15)',
    },
    danger: {
      DEFAULT: '#ef4444',
      dark: '#ff5555',
      soft: '#fef2f2',
      softDark: 'rgba(255, 85, 85, 0.15)',
    },
    info: {
      DEFAULT: '#06b6d4',
      dark: '#8be9fd',
      soft: '#ecfeff',
      softDark: 'rgba(139, 233, 253, 0.15)',
    },
    purple: {
      DEFAULT: '#8b5cf6',
      dark: '#bd93f9',
      soft: '#f5f3ff',
    },
    /** Fundos */
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      card: '#ffffff',
      elevated: '#ffffff',
      primaryDark: '#282a36',
      secondaryDark: '#1e1f29',
      tertiaryDark: '#44475a',
      cardDark: '#2d2f3d',
      elevatedDark: '#363848',
    },
    /** Texto */
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      muted: '#94a3b8',
      primaryDark: '#f8f8f2',
      secondaryDark: '#cdd6f4',
      mutedDark: '#8892b3',
    },
    /** Bordas */
    border: {
      DEFAULT: '#e2e8f0',
      subtle: '#f1f5f9',
      dark: '#44475a',
      subtleDark: '#363848',
    },
  },

  /** Escala de espaçamento (rem) */
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '2rem',
    6: '3rem',
    7: '4rem',
    8: '5rem',
  },

  /** Escala tipográfica */
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },

  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '2',
  },

  /** Raios de borda */
  borderRadius: {
    none: '0',
    sm: '4px',
    DEFAULT: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px',
  },

  /** Sombras */
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
    smDark: '0 2px 4px rgba(0, 0, 0, 0.3)',
    mdDark: '0 4px 16px rgba(0, 0, 0, 0.4)',
    lgDark: '0 8px 32px rgba(0, 0, 0, 0.5)',
    xlDark: '0 16px 64px rgba(0, 0, 0, 0.6)',
  },

  /** Breakpoints responsivos */
  breakpoint: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  /** Z-index semântico */
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    50: '50',
    100: '100',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modal: '1040',
    popover: '1050',
    toast: '1060',
  },

  /** Animações */
  animation: {
    duration: {
      fast: '100ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    easing: {
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const

export type TrxTokens = typeof tokens
export type TrxColor = keyof typeof tokens.color
export type TrxSpacing = keyof typeof tokens.spacing
export type TrxFontSizeToken = keyof typeof tokens.fontSize
