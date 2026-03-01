# TrxPermissionGate

Componente renderless que exibe conteúdo condicionalmente baseado nas permissões do usuário.

## Uso Básico

```vue
<TrxPermissionGate permission="calls.delete" :user-permissions="userPerms">
  <TrxButton label="Excluir" severity="danger" />
</TrxPermissionGate>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `permission` | `string \| string[]` | — | Permissão(ões) necessária(s) |
| `userPermissions` | `string[]` | — | Permissões do usuário atual |
| `operator` | `'and' \| 'or'` | `'or'` | Lógica para múltiplas permissões |

## Slots

| Slot | Descrição |
|------|-----------|
| `default` | Conteúdo exibido quando autorizado |
| `fallback` | Conteúdo alternativo quando não autorizado |

## Exemplos

### Uma permissão

```vue
<TrxPermissionGate permission="reports.export" :user-permissions="auth.permissions">
  <TrxExportButton @export="exportReport" />
</TrxPermissionGate>
```

### Múltiplas permissões (OR)

```vue
<!-- Exibe se tiver QUALQUER uma das permissões -->
<TrxPermissionGate
  :permission="['admin', 'calls.manage']"
  :user-permissions="auth.permissions"
  operator="or"
>
  <TrxButton label="Gerenciar Chamadas" />
</TrxPermissionGate>
```

### Com fallback

```vue
<TrxPermissionGate permission="billing.view" :user-permissions="auth.permissions">
  <TrxCard>Dados de cobrança...</TrxCard>
  <template #fallback>
    <TrxEmptyState message="Sem permissão para ver esta seção" />
  </template>
</TrxPermissionGate>
```
