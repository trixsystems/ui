export type TrxCallStatus = 'ringing' | 'active' | 'hold' | 'ended' | 'missed';
type __VLS_Props = {
    callerId: string;
    callerName?: string;
    duration?: number;
    status: TrxCallStatus;
    direction?: 'inbound' | 'outbound';
    queue?: string;
    agent?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hold: () => any;
    answer: () => any;
    hangup: () => any;
    transfer: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onHold?: (() => any) | undefined;
    onAnswer?: (() => any) | undefined;
    onHangup?: (() => any) | undefined;
    onTransfer?: (() => any) | undefined;
}>, {
    direction: "inbound" | "outbound";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxCallCard.vue.d.ts.map