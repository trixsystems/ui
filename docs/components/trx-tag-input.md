# TrxTagInput

Input de tags/chips com autocomplete. Adiciona com Enter/vírgula, remove com Backspace.

## Uso

```vue
<TrxTagInput
  v-model="tags"
  :suggestions="allTags"
  placeholder="Adicionar tag..."
  :max="10"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string[]` | `[]` | Tags selecionadas |
| `placeholder` | `string` | `'Adicionar...'` | Placeholder |
| `disabled` | `boolean` | `false` | Desabilitar |
| `invalid` | `boolean` | `false` | Estado de erro |
| `max` | `number` | — | Limite de tags |
| `suggestions` | `string[]` | `[]` | Sugestões de autocomplete |
