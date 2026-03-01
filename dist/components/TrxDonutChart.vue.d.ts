export interface TrxDonutSlice {
    label: string;
    value: number;
    color?: string;
}
type __VLS_Props = {
    slices?: TrxDonutSlice[];
    size?: number;
    thickness?: number;
    label?: string;
    sublabel?: string;
    showLegend?: boolean;
    animated?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: number;
    thickness: number;
    animated: boolean;
    slices: TrxDonutSlice[];
    showLegend: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxDonutChart.vue.d.ts.map