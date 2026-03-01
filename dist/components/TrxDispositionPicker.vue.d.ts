export interface TrxDisposition {
    id: string;
    label: string;
    color?: string;
    icon?: string;
    requireNote?: boolean;
}
type __VLS_Props = {
    dispositions?: TrxDisposition[];
    modelValue?: string;
    note?: string;
    disabled?: boolean;
    placeholder?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (id: string) => any;
    confirm: (id: string, note: string) => any;
    "update:note": (note: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((id: string) => any) | undefined;
    onConfirm?: ((id: string, note: string) => any) | undefined;
    "onUpdate:note"?: ((note: string) => any) | undefined;
}>, {
    placeholder: string;
    dispositions: TrxDisposition[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxDispositionPicker.vue.d.ts.map