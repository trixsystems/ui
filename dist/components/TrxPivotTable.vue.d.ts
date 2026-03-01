export interface TrxPivotRow {
    [key: string]: unknown;
}
type __VLS_Props = {
    data: TrxPivotRow[];
    rowField: string;
    colField: string;
    valueField: string;
    aggregation?: 'sum' | 'count' | 'avg' | 'min' | 'max';
    rowLabel?: string;
    showTotals?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    aggregation: "sum" | "count" | "avg" | "min" | "max";
    rowLabel: string;
    showTotals: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxPivotTable.vue.d.ts.map