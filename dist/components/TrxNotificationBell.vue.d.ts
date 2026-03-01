export interface TrxNotification {
    id: string;
    title: string;
    body?: string;
    time?: string;
    read?: boolean;
    icon?: string;
    type?: 'info' | 'success' | 'warning' | 'danger';
}
type __VLS_Props = {
    items?: TrxNotification[];
    count?: number;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: () => any;
    read: (id: string) => any;
    "read-all": () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpen?: (() => any) | undefined;
    onRead?: ((id: string) => any) | undefined;
    "onRead-all"?: (() => any) | undefined;
}>, {
    items: TrxNotification[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxNotificationBell.vue.d.ts.map