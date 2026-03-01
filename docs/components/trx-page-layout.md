# TrxPageLayout

Layout padrão de página com breadcrumb, título, subtítulo e slots para header, actions e footer.

## Uso Básico

```vue
<TrxPageLayout title="Relatórios" subtitle="Análise de chamadas">
  <TrxCard>...</TrxCard>
</TrxPageLayout>
```

## Interface `TrxBreadcrumb`

```ts
interface TrxBreadcrumb {
  label: string
  to?: string   // href para link
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `title` | `string` | — | Título da página |
| `subtitle` | `string` | — | Subtítulo |
| `loading` | `boolean` | `false` | Estado de carregamento (skeleton no título) |
| `breadcrumbs` | `TrxBreadcrumb[]` | — | Trilha de navegação |

## Slots

| Slot | Descrição |
|------|-----------|
| `default` | Conteúdo principal |
| `header` | Conteúdo extra no cabeçalho |
| `actions` | Botões de ação (alinhados à direita) |
| `footer` | Rodapé da página |

## Exemplo Completo

```vue
<TrxPageLayout
  title="Gerenciar Agentes"
  subtitle="Configure e monitore seus agentes"
  :breadcrumbs="[
    { label: 'Início', to: '/' },
    { label: 'Equipes', to: '/teams' },
    { label: 'Agentes' }
  ]"
>
  <template #actions>
    <TrxButton label="Novo Agente" icon="pi pi-plus" @click="openCreate" />
  </template>

  <TrxDataTable :data="agents" :columns="columns" />
</TrxPageLayout>
```
