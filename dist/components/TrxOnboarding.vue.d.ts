export interface TrxOnboardingStep {
    title: string;
    description: string;
    icon?: string;
    image?: string;
}
type __VLS_Props = {
    steps?: TrxOnboardingStep[];
    modelValue?: number;
    title?: string;
    finishLabel?: string;
    skipLabel?: string;
    skippable?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (step: number) => any;
    skip: () => any;
    finish: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((step: number) => any) | undefined;
    onSkip?: (() => any) | undefined;
    onFinish?: (() => any) | undefined;
}>, {
    title: string;
    modelValue: number;
    steps: TrxOnboardingStep[];
    finishLabel: string;
    skipLabel: string;
    skippable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxOnboarding.vue.d.ts.map