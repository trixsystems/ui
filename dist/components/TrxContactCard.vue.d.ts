import { TrxChannel } from './TrxChannelBadge.vue';
type __VLS_Props = {
    name: string;
    phone?: string;
    email?: string;
    channel?: TrxChannel;
    status?: string;
    lastContact?: string;
    avatar?: string;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    view: () => any;
    call: () => any;
    chat: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onView?: (() => any) | undefined;
    onCall?: (() => any) | undefined;
    onChat?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxContactCard.vue.d.ts.map