---
layout: home
title: Home
nav_order: 1
description: "Biblioteca de componentes Vue compartilhada para o ecossistema TRX Systems"
permalink: /
---

# @trx/ui-common
{: .fs-9 }

Biblioteca de componentes, composables e utilitarios Vue 3 compartilhada para o ecossistema TRX Systems.
{: .fs-6 .fw-300 }

[Comecar agora](/trx-ui-common/guide/getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Ver no GitHub](https://github.com/trxcommunications/trx-ui-common){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## O que e o @trx/ui-common?

O `@trx/ui-common` e um pacote npm que centraliza toda a infraestrutura de frontend compartilhada entre os aplicativos TRX:

- **TRX Call** - Sistema PABX IP
- **TRX Phone** - Softphone WebRTC
- **TRX Dialer** - Motor de discagem
- **TRX Predictive** - Discagem preditiva
- **TRX Omnichannel** - Atendimento multicanal

## Recursos Principais

### Componentes Vue
{: .text-purple-300 }

Componentes reutilizaveis prontos para uso:
- `TrxAppLayout` - Layout completo com sidebar
- `TrxLoginPage` - Pagina de login com animacoes
- `TrxPageHeader` - Cabecalho de pagina
- `TrxStatusBadge` - Badges de status
- E muito mais...

### Composables
{: .text-blue-300 }

Logica reativa reutilizavel:
- `useAuth` - Autenticacao unificada
- `useTheme` - Gerenciamento de tema
- `useToast` - Notificacoes toast
- `useApi` - Cliente HTTP

### Utilitarios
{: .text-green-300 }

Funcoes helper para tarefas comuns:
- Formatacao de datas, moedas, telefones
- Debounce, throttle, deep clone
- Geracao de UUID
- E mais...

### Sistema de Temas
{: .text-yellow-300 }

Tema unificado Light/Dark:
- **Light**: Verde Palmeiras (#6ee7b7)
- **Dark**: Dracula Theme (#bd93f9)
- Variaveis CSS padronizadas
- Suporte a PrimeVue

---

## Stack Tecnologica

| Tecnologia | Versao | Uso |
|:-----------|:-------|:----|
| Vue | 3.5 | Framework |
| TypeScript | 5.5 | Linguagem |
| Vite | 5.4 | Build tool |
| PrimeVue | 4.5 | Componentes UI |
| Pinia | 2.2 | State management |
| Axios | 1.7 | HTTP client |
| dayjs | 1.11 | Manipulacao de datas |

---

## Instalacao Rapida

```bash
# Clonar o repositorio
git clone https://github.com/trxcommunications/trx-ui-common.git

# Instalar dependencias
cd trx-ui-common
npm install

# Build
npm run build

# Link para uso local
npm link
```

```bash
# Em cada app que vai usar
cd seu-app/frontend
npm link @trx/ui-common
```

---

## Exemplo de Uso

```typescript
// main.ts
import { createApp } from 'vue'
import { configurePrimeVue } from '@trx/ui-common/primevue'
import '@trx/ui-common/themes'

const app = createApp(App)
configurePrimeVue(app)
app.mount('#app')
```

```vue
<script setup lang="ts">
import { TrxAppLayout, TrxPageHeader } from '@trx/ui-common/components'
import { useAuth } from '@trx/ui-common/composables'
import { formatDate } from '@trx/ui-common/utils'
</script>

<template>
  <TrxAppLayout app-name="MeuApp">
    <TrxPageHeader title="Dashboard" />
    <!-- Seu conteudo -->
  </TrxAppLayout>
</template>
```

---

## Aplicativos do Ecossistema

{: .note }
Todos os aplicativos TRX compartilham a mesma base de UI, garantindo consistencia visual e de experiencia.

| App | Descricao | Status |
|:----|:----------|:-------|
| TRX Call | PABX IP institucional | Producao |
| TRX Phone | Softphone WebRTC | Producao |
| TRX Dialer | Motor de discagem | Producao |
| TRX Predictive | Discagem preditiva | Producao |
| TRX Omnichannel | Atendimento multicanal | Producao |

---

## Contribuindo

Este e um projeto interno da TRX Systems. Para contribuir:

1. Crie uma branch a partir de `main`
2. Faca suas alteracoes
3. Execute `npm run build` para verificar
4. Abra um Pull Request

---

## Licenca

Proprietario - [TRIX Systems](https://trixsystems.io/)

&copy; 2024-2026 TRIX Systems. Todos os direitos reservados.
