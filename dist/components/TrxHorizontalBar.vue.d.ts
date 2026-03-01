export interface TrxHBarItem {
    label: string;
    value: number;
    color?: string;
    target?: number;
}
type __VLS_Props = {
    items?: TrxHBarItem[];
    unit?: string;
    showValues?: boolean;
    showTarget?: boolean;
    maxValue?: number;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    items: TrxHBarItem[];
    showValues: boolean;
    showTarget: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxHorizontalBar.vue.d.ts.map