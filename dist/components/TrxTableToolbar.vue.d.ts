type __VLS_Props = {
    searchValue?: string;
    searchPlaceholder?: string;
    loading?: boolean;
    total?: number;
    selectedCount?: number;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'bulk-actions'?(_: {}): any;
        filters?(_: {}): any;
        actions?(_: {}): any;
        'filter-panel'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    filter: () => any;
    "update:searchValue": (value: string) => any;
    refresh: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onFilter?: (() => any) | undefined;
    "onUpdate:searchValue"?: ((value: string) => any) | undefined;
    onRefresh?: (() => any) | undefined;
}>, {
    searchPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxTableToolbar.vue.d.ts.map