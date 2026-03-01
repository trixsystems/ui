export interface TrxBarDataset {
    label: string;
    data: number[];
    color?: string;
}
type __VLS_Props = {
    labels?: string[];
    datasets?: TrxBarDataset[];
    height?: number;
    showGrid?: boolean;
    showValues?: boolean;
    horizontal?: boolean;
    stacked?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    horizontal: boolean;
    showValues: boolean;
    labels: string[];
    datasets: TrxBarDataset[];
    showGrid: boolean;
    stacked: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxBarChart.vue.d.ts.map