import { TrxChannel } from './TrxChannelBadge.vue';
export interface TrxConversation {
    id: string;
    contact: string;
    avatar?: string;
    lastMessage?: string;
    lastTime?: string;
    unread?: number;
    channel?: TrxChannel;
    status?: 'open' | 'pending' | 'resolved';
    agent?: string;
}
type __VLS_Props = {
    conversations?: TrxConversation[];
    activeId?: string;
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (conv: TrxConversation) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((conv: TrxConversation) => any) | undefined;
}>, {
    conversations: TrxConversation[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxConversationList.vue.d.ts.map