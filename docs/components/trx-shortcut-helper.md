# TrxShortcutHelper

Overlay de referência de atalhos de teclado agrupados. Usa `Teleport to="body"`.

## Uso

```vue
<TrxShortcutHelper
  v-model="showShortcuts"
  :shortcuts="shortcuts"
  trigger-key="?"
/>

<!-- Ativar com ? -->
<script setup>
window.addEventListener('keydown', (e) => {
  if (e.key === '?') showShortcuts.value = true
})
</script>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `shortcuts` | `TrxShortcut[]` | `[]` | Lista de atalhos |
| `modelValue` | `boolean` | `false` | Visível |
| `triggerKey` | `string` | `'?'` | Tecla de abertura (exibida no footer) |

## Tipos

```ts
interface TrxShortcut {
  keys: string[]        // Ex: ['Ctrl', 'K']
  description: string   // Ex: 'Abrir paleta de comandos'
  group?: string        // Ex: 'Navegação'
}
```
