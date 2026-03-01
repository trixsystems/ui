export interface TrxFABAction {
    id: string;
    icon: string;
    label: string;
    color?: string;
}
type __VLS_Props = {
    icon?: string;
    actions?: TrxFABAction[];
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    color?: string;
    size?: 'sm' | 'md' | 'lg';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: () => any;
    action: (action: TrxFABAction) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: (() => any) | undefined;
    onAction?: ((action: TrxFABAction) => any) | undefined;
}>, {
    icon: string;
    size: "sm" | "md" | "lg";
    actions: TrxFABAction[];
    position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxFloatingActionButton.vue.d.ts.map