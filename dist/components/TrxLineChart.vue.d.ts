export interface TrxLineDataset {
    label: string;
    data: number[];
    color?: string;
}
type __VLS_Props = {
    labels?: string[];
    datasets?: TrxLineDataset[];
    height?: number;
    showDots?: boolean;
    showGrid?: boolean;
    filled?: boolean;
    smooth?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    labels: string[];
    datasets: TrxLineDataset[];
    showDots: boolean;
    showGrid: boolean;
    filled: boolean;
    smooth: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxLineChart.vue.d.ts.map