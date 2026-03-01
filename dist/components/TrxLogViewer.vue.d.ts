export type TrxLogLevel = 'debug' | 'info' | 'warn' | 'error' | 'success';
export interface TrxLogEntry {
    id: string;
    level: TrxLogLevel;
    message: string;
    timestamp?: string;
    source?: string;
    meta?: Record<string, unknown>;
}
type __VLS_Props = {
    logs: TrxLogEntry[];
    maxHeight?: string;
    filter?: TrxLogLevel[];
    autoScroll?: boolean;
    showTimestamp?: boolean;
    showSource?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    maxHeight: string;
    autoScroll: boolean;
    showTimestamp: boolean;
    showSource: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    container: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxLogViewer.vue.d.ts.map