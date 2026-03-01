export interface TrxCommand {
    id: string;
    label: string;
    description?: string;
    icon?: string;
    shortcut?: string;
    group?: string;
    action: () => void;
}
type __VLS_Props = {
    commands?: TrxCommand[];
    modelValue?: boolean;
    placeholder?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (open: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((open: boolean) => any) | undefined;
}>, {
    placeholder: string;
    modelValue: boolean;
    commands: TrxCommand[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    searchInput: HTMLInputElement;
}, any>;
export default _default;
//# sourceMappingURL=TrxCommandPalette.vue.d.ts.map