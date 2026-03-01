export interface TrxQueueCall {
    id: string;
    callerId: string;
    callerName?: string;
    waitTime: number;
    priority?: 'low' | 'normal' | 'high';
}
type __VLS_Props = {
    calls: TrxQueueCall[];
    queueName?: string;
    maxWaitWarning?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    answer: (callId: string) => any;
    transfer: (callId: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onAnswer?: ((callId: string) => any) | undefined;
    onTransfer?: ((callId: string) => any) | undefined;
}>, {
    maxWaitWarning: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCallQueue.vue.d.ts.map