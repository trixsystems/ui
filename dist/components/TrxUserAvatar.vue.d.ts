export type TrxAvatarStatus = 'online' | 'offline' | 'away' | 'busy';
export type TrxAvatarSize = 'sm' | 'md' | 'lg' | 'xl';
type __VLS_Props = {
    name?: string;
    src?: string;
    status?: TrxAvatarStatus;
    size?: TrxAvatarSize;
    /** Cor de fundo personalizada para as iniciais */
    color?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: TrxAvatarSize;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxUserAvatar.vue.d.ts.map