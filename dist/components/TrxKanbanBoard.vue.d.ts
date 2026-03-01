export interface TrxKanbanCard {
    id: string;
    title: string;
    description?: string;
    tags?: string[];
    assignee?: string;
    priority?: 'low' | 'medium' | 'high';
    [key: string]: unknown;
}
export interface TrxKanbanColumn {
    id: string;
    label: string;
    color?: string;
    limit?: number;
    cards: TrxKanbanCard[];
}
type __VLS_Props = {
    columns?: TrxKanbanColumn[];
    loading?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    move: (cardId: string, fromCol: string, toCol: string) => any;
    cardClick: (card: TrxKanbanCard, colId: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onMove?: ((cardId: string, fromCol: string, toCol: string) => any) | undefined;
    onCardClick?: ((card: TrxKanbanCard, colId: string) => any) | undefined;
}>, {
    columns: TrxKanbanColumn[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxKanbanBoard.vue.d.ts.map