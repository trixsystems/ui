export type TrxErrorCode = 500 | 403 | 503 | 404;
type __VLS_Props = {
    code?: TrxErrorCode;
    title?: string;
    description?: string;
    /** Exibe botão de voltar */
    showBack?: boolean;
    /** Exibe botão de tentar novamente */
    showRetry?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    back: () => any;
    retry: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onBack?: (() => any) | undefined;
    onRetry?: (() => any) | undefined;
}>, {
    code: TrxErrorCode;
    showBack: boolean;
    showRetry: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxErrorPage.vue.d.ts.map