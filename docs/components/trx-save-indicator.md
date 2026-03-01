# TrxSaveIndicator

Indicador inline do estado de salvamento automático com animação de transição.

## Uso Básico

```vue
<TrxSaveIndicator :state="saveState" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `state` | `SaveState` | — | Estado atual |
| `label` | `string` | — | Label para estado `saved` |
| `errorMessage` | `string` | `'Erro ao salvar'` | Mensagem de erro |

### Tipo `SaveState`

```ts
type SaveState = 'idle' | 'saving' | 'saved' | 'error'
```

## Comportamento Visual

| Estado | Ícone | Texto |
|--------|-------|-------|
| `idle` | — | — (invisível) |
| `saving` | `pi-spinner` (girando) | Salvando... |
| `saved` | `pi-check-circle` (verde) | Salvo |
| `error` | `pi-exclamation-circle` (vermelho) | Erro ao salvar |

## Exemplo com Auto-save

```vue
<script setup>
const saveState = ref<'idle' | 'saving' | 'saved' | 'error'>('idle')

const autoSave = useDebounceFn(async () => {
  saveState.value = 'saving'
  try {
    await api.save(formData.value)
    saveState.value = 'saved'
    setTimeout(() => saveState.value = 'idle', 2000)
  } catch {
    saveState.value = 'error'
  }
}, 1000)

watch(formData, autoSave, { deep: true })
</script>

<template>
  <div class="flex justify-content-between align-items-center">
    <h2>Configurações</h2>
    <TrxSaveIndicator :state="saveState" label="Configurações salvas" />
  </div>
</template>
```
