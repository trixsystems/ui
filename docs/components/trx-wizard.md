# TrxWizard

Assistente multi-etapas com barra de progresso, controle de navegação e validação por etapa.

## Uso

```vue
<TrxWizard
  v-model="currentStep"
  :steps="steps"
  :can-go-next="isStepValid"
  :loading="saving"
  @finish="onFinish"
>
  <template #step-0><FormPersonal /></template>
  <template #step-1><FormAddress /></template>
  <template #step-2><FormReview /></template>
</TrxWizard>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `steps` | `TrxWizardStep[]` | `[]` | Definição das etapas |
| `modelValue` | `number` | `0` | Etapa atual (0-based) |
| `canGoNext` | `boolean` | `true` | Habilitar avanço |
| `loading` | `boolean` | `false` | Estado de carregamento |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `next` | `number` | Avançou para etapa |
| `prev` | `number` | Voltou para etapa |
| `finish` | — | Concluiu o wizard |

## Tipos

```ts
interface TrxWizardStep {
  title: string
  icon?: string
  description?: string
}
```
