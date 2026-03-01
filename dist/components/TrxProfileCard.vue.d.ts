export interface TrxProfileStat {
    label: string;
    value: string | number;
}
type __VLS_Props = {
    name: string;
    email?: string;
    role?: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'busy' | 'away';
    stats?: TrxProfileStat[];
    loading?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    status: "online" | "offline" | "busy" | "away";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxProfileCard.vue.d.ts.map