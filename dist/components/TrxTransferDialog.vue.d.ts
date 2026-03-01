export type TrxTransferType = 'blind' | 'attended' | 'conference';
export interface TrxTransferTarget {
    id: string;
    name: string;
    extension: string;
    available?: boolean;
}
type __VLS_Props = {
    targets?: TrxTransferTarget[];
    modelValue?: boolean;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (v: boolean) => any;
    transfer: (target: TrxTransferTarget, type: TrxTransferType) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    onTransfer?: ((target: TrxTransferTarget, type: TrxTransferType) => any) | undefined;
}>, {
    modelValue: boolean;
    targets: TrxTransferTarget[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TrxTransferDialog.vue.d.ts.map