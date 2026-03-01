export interface TrxMobileNavItem {
    key: string;
    label: string;
    icon: string;
    badge?: number;
}
type __VLS_Props = {
    items: TrxMobileNavItem[];
    modelValue?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (item: TrxMobileNavItem) => any;
    "update:modelValue": (key: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((item: TrxMobileNavItem) => any) | undefined;
    "onUpdate:modelValue"?: ((key: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
//# sourceMappingURL=TrxMobileNav.vue.d.ts.map