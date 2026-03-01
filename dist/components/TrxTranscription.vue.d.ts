export interface TrxTranscriptionSegment {
    id: string;
    speaker: 'agent' | 'customer' | string;
    text: string;
    startTime: number;
    endTime?: number;
    confidence?: number;
}
type __VLS_Props = {
    segments: TrxTranscriptionSegment[];
    currentTime?: number;
    agentName?: string;
    customerName?: string;
    searchQuery?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    agentName: string;
    customerName: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxTranscription.vue.d.ts.map