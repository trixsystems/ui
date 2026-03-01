# TrxCallScript

Script de atendimento passo a passo com barra de progresso e tipos de etapa.

## Uso

```vue
<TrxCallScript
  :steps="script"
  title="Script de Vendas"
  @complete="onComplete"
  @step-change="onStepChange"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `steps` | `TrxScriptStep[]` | `[]` | Etapas do script |
| `title` | `string` | `'Script'` | Título do painel |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `complete` | — | Script concluído |
| `stepChange` | `index: number` | Mudança de etapa |

## Tipos

```ts
interface TrxScriptStep {
  title: string
  content: string
  type?: 'info' | 'question' | 'action'
}
```
