type __VLS_Props = {
    modelValue?: number | null;
    currency?: string;
    locale?: string;
    disabled?: boolean;
    invalid?: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: number | null) => any;
    "update:modelValue": (value: number | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: number | null) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | null) => any) | undefined;
}>, {
    currency: string;
    placeholder: string;
    locale: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCurrencyInput.vue.d.ts.map