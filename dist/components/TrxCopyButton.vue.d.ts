type __VLS_Props = {
    /** Texto a ser copiado */
    value: string;
    /** Label do botão (padrão: exibe o valor) */
    label?: string;
    /** Exibe o valor como texto ao lado do botão */
    showValue?: boolean;
    /** Duração do feedback em ms */
    feedbackDuration?: number;
    size?: 'small' | 'normal';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    copy: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCopy?: ((value: string) => any) | undefined;
}>, {
    size: "small" | "normal";
    feedbackDuration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCopyButton.vue.d.ts.map