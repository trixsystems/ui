export interface TrxConferenceParticipant {
    id: string;
    name: string;
    number: string;
    role?: 'host' | 'participant';
    muted?: boolean;
    speaking?: boolean;
    duration?: number;
}
type __VLS_Props = {
    participants?: TrxConferenceParticipant[];
    muted?: boolean;
    onHold?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    end: () => any;
    muteParticipant: (id: string) => any;
    kickParticipant: (id: string) => any;
    addParticipant: () => any;
    toggleMute: () => any;
    toggleHold: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEnd?: (() => any) | undefined;
    onMuteParticipant?: ((id: string) => any) | undefined;
    onKickParticipant?: ((id: string) => any) | undefined;
    onAddParticipant?: (() => any) | undefined;
    onToggleMute?: (() => any) | undefined;
    onToggleHold?: (() => any) | undefined;
}>, {
    participants: TrxConferenceParticipant[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxConferencePanel.vue.d.ts.map