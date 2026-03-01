export interface TrxQueueData {
    name: string;
    waiting: number;
    active: number;
    abandoned: number;
    serviceLevel: number;
    avgWait: number;
    longestWait: number;
    agentsReady: number;
    agentsTotal: number;
}
type __VLS_Props = {
    queues?: TrxQueueData[];
    loading?: boolean;
    compact?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    queues: TrxQueueData[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxQueueMetrics.vue.d.ts.map