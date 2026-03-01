type __VLS_Props = {
    side?: 'left' | 'right';
    initialWidth?: number;
    minWidth?: number;
    maxWidth?: number;
    collapsible?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    resize: (width: number) => any;
    collapse: () => any;
    expand: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onResize?: ((width: number) => any) | undefined;
    onCollapse?: (() => any) | undefined;
    onExpand?: (() => any) | undefined;
}>, {
    side: "left" | "right";
    initialWidth: number;
    minWidth: number;
    maxWidth: number;
    collapsible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxResizableSidebar.vue.d.ts.map