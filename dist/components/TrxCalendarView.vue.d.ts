export interface TrxCalendarEvent {
    id: string;
    title: string;
    date: string;
    color?: string;
    allDay?: boolean;
    time?: string;
}
type __VLS_Props = {
    events?: TrxCalendarEvent[];
    modelValue?: string;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (date: string) => any;
    eventClick: (event: TrxCalendarEvent) => any;
    dateClick: (date: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((date: string) => any) | undefined;
    onEventClick?: ((event: TrxCalendarEvent) => any) | undefined;
    onDateClick?: ((date: string) => any) | undefined;
}>, {
    events: TrxCalendarEvent[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCalendarView.vue.d.ts.map