# TrxFeatureFlag

Gate de feature flag renderless. Exibe slot padrão se flag ativa, slot `disabled` caso contrário.

## Uso

```vue
<TrxFeatureFlag flag="new-dashboard" :flags="featureFlags">
  <NewDashboard />
  <template #disabled>
    <OldDashboard />
  </template>
</TrxFeatureFlag>
```

## Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `flag` | `string` | Nome da feature flag |
| `flags` | `Record<string, boolean>` | Mapa de flags ativas |

## Slots

| Slot | Descrição |
|------|-----------|
| `default` | Renderizado quando flag está ativa |
| `disabled` | Renderizado quando flag está inativa (opcional) |

## Exemplo com composable

```ts
// composables/useFeatureFlags.ts
const flags = {
  'new-dashboard': true,
  'beta-dialer': false,
}
```
