export interface TrxBulletItem {
    label: string;
    value: number;
    target: number;
    max?: number;
    ranges?: [number, number, number];
    color?: string;
}
type __VLS_Props = {
    items?: TrxBulletItem[];
    height?: number;
    unit?: string;
    showLabels?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    height: number;
    showLabels: boolean;
    items: TrxBulletItem[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxBulletChart.vue.d.ts.map