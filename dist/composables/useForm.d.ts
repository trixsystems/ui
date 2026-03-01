/**
 * @trx/ui-common — useForm
 *
 * Composable para formulários com validação declarativa via Vee-Validate + Zod.
 *
 * @requires vee-validate ^4
 * @requires zod ^3
 *
 * @example
 * import { z } from 'zod'
 * import { useForm } from '@trx/ui-common'
 *
 * const schema = z.object({
 *   email: z.string().email('E-mail inválido'),
 *   password: z.string().min(8, 'Mínimo 8 caracteres'),
 * })
 *
 * const { values, errors, isValid, handleSubmit, resetForm } = useForm({ schema })
 */
export interface UseFormOptions<T extends Record<string, unknown>> {
    /** Schema Zod para validação */
    schema: import('zod').ZodType<T>;
    /** Valores iniciais */
    initialValues?: Partial<T>;
}
export interface UseFormReturn<T extends Record<string, unknown>> {
    values: import('vue').Ref<Partial<T>>;
    errors: import('vue').Ref<Partial<Record<keyof T, string>>>;
    isValid: import('vue').ComputedRef<boolean>;
    isDirty: import('vue').ComputedRef<boolean>;
    isSubmitting: import('vue').Ref<boolean>;
    handleSubmit: (onSubmit: (values: T) => void | Promise<void>) => (e?: Event) => Promise<void>;
    resetForm: () => void;
    setFieldError: (field: keyof T, message: string) => void;
    validate: () => Promise<boolean>;
}
export declare function useForm<T extends Record<string, unknown>>(options: UseFormOptions<T>): UseFormReturn<T>;
//# sourceMappingURL=useForm.d.ts.map