---
title: TrxResizableSidebar
description: Sidebar redimensionável com colapso e alça de arraste.
category: Layout
---

# TrxResizableSidebar

Arraste a alça para redimensionar. Botão de colapso/expansão embutido.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| side | `'left' \| 'right'` | `'left'` | Lado da sidebar |
| initialWidth | `number` | `280` | Largura inicial (px) |
| minWidth | `number` | `160` | Mínimo (px) |
| maxWidth | `number` | `600` | Máximo (px) |
| collapsible | `boolean` | `true` | Permite colapsar |

## Eventos

`collapse` · `expand` · `resize(width)`

## Uso

```vue
<TrxResizableSidebar :initial-width="300" side="left">
  <NavigationMenu />
</TrxResizableSidebar>
```
