type ExportFormat = 'csv' | 'excel' | 'pdf';
type __VLS_Props = {
    formats?: ExportFormat[];
    loading?: boolean;
    disabled?: boolean;
    label?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    export: (format: ExportFormat) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onExport?: ((format: ExportFormat) => any) | undefined;
}>, {
    label: string;
    formats: ExportFormat[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxExportButton.vue.d.ts.map