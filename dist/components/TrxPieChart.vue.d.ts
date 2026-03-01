export interface TrxPieSlice {
    label: string;
    value: number;
    color?: string;
}
type __VLS_Props = {
    slices?: TrxPieSlice[];
    size?: number;
    showLegend?: boolean;
    showLabels?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: number;
    showLabels: boolean;
    slices: TrxPieSlice[];
    showLegend: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxPieChart.vue.d.ts.map