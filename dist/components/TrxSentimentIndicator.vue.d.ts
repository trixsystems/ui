export type TrxSentiment = 'positive' | 'neutral' | 'negative' | 'unknown';
type __VLS_Props = {
    sentiment?: TrxSentiment;
    score?: number;
    label?: string;
    showScore?: boolean;
    size?: 'sm' | 'md' | 'lg';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    sentiment: TrxSentiment;
    score: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxSentimentIndicator.vue.d.ts.map