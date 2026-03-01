export interface TrxContextMenuItem {
    id: string;
    label: string;
    icon?: string;
    danger?: boolean;
    disabled?: boolean;
    separator?: boolean;
}
type __VLS_Props = {
    items?: TrxContextMenuItem[];
    modelValue?: boolean;
    x?: number;
    y?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (item: TrxContextMenuItem) => any;
    "update:modelValue": (v: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((item: TrxContextMenuItem) => any) | undefined;
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}>, {
    x: number;
    y: number;
    modelValue: boolean;
    items: TrxContextMenuItem[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TrxContextMenu.vue.d.ts.map