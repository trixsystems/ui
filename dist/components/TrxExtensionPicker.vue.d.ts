export interface TrxExtension {
    id: string;
    name: string;
    extension: string;
    department?: string;
    available?: boolean;
    avatar?: string;
}
type __VLS_Props = {
    extensions?: TrxExtension[];
    modelValue?: string | null;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (ext: TrxExtension) => any;
    "update:modelValue": (id: string | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((ext: TrxExtension) => any) | undefined;
    "onUpdate:modelValue"?: ((id: string | null) => any) | undefined;
}>, {
    placeholder: string;
    modelValue: string | null;
    extensions: TrxExtension[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxExtensionPicker.vue.d.ts.map