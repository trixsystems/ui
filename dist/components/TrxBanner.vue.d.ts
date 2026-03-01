/**
 * TrxBanner — Banner fixo/sticky no topo da página.
 *
 * @example
 * <TrxBanner type="warning" title="Manutenção programada" dismissible>
 *   O sistema ficará indisponível das 02h às 04h.
 * </TrxBanner>
 */
export type TrxBannerType = 'info' | 'success' | 'warning' | 'error' | 'neutral';
type __VLS_Props = {
    type?: TrxBannerType;
    title?: string;
    dismissible?: boolean;
    sticky?: boolean;
    icon?: string;
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
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    type: TrxBannerType;
    dismissible: boolean;
    sticky: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxBanner.vue.d.ts.map