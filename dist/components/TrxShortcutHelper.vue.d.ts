export interface TrxShortcut {
    keys: string[];
    description: string;
    group?: string;
}
type __VLS_Props = {
    shortcuts?: TrxShortcut[];
    modelValue?: boolean;
    triggerKey?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (open: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((open: boolean) => any) | undefined;
}>, {
    modelValue: boolean;
    shortcuts: TrxShortcut[];
    triggerKey: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TrxShortcutHelper.vue.d.ts.map