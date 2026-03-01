type __VLS_Props = {
    data: number[];
    progress?: number;
    color?: string;
    progressColor?: string;
    height?: number;
    barWidth?: number;
    barGap?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    seek: (progress: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSeek?: ((progress: number) => any) | undefined;
}>, {
    progress: number;
    height: number;
    barWidth: number;
    barGap: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    canvas: HTMLCanvasElement;
}, HTMLCanvasElement>;
export default _default;
//# sourceMappingURL=TrxWaveform.vue.d.ts.map