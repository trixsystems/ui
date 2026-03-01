export interface MenuItem {
    label: string;
    icon: string;
    path: string;
    roles?: string[];
}
export interface MenuSection {
    key: string;
    label: string;
    items: MenuItem[];
}
type __VLS_Props = {
    appName: string;
    appIcon?: string;
    menuItems?: MenuItem[];
    menuSections?: MenuSection[];
    userName?: string;
    userRole?: string;
    statusLabel?: string;
    statusType?: 'online' | 'offline' | 'busy' | 'paused';
    showStatus?: boolean;
    onLogout?: () => void | Promise<void>;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'topbar-left'?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    logout: () => any;
    navigate: (path: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onLogout?: (() => any) | undefined;
    onNavigate?: ((path: string) => any) | undefined;
}>, {
    appIcon: string;
    statusType: "online" | "offline" | "busy" | "paused";
    showStatus: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxAppLayout.vue.d.ts.map