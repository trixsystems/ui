---
layout: default
title: useToast
nav_order: 2
parent: Composables
---

# useToast
{: .no_toc }

Composable para notificacoes toast.
{: .fs-6 .fw-300 }

---

## Uso Basico

```typescript
import { useToast } from '@trx/ui-common/composables'

const toast = useToast()

// Tipos de notificacao
toast.success('Registro salvo!')
toast.error('Erro ao processar')
toast.warn('Atencao!')
toast.info('Nova mensagem')
```

---

## Metodos

| Metodo | Descricao |
|:-------|:----------|
| `success(message, title?, options?)` | Toast de sucesso (verde) |
| `error(message, title?, options?)` | Toast de erro (vermelho) |
| `warn(message, title?, options?)` | Toast de aviso (amarelo) |
| `info(message, title?, options?)` | Toast informativo (azul) |
| `clear()` | Limpar toast atual |
| `clearAll()` | Limpar todos os toasts |

---

## Opcoes

```typescript
interface ToastOptions {
  life?: number       // Duracao em ms (default: 3000)
  closable?: boolean  // Permitir fechar (default: true)
}
```

---

## Exemplos

### Com Titulo

```typescript
toast.success('Usuario cadastrado com sucesso!', 'Sucesso')
toast.error('Verifique os campos obrigatorios', 'Erro de Validacao')
```

### Com Duracao Customizada

```typescript
toast.error('Sessao expirada', 'Erro', { life: 10000 })
```

### Limpar Toasts

```typescript
// Limpar toast atual
toast.clear()

// Limpar todos
toast.clearAll()
```

---

## Configuracao

O toast usa o PrimeVue ToastService internamente. Certifique-se de que o `<Toast />` esta no App.vue:

```vue
<!-- App.vue -->
<template>
  <Toast />
  <router-view />
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
</script>
```

{: .note }
Se voce usar `configurePrimeVue()`, o ToastService ja esta configurado automaticamente.
