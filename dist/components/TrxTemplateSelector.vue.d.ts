export interface TrxMessageTemplate {
    id: string;
    name: string;
    category: string;
    language: string;
    body: string;
    variables?: string[];
    channel?: string;
}
type __VLS_Props = {
    templates?: TrxMessageTemplate[];
    modelValue?: string | null;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (template: TrxMessageTemplate, variables: Record<string, string>) => any;
    "update:modelValue": (id: string | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((template: TrxMessageTemplate, variables: Record<string, string>) => any) | undefined;
    "onUpdate:modelValue"?: ((id: string | null) => any) | undefined;
}>, {
    modelValue: string | null;
    templates: TrxMessageTemplate[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxTemplateSelector.vue.d.ts.map