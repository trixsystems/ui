export interface TrxSidebarNavItem {
    key: string;
    label: string;
    icon?: string;
    badge?: number | string;
    children?: TrxSidebarNavItem[];
    separator?: boolean;
}
type __VLS_Props = {
    items?: TrxSidebarNavItem[];
    modelValue?: string;
    collapsed?: boolean;
    width?: string;
    collapsedWidth?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (item: TrxSidebarNavItem) => any;
    "update:modelValue": (key: string) => any;
    "update:collapsed": (collapsed: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((item: TrxSidebarNavItem) => any) | undefined;
    "onUpdate:modelValue"?: ((key: string) => any) | undefined;
    "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
}>, {
    width: string;
    items: TrxSidebarNavItem[];
    collapsedWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
//# sourceMappingURL=TrxSidebarNav.vue.d.ts.map