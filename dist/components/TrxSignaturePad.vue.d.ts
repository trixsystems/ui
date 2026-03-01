type __VLS_Props = {
    width?: number;
    height?: number;
    lineColor?: string;
    lineWidth?: number;
    disabled?: boolean;
    placeholder?: string;
};
declare function clear(): void;
declare function toDataURL(): string | null;
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    clear: typeof clear;
    toDataURL: typeof toDataURL;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (dataUrl: string | null) => any;
    clear: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((dataUrl: string | null) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    placeholder: string;
    height: number;
    width: number;
    lineColor: string;
    lineWidth: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    canvas: HTMLCanvasElement;
}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxSignaturePad.vue.d.ts.map