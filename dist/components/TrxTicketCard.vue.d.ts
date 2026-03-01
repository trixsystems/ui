import { TrxChannel } from './TrxChannelBadge.vue';
export type TrxTicketStatus = 'open' | 'pending' | 'resolved' | 'closed';
export type TrxTicketPriority = 'low' | 'medium' | 'high' | 'urgent';
type __VLS_Props = {
    id: string | number;
    title: string;
    status?: TrxTicketStatus;
    priority?: TrxTicketPriority;
    channel?: TrxChannel;
    agent?: string;
    customer?: string;
    createdAt?: string;
    updatedAt?: string;
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
    view: () => any;
    assign: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onView?: (() => any) | undefined;
    onAssign?: (() => any) | undefined;
}>, {
    status: TrxTicketStatus;
    priority: TrxTicketPriority;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxTicketCard.vue.d.ts.map