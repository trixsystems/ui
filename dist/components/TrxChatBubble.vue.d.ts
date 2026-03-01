export type TrxChatDirection = 'in' | 'out';
export type TrxChatMessageType = 'text' | 'audio' | 'image' | 'file';
export type TrxChatMessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'error';
type __VLS_Props = {
    message?: string;
    author?: string;
    time?: string;
    direction?: TrxChatDirection;
    status?: TrxChatMessageStatus;
    type?: TrxChatMessageType;
    fileUrl?: string;
    fileName?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    type: TrxChatMessageType;
    direction: TrxChatDirection;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=TrxChatBubble.vue.d.ts.map