export interface TrxHeatmapCell {
    day: number;
    hour: number;
    value: number;
}
type __VLS_Props = {
    data: TrxHeatmapCell[];
    maxValue?: number;
    cellSize?: number;
    showLabels?: boolean;
    days?: string[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    cellSize: number;
    showLabels: boolean;
    days: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxHeatmap.vue.d.ts.map