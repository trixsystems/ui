type __VLS_Props = {
    accept?: string;
    multiple?: boolean;
    maxSize?: number;
    disabled?: boolean;
    label?: string;
    hint?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (message: string) => any;
    files: (files: File[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((message: string) => any) | undefined;
    onFiles?: ((files: File[]) => any) | undefined;
}>, {
    label: string;
    hint: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInput: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxFileDropzone.vue.d.ts.map