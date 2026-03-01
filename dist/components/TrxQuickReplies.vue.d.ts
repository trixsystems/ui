export interface TrxQuickReply {
    id: string;
    label: string;
    value?: string;
}
type __VLS_Props = {
    replies?: TrxQuickReply[];
    disabled?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (reply: TrxQuickReply) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((reply: TrxQuickReply) => any) | undefined;
}>, {
    replies: TrxQuickReply[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxQuickReplies.vue.d.ts.map