export type TrxMonitorMode = 'listen' | 'whisper' | 'barge';
export interface TrxMonitorCall {
    id: string;
    agentName: string;
    agentExt: string;
    customerName?: string;
    customerPhone: string;
    duration: number;
    queue?: string;
}
type __VLS_Props = {
    calls?: TrxMonitorCall[];
    loading?: boolean;
    activeId?: string;
    activeMode?: TrxMonitorMode;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    stop: (id: string) => any;
    monitor: (call: TrxMonitorCall, mode: TrxMonitorMode) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onStop?: ((id: string) => any) | undefined;
    onMonitor?: ((call: TrxMonitorCall, mode: TrxMonitorMode) => any) | undefined;
}>, {
    calls: TrxMonitorCall[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCallMonitor.vue.d.ts.map