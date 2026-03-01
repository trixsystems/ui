export interface TrxBreakReason {
    id: string;
    label: string;
    icon?: string;
    maxMinutes?: number;
}
type __VLS_Props = {
    reasons?: TrxBreakReason[];
    modelValue?: string | null;
    disabled?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (id: string | null) => any;
    end: () => any;
    start: (reason: TrxBreakReason) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((id: string | null) => any) | undefined;
    onEnd?: (() => any) | undefined;
    onStart?: ((reason: TrxBreakReason) => any) | undefined;
}>, {
    modelValue: string | null;
    reasons: TrxBreakReason[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxBreakSelector.vue.d.ts.map