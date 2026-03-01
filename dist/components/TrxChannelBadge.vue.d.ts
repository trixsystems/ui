export type TrxChannel = 'whatsapp' | 'phone' | 'email' | 'sms' | 'chat' | 'telegram' | 'instagram' | 'messenger';
type __VLS_Props = {
    channel: TrxChannel;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    iconOnly?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "sm" | "md" | "lg";
    showLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
//# sourceMappingURL=TrxChannelBadge.vue.d.ts.map