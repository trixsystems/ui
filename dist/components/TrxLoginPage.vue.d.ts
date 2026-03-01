type __VLS_Props = {
    appName: string;
    appTagline?: string;
    loading?: boolean;
    error?: string | null;
    showRememberMe?: boolean;
    showForgotPassword?: boolean;
    showFontControls?: boolean;
    showLanguageToggle?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
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
        rememberMe: boolean;
    }) => any;
    forgotPassword: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSubmit?: ((credentials: {
        email: string;
        password: string;
        rememberMe: boolean;
    }) => any) | undefined;
    onForgotPassword?: (() => any) | undefined;
}>, {
    loading: boolean;
    appTagline: string;
    showRememberMe: boolean;
    showForgotPassword: boolean;
    showFontControls: boolean;
    showLanguageToggle: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxLoginPage.vue.d.ts.map