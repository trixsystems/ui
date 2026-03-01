type __VLS_Props = {
    loading?: boolean;
    hasMore?: boolean;
    threshold?: number;
    scrollTarget?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        loader?(_: {}): any;
        end?(_: {}): any;
    };
    refs: {
        container: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    load: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onLoad?: (() => any) | undefined;
}>, {
    loading: boolean;
    threshold: number;
    hasMore: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxInfiniteScroll.vue.d.ts.map