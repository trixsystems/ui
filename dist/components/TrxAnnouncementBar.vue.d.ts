export interface TrxAnnouncement {
    id: string;
    message: string;
    type?: 'info' | 'success' | 'warning' | 'danger';
    link?: {
        label: string;
        href: string;
    };
    dismissible?: boolean;
}
type __VLS_Props = {
    announcements?: TrxAnnouncement[];
    rotateInterval?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    announcements: TrxAnnouncement[];
    rotateInterval: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TrxAnnouncementBar.vue.d.ts.map