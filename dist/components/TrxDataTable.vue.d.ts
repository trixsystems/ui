type __VLS_Props = {
    value: any[];
    loading?: boolean;
    paginator?: boolean;
    rows?: number;
    totalRecords?: number;
    lazy?: boolean;
    globalFilter?: boolean;
    emptyMessage?: string;
    stripedRows?: boolean;
    rowHover?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'header-actions'?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    filter: (event: any) => any;
    sort: (event: any) => any;
    page: (event: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onFilter?: ((event: any) => any) | undefined;
    onSort?: ((event: any) => any) | undefined;
    onPage?: ((event: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxDataTable.vue.d.ts.map