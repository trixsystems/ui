export interface TrxWaterfallItem {
    label: string;
    value: number;
    isTotal?: boolean;
}
type __VLS_Props = {
    items?: TrxWaterfallItem[];
    height?: number;
    unit?: string;
    positiveColor?: string;
    negativeColor?: string;
    totalColor?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    items: TrxWaterfallItem[];
    positiveColor: string;
    negativeColor: string;
    totalColor: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxWaterfallChart.vue.d.ts.map