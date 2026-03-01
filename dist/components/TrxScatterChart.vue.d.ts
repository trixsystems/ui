export interface TrxScatterPoint {
    x: number;
    y: number;
    label?: string;
    size?: number;
}
export interface TrxScatterDataset {
    label: string;
    data: TrxScatterPoint[];
    color?: string;
}
type __VLS_Props = {
    datasets?: TrxScatterDataset[];
    height?: number;
    xLabel?: string;
    yLabel?: string;
    showGrid?: boolean;
    showTooltip?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    datasets: TrxScatterDataset[];
    showGrid: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxScatterChart.vue.d.ts.map