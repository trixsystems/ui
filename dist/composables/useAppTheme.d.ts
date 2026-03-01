/**
 * @trx/ui-common — useAppTheme
 *
 * Permite customizar o tema por aplicação sobrescrevendo tokens CSS.
 * Útil para diferenciar visualmente cada app TRX (Call, Switch, Phone, etc.)
 *
 * @example
 * // Em main.ts de cada app:
 * import { useAppTheme } from '@trx/ui-common'
 *
 * useAppTheme({
 *   appName: 'call',
 *   primaryColor: '#0ea5e9',
 *   primaryColorDark: '#38bdf8',
 * })
 */
export interface AppThemeConfig {
    /** Nome do app (ex: 'call', 'switch', 'phone', 'dialer', 'omnichannel') */
    appName: string;
    /** Cor de acento principal (light mode) */
    primaryColor?: string;
    /** Versão hover da cor principal */
    primaryColorHover?: string;
    /** Cor de acento no dark mode */
    primaryColorDark?: string;
    /** Glow da cor no dark mode */
    primaryColorGlow?: string;
    /** Substitui o --trx-card-radius */
    cardRadius?: string;
    /** CSS vars customizadas extras */
    customVars?: Record<string, string>;
    /** Seletor CSS alvo (padrão: ':root') */
    selector?: string;
}
/**
 * Aplica um tema customizado por aplicação via CSS custom properties.
 * Deve ser chamado uma vez em main.ts antes de montar o app.
 */
export declare function useAppTheme(config: AppThemeConfig): void;
/** Reseta o tema customizado */
export declare function resetAppTheme(): void;
//# sourceMappingURL=useAppTheme.d.ts.map