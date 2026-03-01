import { TrxChatDirection, TrxChatMessageStatus, TrxChatMessageType } from './TrxChatBubble.vue';
export interface TrxChatMessage {
    id: string;
    message?: string;
    author?: string;
    time?: string;
    direction: TrxChatDirection;
    status?: TrxChatMessageStatus;
    type?: TrxChatMessageType;
    fileUrl?: string;
    fileName?: string;
}
export interface TrxChatContact {
    name: string;
    avatar?: string;
    status?: string;
    subtitle?: string;
}
type __VLS_Props = {
    messages?: TrxChatMessage[];
    contact?: TrxChatContact;
    loading?: boolean;
    placeholder?: string;
    disabled?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'header-actions'?(_: {}): any;
    };
    refs: {
        messagesEl: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    send: (text: string) => any;
    attach: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSend?: ((text: string) => any) | undefined;
    onAttach?: (() => any) | undefined;
}>, {
    placeholder: string;
    messages: TrxChatMessage[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    messagesEl: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxChatWindow.vue.d.ts.map