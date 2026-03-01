# TrxConfirmButton

Botão com confirmação inline em dois passos. Evita modais para ações destrutivas simples.

## Uso Básico

```vue
<TrxConfirmButton label="Excluir" @confirm="deleteItem" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | `'Excluir'` | Texto do botão inicial |
| `confirmLabel` | `string` | `'Confirmar'` | Texto do botão de confirmação |
| `cancelLabel` | `string` | `'Cancelar'` | Texto do botão de cancelamento |
| `variant` | `'default' \| 'danger' \| 'warning'` | `'danger'` | Estilo visual |
| `icon` | `string` | — | Ícone PrimeIcons |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `disabled` | `boolean` | `false` | Desabilitar botão |

## Eventos

| Evento | Descrição |
|--------|-----------|
| `confirm` | Usuário confirmou a ação |

## Comportamento

1. Clique inicial → troca para estado "Tem certeza?" com botões Confirmar/Cancelar
2. Sem ação em 3 segundos → retorna ao estado inicial automaticamente
3. Clique em Confirmar → emite `confirm`
4. Clique em Cancelar → retorna ao estado inicial

## Exemplos

```vue
<!-- Excluir registro -->
<TrxConfirmButton
  label="Excluir Agente"
  icon="pi pi-trash"
  :loading="deleting"
  @confirm="deleteAgent"
/>

<!-- Aviso de atenção -->
<TrxConfirmButton
  label="Resetar Fila"
  variant="warning"
  confirm-label="Sim, resetar"
  @confirm="resetQueue"
/>
```
