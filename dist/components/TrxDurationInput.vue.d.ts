type __VLS_Props = {
    modelValue?: number;
    format?: 'hh:mm:ss' | 'mm:ss';
    disabled?: boolean;
    invalid?: boolean;
    placeholder?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (seconds: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((seconds: number) => any) | undefined;
}>, {
    modelValue: number;
    format: "hh:mm:ss" | "mm:ss";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxDurationInput.vue.d.ts.map