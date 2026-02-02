---
layout: default
title: Componentes
nav_order: 3
has_children: true
permalink: /components/
---

# Componentes
{: .no_toc }

Biblioteca de componentes Vue 3 reutilizaveis.
{: .fs-6 .fw-300 }

---

## Visao Geral

O @trx/ui-common fornece 14 componentes base custom e ~110 wrappers PrimeVue organizados por categoria.

## Componentes Base (custom TRX)

### Layout
Componentes para estrutura de paginas.

| Componente | Descricao |
|:-----------|:----------|
| [TrxAppLayout](./trx-app-layout) | Layout principal com sidebar e topbar |
| [TrxPageHeader](./trx-page-header) | Cabecalho de pagina |

### Autenticacao
Componentes para fluxos de login.

| Componente | Descricao |
|:-----------|:----------|
| [TrxLoginPage](./trx-login-page) | Pagina de login completa |
| [TrxLoginForm](./trx-login-form) | Formulario de login |

### Feedback
Componentes para feedback visual.

| Componente | Descricao |
|:-----------|:----------|
| [TrxStatusBadge](./trx-status-badge) | Badge de status |
| [TrxLoadingOverlay](./trx-loading-overlay) | Overlay de carregamento |
| [TrxEmptyState](./trx-empty-state) | Estado vazio |
| [TrxNotFound](./trx-not-found) | Pagina 404 |

### UI Base
Componentes basicos de interface.

| Componente | Descricao |
|:-----------|:----------|
| [TrxLogo](./trx-logo) | Logo TRX |
| [TrxThemeToggle](./trx-theme-toggle) | Toggle de tema |

---

## PrimeVue Wrappers

Todos os componentes PrimeVue 4.5 possuem wrappers `Trx*` que fazem pass-through completo de attrs e slots. Alguns wrappers sao enhanced com defaults PT-BR.

### Importacao

```typescript
import {
  TrxButton,
  TrxInputText,
  TrxSelect,
  TrxDialog,
  TrxDataTable
} from '@trx/ui-common'
```

### Categorias

| Categoria | Qtd | Componentes |
|:----------|:----|:------------|
| **Form** | 32 + 4 aliases | `TrxInputText`, `TrxSelect`, `TrxDatePicker`, `TrxPassword`, `TrxMultiSelect`, `TrxAutoComplete`, `TrxInputNumber`, `TrxCheckbox`, `TrxRadioButton`, `TrxTextarea`, `TrxToggleSwitch`, `TrxSlider`, `TrxInputMask`, `TrxInputOtp`, `TrxColorPicker`, `TrxKnob`, `TrxRating`, `TrxSelectButton`, `TrxToggleButton`, `TrxCascadeSelect`, `TrxTreeSelect`, `TrxListbox`, `TrxFloatLabel`, `TrxIftaLabel`, `TrxIconField`, `TrxInputIcon`, `TrxInputGroup`, `TrxInputGroupAddon`, `TrxInputChips`, `TrxCheckboxGroup`, `TrxRadioButtonGroup`, `TrxFluid` |
| **Button** | 4 | `TrxButton`, `TrxButtonGroup`, `TrxSplitButton`, `TrxSpeedDial` |
| **Data** | 12 | `TrxPaginator`, `TrxColumn`, `TrxColumnGroup`, `TrxRow`, `TrxDataView`, `TrxOrderList`, `TrxPickList`, `TrxOrganizationChart`, `TrxTimeline`, `TrxTree`, `TrxTreeTable`, `TrxVirtualScroller` |
| **Panel** | 23 + 1 alias | `TrxAccordion`, `TrxAccordionPanel`, `TrxAccordionHeader`, `TrxAccordionContent`, `TrxTabs`, `TrxTab`, `TrxTabList`, `TrxTabPanel`, `TrxTabPanels`, `TrxPanel`, `TrxFieldset`, `TrxDivider`, `TrxToolbar`, `TrxScrollPanel`, `TrxSplitter`, `TrxSplitterPanel`, `TrxStepper`, `TrxStep`, `TrxStepItem`, `TrxStepList`, `TrxStepPanel`, `TrxStepPanels`, `TrxDeferredContent` |
| **Overlay** | 6 + 2 aliases | `TrxDialog`, `TrxConfirmDialog`, `TrxConfirmPopup`, `TrxDrawer`, `TrxDynamicDialog`, `TrxPopover` |
| **Menu** | 10 | `TrxMenu`, `TrxMenubar`, `TrxMegaMenu`, `TrxTieredMenu`, `TrxPanelMenu`, `TrxContextMenu`, `TrxBreadcrumb`, `TrxDock`, `TrxSteps`, `TrxTabMenu` |
| **Message** | 3 | `TrxToast`, `TrxMessage`, `TrxInlineMessage` |
| **Media** | 4 | `TrxImage`, `TrxImageCompare`, `TrxCarousel`, `TrxGalleria` |
| **File** | 1 | `TrxFileUpload` |
| **Chart** | 1 | `TrxChart` |
| **Misc** | 14 | `TrxAvatar`, `TrxAvatarGroup`, `TrxBadge`, `TrxOverlayBadge`, `TrxChip`, `TrxTag`, `TrxProgressBar`, `TrxProgressSpinner`, `TrxSkeleton`, `TrxBlockUI`, `TrxInplace`, `TrxMeterGroup`, `TrxScrollTop`, `TrxTerminal` |

