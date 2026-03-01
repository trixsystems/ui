# TrxDashboardGrid

Grid responsivo de 12 colunas para layouts de dashboard. Colapsa para uma coluna em mobile.

## Uso Básico

```vue
<TrxDashboardGrid>
  <div data-cols="3">Card A</div>
  <div data-cols="9">Card B</div>
</TrxDashboardGrid>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `columns` | `number` | `12` | Número de colunas do grid |
| `gap` | `string` | `'1rem'` | Espaçamento entre células |

## Slots

| Slot | Descrição |
|------|-----------|
| `default` | Conteúdo do grid |

## Uso com Colunas

Utilize o atributo `data-cols` nos filhos para controlar a largura:

```vue
<TrxDashboardGrid :columns="12" gap="1.5rem">
  <!-- 4 colunas de largura -->
  <TrxMetricCard v-for="m in metrics" style="grid-column: span 3" />

  <!-- Largura total -->
  <TrxCard style="grid-column: span 12">
    Gráfico principal
  </TrxCard>
</TrxDashboardGrid>
```

## Responsividade

Em telas menores que 768px, o grid colapsa automaticamente para uma coluna:
- `grid-template-columns: 1fr !important`
- Todos os filhos com `data-cols` recebem `grid-column: span 1`
