# TrxLeadCard

Card de lead/oportunidade CRM com status, prioridade, valor formatado e ações.

## Uso

```vue
<TrxLeadCard
  name="Empresa ABC"
  company="ABC Ltda"
  :value="50000"
  status="proposal"
  priority="high"
  assignee="João Silva"
  @call="onCall"
  @email="onEmail"
  @view="onView"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `name` | `string` | — | Nome do lead |
| `company` | `string` | — | Empresa |
| `email` | `string` | — | E-mail |
| `phone` | `string` | — | Telefone |
| `value` | `number` | — | Valor da oportunidade |
| `status` | `string` | — | new/contacted/qualified/proposal/won/lost |
| `priority` | `string` | — | low/medium/high/urgent |
| `assignee` | `string` | — | Responsável |
| `source` | `string` | — | Origem do lead |
| `updatedAt` | `string` | — | Última atualização |
