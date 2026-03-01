# TrxProfileCard

Card de perfil do usuário com avatar, informações, indicador de status e estatísticas.

## Uso Básico

```vue
<TrxProfileCard
  name="Maria Santos"
  email="maria@empresa.com"
  role="Agente"
  status="online"
/>
```

## Interface `TrxProfileStat`

```ts
interface TrxProfileStat {
  label: string
  value: string | number
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `name` | `string` | — | Nome do usuário |
| `email` | `string` | — | E-mail |
| `role` | `string` | — | Função/cargo |
| `avatar` | `string` | — | URL do avatar |
| `status` | `AgentStatus` | `'offline'` | Status de presença |
| `stats` | `TrxProfileStat[]` | — | Estatísticas |
| `loading` | `boolean` | `false` | Estado de carregamento |

### Tipo `AgentStatus`

```ts
type AgentStatus = 'online' | 'offline' | 'busy' | 'away'
```

## Exemplo com Estatísticas

```vue
<TrxProfileCard
  name="Carlos Agente"
  role="Agente de Suporte"
  status="busy"
  :stats="[
    { label: 'Chamadas hoje', value: 32 },
    { label: 'TMA', value: '3:45' },
    { label: 'Resolvidos', value: '94%' },
  ]"
>
  <template #actions>
    <TrxButton label="Editar" icon="pi pi-pencil" outlined size="small" />
  </template>
</TrxProfileCard>
```
