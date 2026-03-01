# TrxRoleBadge

Badge de papel/função do usuário com cores predefinidas por role.

## Uso Básico

```vue
<TrxRoleBadge role="admin" />
<TrxRoleBadge role="agent" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `role` | `string` | — | Papel do usuário |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho do badge |
| `label` | `string` | — | Label customizado (usa o role como padrão) |

## Roles Predefinidos

| Role | Label | Cor |
|------|-------|-----|
| `admin` | Admin | Vermelho |
| `manager` | Gerente | Amarelo |
| `supervisor` | Supervisor | Azul |
| `agent` | Agente | Verde (accent) |
| `viewer` | Visualizador | Cinza |

Para roles não predefinidos, o componente usa o valor do prop como label com cor cinza.

## Exemplo

```vue
<template>
  <TrxRoleBadge :role="user.role" size="sm" />

  <!-- Personalizado -->
  <TrxRoleBadge role="custom" label="Coordenador" />
</template>
```
