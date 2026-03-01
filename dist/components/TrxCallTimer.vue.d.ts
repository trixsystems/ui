type __VLS_Props = {
    running?: boolean;
    startAt?: number;
    format?: 'mm:ss' | 'hh:mm:ss';
    color?: 'default' | 'success' | 'warning' | 'danger';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    tick: (seconds: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onTick?: ((seconds: number) => any) | undefined;
}>, {
    color: "default" | "success" | "warning" | "danger";
    running: boolean;
    startAt: number;
    format: "mm:ss" | "hh:mm:ss";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
//# sourceMappingURL=TrxCallTimer.vue.d.ts.map