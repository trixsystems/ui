export type TrxCRMEventType = 'call' | 'email' | 'note' | 'meeting' | 'task' | 'deal' | 'whatsapp' | 'stage';
export interface TrxCRMEvent {
    id: string;
    type: TrxCRMEventType;
    title: string;
    description?: string;
    author?: string;
    date: string;
    duration?: string;
    outcome?: 'positive' | 'negative' | 'neutral';
}
type __VLS_Props = {
    events?: TrxCRMEvent[];
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    eventClick: (event: TrxCRMEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEventClick?: ((event: TrxCRMEvent) => any) | undefined;
}>, {
    events: TrxCRMEvent[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCRMTimeline.vue.d.ts.map