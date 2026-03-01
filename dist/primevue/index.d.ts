import { App } from 'vue';
import { default as Aura } from '@primevue/themes/aura';
declare const TrxPreset: typeof Aura;
export interface TrxPrimeVueOptions {
    ripple?: boolean;
    prefix?: string;
}
/**
 * Configure PrimeVue with TRX defaults
 */
export declare function configurePrimeVue(app: App, options?: TrxPrimeVueOptions): void;
/**
 * PrimeVue theme configuration object
 */
export declare const primeVueConfig: {
    theme: {
        preset: typeof Aura;
        options: {
            prefix: string;
            darkModeSelector: string;
            cssLayer: boolean;
        };
    };
    ripple: boolean;
};
export { Aura, TrxPreset };
//# sourceMappingURL=index.d.ts.map