/**
 * TrxAgentStatus — Seletor/exibidor de status do agente de call center.
 *
 * @example
 * <TrxAgentStatus v-model="status" />
 * <TrxAgentStatus :model-value="status" readonly />
 */
export type TrxAgentStatusValue = 'online' | 'busy' | 'paused' | 'offline';
export interface TrxAgentStatusOption {
    value: TrxAgentStatusValue;
    label: string;
    color: string;
    icon: string;
}
type __VLS_Props = {
    modelValue?: TrxAgentStatusValue;
    readonly?: boolean;
    /** Exibe apenas o badge sem dropdown */
    compact?: boolean;
    options?: TrxAgentStatusOption[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: TrxAgentStatusValue) => any;
    "update:modelValue": (value: TrxAgentStatusValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: TrxAgentStatusValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: TrxAgentStatusValue) => any) | undefined;
}>, {
    readonly: boolean;
    modelValue: TrxAgentStatusValue;
    compact: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=TrxAgentStatus.vue.d.ts.map