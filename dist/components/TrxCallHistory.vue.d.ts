export type TrxCallDirection = 'inbound' | 'outbound' | 'missed';
export interface TrxCallRecord {
    id: string;
    callerId: string;
    callerName?: string;
    direction: TrxCallDirection;
    duration?: number;
    startedAt: string;
    status?: string;
    agent?: string;
    queue?: string;
    recording?: string;
}
type __VLS_Props = {
    calls?: TrxCallRecord[];
    loading?: boolean;
    showRecording?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    view: (call: TrxCallRecord) => any;
    play: (id: string) => any;
    callback: (call: TrxCallRecord) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onView?: ((call: TrxCallRecord) => any) | undefined;
    onPlay?: ((id: string) => any) | undefined;
    onCallback?: ((call: TrxCallRecord) => any) | undefined;
}>, {
    calls: TrxCallRecord[];
    showRecording: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCallHistory.vue.d.ts.map