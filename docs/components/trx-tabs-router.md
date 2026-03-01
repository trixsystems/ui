# TrxTabsRouter

Navegação por abas com controle via `v-model`. Ideal para integração com vue-router.

## Uso Básico

```vue
<TrxTabsRouter v-model="activeTab" :tabs="tabs">
  <div v-if="activeTab === 'calls'">...</div>
  <div v-if="activeTab === 'reports'">...</div>
</TrxTabsRouter>
```

## Interface `TrxRouterTab`

```ts
interface TrxRouterTab {
  key: string
  label: string
  icon?: string
  badge?: number | string
  disabled?: boolean
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `tabs` | `TrxRouterTab[]` | — | Lista de abas |
| `modelValue` | `string` | — | Chave da aba ativa |

## Exemplo com Vue Router

```vue
<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: 'pi pi-home' },
  { key: 'calls',     label: 'Chamadas',  icon: 'pi pi-phone', badge: 5 },
  { key: 'reports',   label: 'Relatórios', icon: 'pi pi-chart-bar' },
  { key: 'settings',  label: 'Configurações', icon: 'pi pi-cog' },
]

const activeTab = computed({
  get: () => route.name as string,
  set: key => router.push({ name: key }),
})
</script>

<TrxTabsRouter v-model="activeTab" :tabs="tabs">
  <RouterView />
</TrxTabsRouter>
```
