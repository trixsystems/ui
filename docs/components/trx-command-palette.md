# TrxCommandPalette

Paleta de comandos estilo Ctrl+K com busca, grupos e navegação por teclado.

## Uso

```vue
<TrxCommandPalette
  v-model="open"
  :commands="commands"
  placeholder="Buscar comando..."
/>

<!-- Ativar com Ctrl+K -->
<script setup>
useKeydown('k', (e) => { if (e.ctrlKey) open.value = true })
</script>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `commands` | `TrxCommand[]` | `[]` | Lista de comandos |
| `modelValue` | `boolean` | `false` | Visível |
| `placeholder` | `string` | `'Buscar...'` | Placeholder do input |

## Tipos

```ts
interface TrxCommand {
  id: string
  label: string
  description?: string
  icon?: string
  group?: string
  shortcut?: string[]
  action: () => void
}
```

## Navegação por Teclado

- `↑` / `↓` — Navegar entre comandos
- `Enter` — Executar comando selecionado
- `Escape` — Fechar paleta
