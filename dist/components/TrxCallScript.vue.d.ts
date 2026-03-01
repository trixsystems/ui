export interface TrxScriptStep {
    id: string;
    title: string;
    content: string;
    type?: 'info' | 'question' | 'action';
}
type __VLS_Props = {
    steps?: TrxScriptStep[];
    title?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    complete: () => any;
    stepChange: (index: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onComplete?: (() => any) | undefined;
    onStepChange?: ((index: number) => any) | undefined;
}>, {
    title: string;
    steps: TrxScriptStep[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCallScript.vue.d.ts.map