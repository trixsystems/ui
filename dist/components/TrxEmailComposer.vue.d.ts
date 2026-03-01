export interface TrxEmailDraft {
    to: string[];
    cc?: string[];
    subject: string;
    body: string;
    attachments?: File[];
}
declare const _default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (draft: TrxEmailDraft) => any;
    discard: () => any;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onSend?: ((draft: TrxEmailDraft) => any) | undefined;
    onDiscard?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxEmailComposer.vue.d.ts.map