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
export declare const tokens: {
    /** Cores do sistema — primitivas e semânticas */
    readonly color: {
        /** Cor de marca (acento) */
        readonly brand: {
            readonly primary: "#6ee7b7";
            readonly primaryHover: "#5ddba8";
            readonly primaryGlow: "rgba(110, 231, 183, 0.25)";
            /** Variantes dark mode (Dracula) */
            readonly primaryDark: "#bd93f9";
            readonly primaryDarkHover: "#caa9fc";
            readonly primaryDarkGlow: "rgba(189, 147, 249, 0.35)";
            readonly soft: "#dcfce7";
            readonly softDark: "rgba(189, 147, 249, 0.15)";
        };
        /** Cores de status */
        readonly success: {
            readonly DEFAULT: "#10b981";
            readonly dark: "#50fa7b";
            readonly soft: "#ecfdf5";
            readonly softDark: "rgba(80, 250, 123, 0.15)";
        };
        readonly warning: {
            readonly DEFAULT: "#f59e0b";
            readonly dark: "#ffb86c";
            readonly soft: "#fffbeb";
            readonly softDark: "rgba(255, 184, 108, 0.15)";
        };
        readonly danger: {
            readonly DEFAULT: "#ef4444";
            readonly dark: "#ff5555";
            readonly soft: "#fef2f2";
            readonly softDark: "rgba(255, 85, 85, 0.15)";
        };
        readonly info: {
            readonly DEFAULT: "#06b6d4";
            readonly dark: "#8be9fd";
            readonly soft: "#ecfeff";
            readonly softDark: "rgba(139, 233, 253, 0.15)";
        };
        readonly purple: {
            readonly DEFAULT: "#8b5cf6";
            readonly dark: "#bd93f9";
            readonly soft: "#f5f3ff";
        };
        /** Fundos */
        readonly background: {
            readonly primary: "#ffffff";
            readonly secondary: "#f8fafc";
            readonly tertiary: "#f1f5f9";
            readonly card: "#ffffff";
            readonly elevated: "#ffffff";
            readonly primaryDark: "#282a36";
            readonly secondaryDark: "#1e1f29";
            readonly tertiaryDark: "#44475a";
            readonly cardDark: "#2d2f3d";
            readonly elevatedDark: "#363848";
        };
        /** Texto */
        readonly text: {
            readonly primary: "#1e293b";
            readonly secondary: "#64748b";
            readonly muted: "#94a3b8";
            readonly primaryDark: "#f8f8f2";
            readonly secondaryDark: "#cdd6f4";
            readonly mutedDark: "#8892b3";
        };
        /** Bordas */
        readonly border: {
            readonly DEFAULT: "#e2e8f0";
            readonly subtle: "#f1f5f9";
            readonly dark: "#44475a";
            readonly subtleDark: "#363848";
        };
    };
    /** Escala de espaçamento (rem) */
    readonly spacing: {
        readonly 0: "0";
        readonly 1: "0.25rem";
        readonly 2: "0.5rem";
        readonly 3: "1rem";
        readonly 4: "1.5rem";
        readonly 5: "2rem";
        readonly 6: "3rem";
        readonly 7: "4rem";
        readonly 8: "5rem";
    };
    /** Escala tipográfica */
    readonly fontSize: {
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "1.875rem";
        readonly '4xl': "2.25rem";
        readonly '5xl': "3rem";
        readonly '6xl': "3.75rem";
    };
    readonly fontWeight: {
        readonly light: "300";
        readonly normal: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
    };
    readonly lineHeight: {
        readonly none: "1";
        readonly tight: "1.25";
        readonly normal: "1.5";
        readonly relaxed: "2";
    };
    /** Raios de borda */
    readonly borderRadius: {
        readonly none: "0";
        readonly sm: "4px";
        readonly DEFAULT: "6px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly full: "9999px";
    };
    /** Sombras */
    readonly shadow: {
        readonly sm: "0 1px 2px rgba(0, 0, 0, 0.05)";
        readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)";
        readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)";
        readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)";
        readonly smDark: "0 2px 4px rgba(0, 0, 0, 0.3)";
        readonly mdDark: "0 4px 16px rgba(0, 0, 0, 0.4)";
        readonly lgDark: "0 8px 32px rgba(0, 0, 0, 0.5)";
        readonly xlDark: "0 16px 64px rgba(0, 0, 0, 0.6)";
    };
    /** Breakpoints responsivos */
    readonly breakpoint: {
        readonly sm: "640px";
        readonly md: "768px";
        readonly lg: "1024px";
        readonly xl: "1280px";
        readonly '2xl': "1536px";
    };
    /** Z-index semântico */
    readonly zIndex: {
        readonly auto: "auto";
        readonly 0: "0";
        readonly 10: "10";
        readonly 20: "20";
        readonly 50: "50";
        readonly 100: "100";
        readonly dropdown: "1000";
        readonly sticky: "1020";
        readonly fixed: "1030";
        readonly modal: "1040";
        readonly popover: "1050";
        readonly toast: "1060";
    };
    /** Animações */
    readonly animation: {
        readonly duration: {
            readonly fast: "100ms";
            readonly base: "200ms";
            readonly slow: "300ms";
            readonly slower: "500ms";
        };
        readonly easing: {
            readonly in: "cubic-bezier(0.4, 0, 1, 1)";
            readonly out: "cubic-bezier(0, 0, 0.2, 1)";
            readonly inOut: "cubic-bezier(0.4, 0, 0.2, 1)";
        };
    };
};
export type TrxTokens = typeof tokens;
export type TrxColor = keyof typeof tokens.color;
export type TrxSpacing = keyof typeof tokens.spacing;
export type TrxFontSizeToken = keyof typeof tokens.fontSize;
//# sourceMappingURL=index.d.ts.map