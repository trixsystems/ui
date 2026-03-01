export type TrxLeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost';
export type TrxLeadPriority = 'low' | 'medium' | 'high';
type __VLS_Props = {
    name: string;
    company?: string;
    email?: string;
    phone?: string;
    value?: number;
    status?: TrxLeadStatus;
    priority?: TrxLeadPriority;
    assignee?: string;
    source?: string;
    updatedAt?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    email: () => any;
    view: () => any;
    call: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEmail?: (() => any) | undefined;
    onView?: (() => any) | undefined;
    onCall?: (() => any) | undefined;
}>, {
    status: TrxLeadStatus;
    priority: TrxLeadPriority;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxLeadCard.vue.d.ts.map