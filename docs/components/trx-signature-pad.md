# TrxSignaturePad

Área de assinatura em canvas com suporte a mouse e touch. Suporte a telas HiDPI (DPR).

## Uso

```vue
<TrxSignaturePad ref="padRef" :width="400" :height="180" />

<script setup>
const padRef = ref()
function save() {
  const dataUrl = padRef.value.toDataURL()
}
function clear() {
  padRef.value.clear()
}
</script>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `width` | `number` | `400` | Largura do canvas |
| `height` | `number` | `180` | Altura do canvas |
| `strokeColor` | `string` | text-primary | Cor do traço |
| `strokeWidth` | `number` | `2` | Espessura do traço |
| `disabled` | `boolean` | `false` | Desabilitar |

## Métodos Expostos

| Método | Retorno | Descrição |
|--------|---------|-----------|
| `clear()` | `void` | Limpar canvas |
| `toDataURL(type?)` | `string` | Exportar como imagem |
| `isEmpty` | `boolean` | Verificar se vazio |
