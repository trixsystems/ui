# TrxOnboarding

Card de onboarding passo a passo com dots de navegação, suporte a imagem/ícone e botão pular.

## Uso

```vue
<TrxOnboarding
  v-model="currentStep"
  :steps="onboardingSteps"
  title="Bem-vindo ao TRX!"
  :skippable="true"
  @finish="startApp"
  @skip="startApp"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `steps` | `TrxOnboardingStep[]` | `[]` | Etapas do onboarding |
| `modelValue` | `number` | `0` | Etapa atual |
| `title` | `string` | `'Bem-vindo!'` | Título do topo |
| `finishLabel` | `string` | `'Começar'` | Label do botão final |
| `skipLabel` | `string` | `'Pular'` | Label do botão pular |
| `skippable` | `boolean` | `true` | Mostrar botão pular |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `finish` | — | Concluiu onboarding |
| `skip` | — | Pulou onboarding |

## Tipos

```ts
interface TrxOnboardingStep {
  title: string
  description: string
  icon?: string   // PrimeIcons class (sem imagem)
  image?: string  // URL da imagem (prioridade sobre icon)
}
```
