export type TrxSoftphoneStatus = 'idle' | 'ringing' | 'active' | 'hold' | 'muted';
type __VLS_Props = {
    status: TrxSoftphoneStatus;
    callInfo?: {
        number: string;
        name?: string;
        duration?: number;
    };
    canTransfer?: boolean;
    canHold?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hold: () => any;
    answer: () => any;
    hangup: () => any;
    transfer: () => any;
    mute: () => any;
    unmute: () => any;
    resume: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onHold?: (() => any) | undefined;
    onAnswer?: (() => any) | undefined;
    onHangup?: (() => any) | undefined;
    onTransfer?: (() => any) | undefined;
    onMute?: (() => any) | undefined;
    onUnmute?: (() => any) | undefined;
    onResume?: (() => any) | undefined;
}>, {
    canTransfer: boolean;
    canHold: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxSoftphone.vue.d.ts.map