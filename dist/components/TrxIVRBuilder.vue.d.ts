export type TrxIVRNodeType = 'start' | 'menu' | 'message' | 'transfer' | 'hangup' | 'condition';
export interface TrxIVRNode {
    id: string;
    type: TrxIVRNodeType;
    label: string;
    x: number;
    y: number;
    options?: {
        key: string;
        label: string;
        nextId?: string;
    }[];
    nextId?: string;
    data?: Record<string, string>;
}
type __VLS_Props = {
    nodes?: TrxIVRNode[];
    readonly?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:nodes": (nodes: TrxIVRNode[]) => any;
    nodeClick: (node: TrxIVRNode) => any;
    nodeAdd: (type: TrxIVRNodeType) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:nodes"?: ((nodes: TrxIVRNode[]) => any) | undefined;
    onNodeClick?: ((node: TrxIVRNode) => any) | undefined;
    onNodeAdd?: ((type: TrxIVRNodeType) => any) | undefined;
}>, {
    nodes: TrxIVRNode[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxIVRBuilder.vue.d.ts.map