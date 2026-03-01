export interface ToastOptions {
    life?: number;
    closable?: boolean;
    group?: string;
}
/**
 * Composable for showing toast notifications with convenience methods
 * MUST be called inside a component setup that has <Toast /> mounted
 */
export declare function useTrxToast(): {
    success: (message: string, title?: string, options?: ToastOptions) => void;
    error: (message: string, title?: string, options?: ToastOptions) => void;
    warn: (message: string, title?: string, options?: ToastOptions) => void;
    info: (message: string, title?: string, options?: ToastOptions) => void;
    clear: (group?: string) => void;
    clearAll: () => void;
    toast: import('primevue/toastservice').ToastServiceMethods;
};
/**
 * Alias for backwards compatibility
 * @deprecated Use useTrxToast instead
 */
export declare const useToastNotify: typeof useTrxToast;
/**
 * Re-export PrimeVue's useToast for direct access via @trx/ui-common
 */
export { useToast } from 'primevue/usetoast';
//# sourceMappingURL=useToast.d.ts.map