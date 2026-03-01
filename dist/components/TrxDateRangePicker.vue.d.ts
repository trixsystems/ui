export interface TrxDateRange {
    start: string | null;
    end: string | null;
}
type __VLS_Props = {
    modelValue?: TrxDateRange;
    disabled?: boolean;
    startPlaceholder?: string;
    endPlaceholder?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (range: TrxDateRange) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((range: TrxDateRange) => any) | undefined;
}>, {
    modelValue: TrxDateRange;
    startPlaceholder: string;
    endPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxDateRangePicker.vue.d.ts.map