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

import { ref, computed } from 'vue'

export interface UseFormOptions<T extends Record<string, unknown>> {
  /** Schema Zod para validação */
  schema: import('zod').ZodType<T>
  /** Valores iniciais */
  initialValues?: Partial<T>
}

export interface UseFormReturn<T extends Record<string, unknown>> {
  values: import('vue').Ref<Partial<T>>
  errors: import('vue').Ref<Partial<Record<keyof T, string>>>
  isValid: import('vue').ComputedRef<boolean>
  isDirty: import('vue').ComputedRef<boolean>
  isSubmitting: import('vue').Ref<boolean>
  handleSubmit: (onSubmit: (values: T) => void | Promise<void>) => (e?: Event) => Promise<void>
  resetForm: () => void
  setFieldError: (field: keyof T, message: string) => void
  validate: () => Promise<boolean>
}

export function useForm<T extends Record<string, unknown>>(
  options: UseFormOptions<T>,
): UseFormReturn<T> {
  const { schema, initialValues = {} } = options

  const values = ref<Partial<T>>({ ...initialValues } as Partial<T>)
  const errors = ref<Partial<Record<keyof T, string>>>({})
  const isSubmitting = ref(false)

  const isDirty = computed(() => {
    return JSON.stringify(values.value) !== JSON.stringify(initialValues)
  })

  const isValid = computed(() => {
    return Object.keys(errors.value).length === 0
  })

  const validate = async (): Promise<boolean> => {
    const result = await schema.safeParseAsync(values.value)
    if (result.success) {
      errors.value = {}
      return true
    }
    const fieldErrors: Partial<Record<keyof T, string>> = {}
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof T
      if (key && !fieldErrors[key]) {
        fieldErrors[key] = issue.message
      }
    }
    errors.value = fieldErrors
    return false
  }

  const handleSubmit =
    (onSubmit: (values: T) => void | Promise<void>) =>
    async (e?: Event) => {
      e?.preventDefault()
      isSubmitting.value = true
      try {
        const valid = await validate()
        if (valid) {
          await onSubmit(values.value as T)
        }
      } finally {
        isSubmitting.value = false
      }
    }

  const resetForm = () => {
    values.value = { ...initialValues } as Partial<T>
    errors.value = {}
    isSubmitting.value = false
  }

  const setFieldError = (field: keyof T, message: string) => {
    errors.value = { ...errors.value, [field]: message }
  }

  return {
    values: values as import('vue').Ref<Partial<T>>,
    errors: errors as import('vue').Ref<Partial<Record<keyof T, string>>>,
    isValid,
    isDirty,
    isSubmitting,
    handleSubmit,
    resetForm,
    setFieldError,
    validate,
  }
}
