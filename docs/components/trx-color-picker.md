# TrxColorPicker

Seletor de cor com swatches predefinidos e input nativo `<input type="color">`.

## Uso

```vue
<TrxColorPicker v-model="selectedColor" :presets="myColors" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `modelValue` | `string` | `'#000000'` | Cor selecionada (hex) |
| `presets` | `string[]` | 12 cores | Cores predefinidas |
| `disabled` | `boolean` | `false` | Desabilitar |
