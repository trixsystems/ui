# TrxLoadingOverlay

Overlay de carregamento em tela cheia com spinner animado e mensagem opcional.

## Uso

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { TrxLoadingOverlay } from '@trx/ui-common'

const loading = ref(false)

async function saveData() {
  loading.value = true
  await api.save(form.value)
  loading.value = false
}
</script>

<template>
  <!-- Básico -->
  <TrxLoadingOverlay :visible="loading" />

  <!-- Com mensagem -->
  <TrxLoadingOverlay :visible="loading" message="Salvando dados..." />
</template>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|:-----|:-----|:-------|:----------|
| `visible` | `boolean` | **required** | Exibe ou oculta o overlay |
| `message` | `string` | — | Texto exibido abaixo do spinner |

## Comportamento

- Posicionado em `fixed` com `z-index: 9999` — cobre toda a viewport
- Fundo semi-transparente (`rgba(0,0,0,0.5)`)
- Spinner de 50 × 50 px (PrimeVue `ProgressSpinner`)
- Animação de entrada/saída com `fade` (opacity 0.2s)

## Casos de uso

```vue
<!-- Ao enviar formulário -->
<TrxLoadingOverlay :visible="submitting" message="Processando..." />

<!-- Ao carregar a página -->
<TrxLoadingOverlay :visible="!initialized" message="Carregando sistema..." />

<!-- Ao fazer upload -->
<TrxLoadingOverlay :visible="uploading" message="Enviando arquivo..." />
```

::: warning
Por ser `fixed`, o overlay cobre toda a tela, incluindo modais. Use com cautela em páginas com dialogs abertos.
:::
