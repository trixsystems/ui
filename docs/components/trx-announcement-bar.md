---
title: TrxAnnouncementBar
description: Barra de anúncios rotativa no topo da página.
category: Sistema
---

# TrxAnnouncementBar

Suporta múltiplos anúncios com rotação automática, dots de navegação, link e dismiss individual.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| announcements | `TrxAnnouncement[]` | `[]` | Lista de anúncios |
| rotateInterval | `number` | `0` | Intervalo de rotação (ms). 0 = sem rotação |

## Uso

```vue
<TrxAnnouncementBar
  :announcements="[
    { id: '1', message: 'Sistema em manutenção às 22h', type: 'warning', dismissible: true }
  ]"
  :rotate-interval="5000"
/>
```
