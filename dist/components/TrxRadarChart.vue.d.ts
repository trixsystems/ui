export interface TrxRadarDataset {
    label: string;
    data: number[];
    color?: string;
}
type __VLS_Props = {
    axes?: string[];
    datasets?: TrxRadarDataset[];
    size?: number;
    max?: number;
    levels?: number;
    filled?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: number;
    max: number;
    datasets: TrxRadarDataset[];
    filled: boolean;
    axes: string[];
    levels: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxRadarChart.vue.d.ts.map