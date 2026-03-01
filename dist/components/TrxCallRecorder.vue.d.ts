export type TrxRecordingState = 'idle' | 'recording' | 'paused';
type __VLS_Props = {
    state?: TrxRecordingState;
    duration?: number;
    disabled?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    stop: () => any;
    pause: () => any;
    resume: () => any;
    start: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onStop?: (() => any) | undefined;
    onPause?: (() => any) | undefined;
    onResume?: (() => any) | undefined;
    onStart?: (() => any) | undefined;
}>, {
    duration: number;
    state: TrxRecordingState;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxCallRecorder.vue.d.ts.map