export interface TrxCannedResponse {
    id: string;
    shortcut: string;
    title: string;
    content: string;
    category?: string;
}
type __VLS_Props = {
    responses?: TrxCannedResponse[];
    modelValue?: boolean;
    trigger?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (response: TrxCannedResponse) => any;
    "update:modelValue": (v: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((response: TrxCannedResponse) => any) | undefined;
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}>, {
    modelValue: boolean;
    responses: TrxCannedResponse[];
    trigger: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TrxCannedResponses.vue.d.ts.map