export type TrxTheme = 'light' | 'dark';
export type TrxFontSize = 'font-small' | 'font-normal' | 'font-large' | 'font-xlarge';
export type TrxLocale = 'pt-BR' | 'en';
/**
 * Composable for managing theme, font size and locale
 */
export declare function useTheme(): {
    theme: import('vue').Ref<TrxTheme, TrxTheme>;
    fontSize: import('vue').WritableComputedRef<number, number | TrxFontSize>;
    fontSizeClass: import('vue').Ref<TrxFontSize, TrxFontSize>;
    isDark: import('vue').Ref<boolean, boolean>;
    locale: import('vue').Ref<TrxLocale, TrxLocale>;
    toggleTheme: () => void;
    setTheme: (newTheme: TrxTheme) => void;
    setFontSize: (newSize: TrxFontSize) => void;
    increaseFontSize: () => void;
    decreaseFontSize: () => void;
    toggleLocale: () => void;
    setLocale: (newLocale: TrxLocale) => void;
    initTheme: () => void;
};
//# sourceMappingURL=useTheme.d.ts.map