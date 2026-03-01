export interface TrxWizardStep {
    key: string;
    label: string;
    icon?: string;
    optional?: boolean;
}
type __VLS_Props = {
    steps?: TrxWizardStep[];
    modelValue?: number;
    canGoNext?: boolean;
    loading?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            step: TrxWizardStep;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (step: number) => any;
    next: (step: number) => any;
    prev: (step: number) => any;
    finish: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((step: number) => any) | undefined;
    onNext?: ((step: number) => any) | undefined;
    onPrev?: ((step: number) => any) | undefined;
    onFinish?: (() => any) | undefined;
}>, {
    modelValue: number;
    steps: TrxWizardStep[];
    canGoNext: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxWizard.vue.d.ts.map