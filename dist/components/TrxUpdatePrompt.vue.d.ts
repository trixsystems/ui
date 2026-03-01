type __VLS_Props = {
    modelValue?: boolean;
    title?: string;
    message?: string;
    updateLabel?: string;
    dismissLabel?: string;
    version?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (v: boolean) => any;
    dismiss: () => any;
    update: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    onDismiss?: (() => any) | undefined;
    onUpdate?: (() => any) | undefined;
}>, {
    title: string;
    message: string;
    modelValue: boolean;
    updateLabel: string;
    dismissLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TrxUpdatePrompt.vue.d.ts.map