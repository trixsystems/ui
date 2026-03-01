---
title: TrxQueueMetrics
description: Painel de métricas em tempo real de uma fila de atendimento.
category: Telecom
---

# TrxQueueMetrics

Exibe aguardando, ativo, abandonado, nível de serviço, tempo médio de espera e agentes disponíveis.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| metrics | `TrxQueueMetric` | — | Dados da fila |
| title | `string` | `'Métricas da Fila'` | Título do painel |

## Uso

```vue
<TrxQueueMetrics :metrics="queueData" title="Fila Suporte" />
```
