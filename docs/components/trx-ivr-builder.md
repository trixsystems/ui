# TrxIVRBuilder

Editor visual de URA (IVR) com canvas drag-friendly e barra de ferramentas de nós.

## Uso

```vue
<TrxIVRBuilder
  v-model:nodes="ivrNodes"
  @node-click="onNodeClick"
  @node-add="onNodeAdd"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `nodes` | `TrxIVRNode[]` | `[]` | Nós do fluxo IVR |
| `readonly` | `boolean` | `false` | Somente leitura |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `update:nodes` | `TrxIVRNode[]` | Nós atualizados |
| `nodeClick` | `TrxIVRNode` | Nó clicado |
| `nodeAdd` | `TrxIVRNodeType` | Tipo de nó a adicionar |

## Tipos de Nó

| Tipo | Ícone | Descrição |
|------|-------|-----------|
| `start` | play-circle | Ponto de entrada |
| `menu` | list | Menu DTMF |
| `message` | volume-up | Mensagem de áudio |
| `transfer` | phone | Transferência |
| `hangup` | times-circle | Encerrar chamada |
| `condition` | code | Condição lógica |

## Tipos

```ts
type TrxIVRNodeType = 'start' | 'menu' | 'message' | 'transfer' | 'hangup' | 'condition'

interface TrxIVRNode {
  id: string
  type: TrxIVRNodeType
  label: string
  x: number
  y: number
  options?: { key: string; label: string; nextId?: string }[]
  nextId?: string
  data?: Record<string, string>
}
```
