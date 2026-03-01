/**
 * @trx/ui-common — useAriaLive
 *
 * Cria uma região aria-live para anúncios dinâmicos acessíveis.
 * Screen readers leem os anúncios para o usuário sem mover o foco.
 *
 * @example
 * const { announce } = useAriaLive()
 * announce('3 resultados encontrados')
 *
 * // Anúncio urgente (interrompe o que o SR está lendo)
 * const { announce } = useAriaLive('assertive')
 * announce('Erro ao salvar o formulário')
 */
export type AriaLivePoliteness = 'polite' | 'assertive';
export declare function useAriaLive(politeness?: AriaLivePoliteness): {
    announce: (message: string, clearAfter?: number) => void;
};
//# sourceMappingURL=useAriaLive.d.ts.map