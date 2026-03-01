# Componentes

O `@trx/ui-common` fornece dois grupos de componentes:

## Componentes Base TRX

21 componentes customizados com estilos próprios integrados ao sistema de tokens CSS.

| Componente | Descrição |
|:-----------|:----------|
| [TrxAppLayout](/components/trx-app-layout) | Layout completo com sidebar responsiva e header |
| [TrxPageHeader](/components/trx-page-header) | Cabeçalho de página com título, subtítulo e ações |
| [TrxCard](/components/trx-card) | Card base com suporte a header, content e footer |
| [TrxDataTable](/components/trx-data-table) | Tabela com filtro global integrado |
| [TrxEmptyState](/components/trx-empty-state) | Estado vazio com ícone, título e CTA |
| [TrxStatusBadge](/components/trx-status-badge) | Badge de status colorido |
| [TrxAlert](/components/trx-alert) | Alerta inline (info/success/warning/error) |
| [TrxUserAvatar](/components/trx-user-avatar) | Avatar com iniciais e indicador de status |
| [TrxKPICard](/components/trx-kpi-card) | Card de métrica com tendência |
| [TrxSearchBar](/components/trx-search-bar) | Modal de busca global (Cmd+K) |
| [TrxFilterBar](/components/trx-filter-bar) | Chips de filtros ativos |
| [TrxDataTableActions](/components/trx-data-table-actions) | Ações inline/menu para linhas de tabela |
| [TrxErrorPage](/components/trx-error-page) | Páginas de erro (404/403/500/503) |
| [TrxText](/components/trx-text) | Componente tipográfico polimórfico |

## Formulários

| Componente | Descrição |
|:-----------|:----------|
| [TrxFormField](/components/trx-form-field) | Wrapper de campo com label, erro e hint |

## Importação

```typescript
// Importação nomeada (recomendado — tree-shakeable)
import { TrxCard, TrxAlert, TrxText } from '@trx/ui-common'
```

## PrimeVue Wrappers

Todos os ~86 componentes PrimeVue 4.5 têm wrappers `Trx*`:

```typescript
import {
  TrxButton, TrxInputText, TrxSelect, TrxDialog,
  TrxMenu, TrxToast, TrxAccordion, TrxTabs,
  TrxDatePicker, TrxPassword, TrxFileUpload
} from '@trx/ui-common'
```

Re-exports raw PrimeVue (quando a API TRX difere):

```typescript
import { PvCard, PvDataTable, PvTabView } from '@trx/ui-common'
```
