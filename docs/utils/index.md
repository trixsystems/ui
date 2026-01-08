---
layout: default
title: Utilitarios
nav_order: 5
has_children: false
permalink: /utils/
---

# Utilitarios
{: .no_toc }

Funcoes helper para tarefas comuns.
{: .fs-6 .fw-300 }

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Importacao

```typescript
import {
  // Datas
  formatDate,
  formatDateTime,
  formatTime,
  formatRelative,
  dayjs,

  // Numeros
  formatCurrency,
  formatNumber,
  formatPercent,

  // Strings
  formatPhone,
  formatCPF,
  formatCNPJ,
  formatDuration,
  truncate,

  // Funcoes
  debounce,
  throttle,
  deepClone,
  isEmpty,
  uuid,
  sleep
} from '@trx/ui-common/utils'
```

---

## Formatacao de Datas

### formatDate

Formata data no padrao brasileiro.

```typescript
formatDate('2026-01-08')                    // "08/01/2026"
formatDate('2026-01-08', 'DD MMM YYYY')     // "08 jan 2026"
formatDate(null)                             // "-"
```

### formatDateTime

Formata data e hora.

```typescript
formatDateTime('2026-01-08T14:30:00')       // "08/01/2026 14:30"
formatDateTime('2026-01-08T14:30:00', 'DD/MM HH:mm')  // "08/01 14:30"
```

### formatTime

Formata apenas hora.

```typescript
formatTime('2026-01-08T14:30:45')           // "14:30:45"
formatTime('2026-01-08T14:30:45', 'HH:mm')  // "14:30"
```

### formatRelative

Formata tempo relativo.

```typescript
formatRelative('2026-01-08T10:00:00')  // "ha 4 horas"
formatRelative('2026-01-07')            // "ha 1 dia"
```

### dayjs

Instancia do dayjs configurada com locale pt-br.

```typescript
import { dayjs } from '@trx/ui-common/utils'

dayjs().format('MMMM YYYY')  // "janeiro 2026"
dayjs().add(1, 'week')
```

---

## Formatacao de Numeros

### formatCurrency

Formata valor monetario (BRL por padrao).

```typescript
formatCurrency(1234.56)        // "R$ 1.234,56"
formatCurrency(1234.56, 'USD') // "US$ 1.234,56"
formatCurrency(null)           // "-"
```

### formatNumber

Formata numero com separadores.

```typescript
formatNumber(1234567)      // "1.234.567"
formatNumber(1234.567, 2)  // "1.234,57"
```

### formatPercent

Formata porcentagem.

```typescript
formatPercent(75.5)    // "75,5%"
formatPercent(100)     // "100,0%"
formatPercent(33.333)  // "33,3%"
```

---

## Formatacao de Strings (BR)

### formatPhone

Formata telefone brasileiro.

```typescript
formatPhone('11999998888')   // "(11) 99999-8888"
formatPhone('1134567890')    // "(11) 3456-7890"
formatPhone(null)            // "-"
```

### formatCPF

Formata CPF.

```typescript
formatCPF('12345678901')  // "123.456.789-01"
```

### formatCNPJ

Formata CNPJ.

```typescript
formatCNPJ('12345678000199')  // "12.345.678/0001-99"
```

### formatDuration

Formata duracao em segundos para HH:MM:SS.

```typescript
formatDuration(3661)   // "01:01:01"
formatDuration(125)    // "02:05"
formatDuration(45)     // "00:45"
```

### truncate

Trunca texto com elipses.

```typescript
truncate('Texto muito longo para exibir', 20)  // "Texto muito longo pa..."
truncate('Curto', 20)                           // "Curto"
```

---

## Funcoes Utilitarias

### debounce

Atrasa execucao ate parar de chamar.

```typescript
const searchDebounced = debounce((query: string) => {
  fetchResults(query)
}, 300)

// No input
<input @input="searchDebounced($event.target.value)" />
```

### throttle

Limita frequencia de execucao.

```typescript
const handleScroll = throttle(() => {
  updateScrollPosition()
}, 100)

window.addEventListener('scroll', handleScroll)
```

### deepClone

Clona objeto profundamente.

```typescript
const original = { a: { b: 1 } }
const copy = deepClone(original)

copy.a.b = 2
console.log(original.a.b)  // 1 (nao alterado)
```

### isEmpty

Verifica se valor esta vazio.

```typescript
isEmpty(null)       // true
isEmpty(undefined)  // true
isEmpty('')         // true
isEmpty('  ')       // true
isEmpty([])         // true
isEmpty({})         // true
isEmpty('texto')    // false
isEmpty([1, 2])     // false
```

### uuid

Gera UUID v4.

```typescript
uuid()  // "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
```

### sleep

Aguarda X milissegundos.

```typescript
console.log('Iniciando...')
await sleep(2000)
console.log('2 segundos depois')
```

---

## Exemplos de Uso

### Em Templates Vue

```vue
<template>
  <DataTable :value="users">
    <Column field="name" header="Nome" />
    <Column field="phone" header="Telefone">
      <template #body="{ data }">
        {{ formatPhone(data.phone) }}
      </template>
    </Column>
    <Column field="salary" header="Salario">
      <template #body="{ data }">
        {{ formatCurrency(data.salary) }}
      </template>
    </Column>
    <Column field="createdAt" header="Criado em">
      <template #body="{ data }">
        {{ formatDate(data.createdAt) }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { formatPhone, formatCurrency, formatDate } from '@trx/ui-common/utils'
</script>
```

### Search com Debounce

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { debounce } from '@trx/ui-common/utils'

const searchQuery = ref('')
const results = ref([])

const searchDebounced = debounce(async (query: string) => {
  if (query.length < 3) return
  results.value = await api.get(`/search?q=${query}`)
}, 300)
</script>

<template>
  <InputText
    v-model="searchQuery"
    @input="searchDebounced(searchQuery)"
    placeholder="Buscar..."
  />
</template>
```
