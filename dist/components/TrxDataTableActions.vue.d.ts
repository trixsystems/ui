export interface TrxAction<T = unknown> {
    label: string;
    icon?: string;
    action: (row: T) => void;
    visible?: (row: T) => boolean;
    disabled?: (row: T) => boolean;
    severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
    /** Separador visual antes desta ação */
    separator?: boolean;
}
type __VLS_Props = {
    row: unknown;
    actions: TrxAction[];
    /** inline = botões visíveis; menu = dropdown (padrão: menu quando >2 ações) */
    variant?: 'inline' | 'menu';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    menuWrapRef: HTMLDivElement;
    triggerRef: HTMLButtonElement;
}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxDataTableActions.vue.d.ts.map