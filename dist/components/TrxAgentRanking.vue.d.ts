export interface TrxAgentRankEntry {
    id: string;
    name: string;
    avatar?: string;
    value: number;
    unit?: string;
    delta?: number;
    position?: number;
}
type __VLS_Props = {
    entries?: TrxAgentRankEntry[];
    title?: string;
    loading?: boolean;
    highlight?: string;
    maxValue?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    rowClick: (entry: TrxAgentRankEntry) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRowClick?: ((entry: TrxAgentRankEntry) => any) | undefined;
}>, {
    title: string;
    entries: TrxAgentRankEntry[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxAgentRanking.vue.d.ts.map