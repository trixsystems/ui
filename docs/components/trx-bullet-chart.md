---
title: TrxBulletChart
description: Bullet chart com zonas de performance e linha de meta.
category: Gráficos
---

# TrxBulletChart

Visualiza um valor atual contra uma meta, com zonas coloridas de poor/ok/good.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| value | `number` | — | Valor atual |
| target | `number` | — | Meta |
| max | `number` | — | Máximo da escala |
| label | `string` | — | Rótulo |
| ranges | `[number, number, number]` | — | Limites poor/ok/good |

## Uso

```vue
<TrxBulletChart :value="85" :target="90" :max="100" label="FCR" :ranges="[60,80,100]" />
```