### Componentes Enhanced (com defaults PT-BR)

Estes wrappers adicionam valores padrao em portugues, que podem ser sobrescritos via props:

| Componente | Defaults |
|:-----------|:---------|
| `TrxDatePicker` | `dateFormat="dd/mm/yy"`, `showIcon=true` |
| `TrxInputNumber` | `locale="pt-BR"`, `minFractionDigits=2` |
| `TrxPassword` | `weakLabel="Fraco"`, `mediumLabel="Medio"`, `strongLabel="Forte"` |
| `TrxSelect` | `placeholder="Selecione..."`, `emptyMessage="Nenhum resultado"` |
| `TrxMultiSelect` | `placeholder="Selecione..."`, `emptyMessage="Nenhum resultado"` |
| `TrxAutoComplete` | `placeholder="Buscar..."` |
| `TrxDialog` | `modal=true`, `closable=true`, `draggable=false` |
| `TrxConfirmDialog` | `acceptLabel="Sim"`, `rejectLabel="Nao"` |
| `TrxFileUpload` | `chooseLabel="Escolher"`, `uploadLabel="Enviar"`, `cancelLabel="Cancelar"` |
| `TrxToast` | `position="top-right"` |
| `TrxPaginator` | `rowsPerPageOptions=[10,25,50]` |

### Aliases Legacy

Para compatibilidade com nomes de versoes anteriores do PrimeVue:

| Alias | Aponta para |
|:------|:------------|
| `TrxDropdown` | `TrxSelect` |
| `TrxCalendar` | `TrxDatePicker` |
| `TrxChips` | `TrxInputChips` |
| `TrxInputSwitch` | `TrxToggleSwitch` |
| `TrxSidebar` | `TrxDrawer` |
| `TrxOverlayPanel` | `TrxPopover` |
| `TrxTabView` | `TrxTabs` |

### Re-exports PrimeVue (componentes raw)

Para casos onde o componente base TRX (custom) tem API diferente do PrimeVue original:

| Re-export | Origem | Motivo |
|:----------|:-------|:-------|
| `PvCard` | `primevue/card` | `TrxCard` e custom com API diferente |
| `PvDataTable` | `primevue/datatable` | `TrxDataTable` e custom com filtro global embutido |
| `PvTabView` | `primevue/tabview` | API legada diferente de `TrxTabs` (nova API PrimeVue 4) |

---

## Importacao

```typescript
import {
  // Layout
  TrxAppLayout,
  TrxPageHeader,

  // Auth
  TrxLoginPage,
  TrxLoginForm,

  // Feedback
  TrxStatusBadge,
  TrxLoadingOverlay,
  TrxEmptyState,
  TrxNotFound,

  // Base
  TrxLogo,
  TrxThemeToggle,

  // PrimeVue Wrappers
  TrxButton,
  TrxInputText,
  TrxSelect,
  TrxDialog,
  TrxMenu,
  TrxToast,
  TrxAccordion,
  TrxTabs,

  // Re-exports raw PrimeVue
  PvCard,
  PvDataTable,
  PvTabView,

  // Types
  type MenuItem,
  type MenuSection
} from '@trx/ui-common'
```
