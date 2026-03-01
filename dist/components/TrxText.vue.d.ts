/**
 * TrxText — Componente tipográfico polimórfico.
 *
 * @example
 * <TrxText variant="h1">Título</TrxText>
 * <TrxText variant="body" muted>Texto secundário</TrxText>
 * <TrxText as="span" variant="label">Campo obrigatório</TrxText>
 */
export type TrxTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'body-lg' | 'caption' | 'label' | 'overline' | 'code';
type __VLS_Props = {
    variant?: TrxTextVariant;
    /** Tag HTML a renderizar (sobrescreve a tag padrão do variant) */
    as?: string;
    muted?: boolean;
    bold?: boolean;
    truncate?: boolean;
    /** Não aplicar estilos de margem */
    noMargin?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    variant: TrxTextVariant;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxText.vue.d.ts.map