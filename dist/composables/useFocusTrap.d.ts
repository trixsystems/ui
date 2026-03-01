import { Ref } from 'vue';
export interface UseFocusTrapOptions {
    /** Ativa imediatamente ao montar */
    immediate?: boolean;
    /** Elemento para retornar o foco ao desativar */
    returnFocusTo?: Ref<HTMLElement | null> | HTMLElement | null;
}
export declare function useFocusTrap(target: Ref<HTMLElement | null>, options?: UseFocusTrapOptions): {
    isActive: Ref<boolean, boolean>;
    activate: () => void;
    deactivate: () => void;
};
//# sourceMappingURL=useFocusTrap.d.ts.map