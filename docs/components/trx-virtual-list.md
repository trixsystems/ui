# TrxVirtualList

Lista com scroll virtual para renderização eficiente de grandes conjuntos de dados.

## Uso

```vue
<TrxVirtualList
  :items="bigList"
  :item-height="48"
  height="400px"
>
  <template #default="{ item, index }">
    <div class="list-item">{{ index }}. {{ item.name }}</div>
  </template>
</TrxVirtualList>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `items` | `unknown[]` | `[]` | Array de dados |
| `itemHeight` | `number` | `48` | Altura fixa de cada item (px) |
| `height` | `string` | `'400px'` | Altura do container |
| `overscan` | `number` | `3` | Itens extras acima/abaixo |

## Slots

| Slot | Props | Descrição |
|------|-------|-----------|
| `default` | `{ item, index }` | Template de cada item |

## Notas

- Todos os itens devem ter altura idêntica (`itemHeight`)
- Ideal para listas com 1.000+ registros
- Usa posicionamento absoluto dentro de container relativo
