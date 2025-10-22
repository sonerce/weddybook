// Wedding-themed color palette and design tokens
export const weddingTheme = {
  colors: {
    // Primary wedding colors
    primary: {
      50: '#fdf2f8', // Blush pink lightest
      100: '#fce7f3', // Blush pink lighter
      200: '#fbcfe8', // Blush pink light
      300: '#f9a8d4', // Blush pink
      400: '#f472b6', // Pink
      500: '#ec4899', // Rose (primary)
      600: '#db2777', // Rose darker
      700: '#be185d', // Deep rose
      800: '#9d174d', // Dark rose
      900: '#831843', // Darkest rose
    },

    // Complementary colors
    secondary: {
      50: '#f8fafc', // Soft gray lightest
      100: '#f1f5f9', // Soft gray lighter
      200: '#e2e8f0', // Soft gray light
      300: '#cbd5e1', // Soft gray
      400: '#94a3b8', // Gray
      500: '#64748b', // Slate (secondary)
      600: '#475569', // Slate darker
      700: '#334155', // Dark slate
      800: '#1e293b', // Darker slate
      900: '#0f172a', // Darkest slate
    },

    // Accent colors
    accent: {
      gold: '#fbbf24', // Gold
      champagne: '#f3e8d3', // Champagne
      sage: '#84cc16', // Sage green
      lavender: '#a78bfa', // Lavender
      cream: '#fef7ed', // Cream
      pearl: '#f8fafc', // Pearl white
    },

    // Status colors
    success: '#10b981', // Emerald
    warning: '#f59e0b', // Amber
    error: '#ef4444', // Red
    info: '#3b82f6', // Blue
  },

  typography: {
    fontFamily: {
      serif: ['Playfair Display', 'serif'], // Elegant serif for headings
      sans: ['Inter', 'system-ui', 'sans-serif'], // Clean sans-serif for body
      script: ['Dancing Script', 'cursive'], // Script font for elegant text
      display: ['Crimson Text', 'serif'], // Display font for special occasions
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },

  spacing: {
    section: '6rem', // 96px - Large section spacing
    component: '3rem', // 48px - Component spacing
    element: '1.5rem', // 24px - Element spacing
    tight: '0.75rem', // 12px - Tight spacing
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    DEFAULT: '0.375rem', // 6px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem', // 32px
    full: '9999px',
  },

  boxShadow: {
    elegant:
      '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    dreamy:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  animation: {
    // Custom animations for wedding app
    fadeIn: 'fadeIn 0.6s ease-in-out',
    slideUp: 'slideUp 0.5s ease-out',
    gentle: 'gentle 2s ease-in-out infinite',
  },
};

// CSS custom properties for easier usage
export const cssVariables = {
  ':root': {
    // Primary colors
    '--wedding-primary-50': weddingTheme.colors.primary[50],
    '--wedding-primary-500': weddingTheme.colors.primary[500],
    '--wedding-primary-900': weddingTheme.colors.primary[900],

    // Secondary colors
    '--wedding-secondary-50': weddingTheme.colors.secondary[50],
    '--wedding-secondary-500': weddingTheme.colors.secondary[500],
    '--wedding-secondary-900': weddingTheme.colors.secondary[900],

    // Accent colors
    '--wedding-gold': weddingTheme.colors.accent.gold,
    '--wedding-champagne': weddingTheme.colors.accent.champagne,
    '--wedding-sage': weddingTheme.colors.accent.sage,
    '--wedding-cream': weddingTheme.colors.accent.cream,

    // Typography
    '--font-serif': weddingTheme.typography.fontFamily.serif.join(', '),
    '--font-sans': weddingTheme.typography.fontFamily.sans.join(', '),
    '--font-script': weddingTheme.typography.fontFamily.script.join(', '),

    // Spacing
    '--spacing-section': weddingTheme.spacing.section,
    '--spacing-component': weddingTheme.spacing.component,
    '--spacing-element': weddingTheme.spacing.element,
  },
};

export type WeddingTheme = typeof weddingTheme;
