export type TrxDialerStatus = 'pending' | 'dialing' | 'connected' | 'completed' | 'failed' | 'skipped';
export interface TrxDialerContact {
    id: string;
    name: string;
    phone: string;
    status: TrxDialerStatus;
    attempts?: number;
    lastAttempt?: string;
    notes?: string;
}
type __VLS_Props = {
    contacts?: TrxDialerContact[];
    loading?: boolean;
    currentId?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    view: (contact: TrxDialerContact) => any;
    dial: (contact: TrxDialerContact) => any;
    skip: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onView?: ((contact: TrxDialerContact) => any) | undefined;
    onDial?: ((contact: TrxDialerContact) => any) | undefined;
    onSkip?: ((id: string) => any) | undefined;
}>, {
    contacts: TrxDialerContact[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxDialerList.vue.d.ts.map