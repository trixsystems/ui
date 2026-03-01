type __VLS_Props = {
    appName?: string;
    appTitle?: string;
    loading?: boolean;
    error?: string | null;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        subtitle?(_: {}): any;
        'forgot-password'?(_: {}): any;
        actions?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    submit: (credentials: {
        email: string;
        password: string;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSubmit?: ((credentials: {
        email: string;
        password: string;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxLoginForm.vue.d.ts.map