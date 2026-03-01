export interface TrxUserMenuItem {
    key: string;
    label: string;
    icon?: string;
    separator?: boolean;
    danger?: boolean;
}
type __VLS_Props = {
    name: string;
    email?: string;
    avatar?: string;
    role?: string;
    items?: TrxUserMenuItem[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (key: string) => any;
    logout: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((key: string) => any) | undefined;
    onLogout?: (() => any) | undefined;
}>, {
    items: TrxUserMenuItem[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxUserMenu.vue.d.ts.map