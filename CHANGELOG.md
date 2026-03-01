# Changelog

Todas as mudancas notaveis neste projeto serao documentadas neste arquivo.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).
Versionamento segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [Unreleased]

### Added

**Epic DS — Design Tokens**
- `src/tokens/index.ts` — tokens tipados como `as const` (cores, espaçamento, tipografia, sombras, z-index, animações)
- `src/tokens/primitive.json` — fonte JSON para Style Dictionary
- `style-dictionary.config.mjs` — gera `dist/tokens/tokens.css` e `dist/tokens/primitive.js`
- Export `@trx/ui-common/tokens` com sub-path `./tokens/css` para CSS gerado

**Epic FV — Formulários com Validação**
- `useForm` composable com Zod `safeParseAsync` (sem vee-validate no runtime)
  - Estado: `values`, `errors`, `isDirty`, `isSubmitting`, `isValid`
  - API: `handleSubmit`, `resetForm`, `setFieldError`, `validate`
- `TrxFormField` — wrapper com label, mensagem de erro (`role="alert"`), hint e estado disabled

**Epic NC — Novos Componentes** (7 componentes)
- `TrxAlert` — alertas inline (info/success/warning/error) com dismiss opcional
- `TrxUserAvatar` — avatar com iniciais automáticas, foto e status (online/offline/away/busy)
- `TrxKPICard` — card de métrica com tendência e skeleton de loading
- `TrxSearchBar` — modal de busca global com atalho Cmd+K
- `TrxFilterBar` — chips de filtros ativos com remoção individual e limpar todos
- `TrxDataTableActions` — ações inline/menu para linhas de tabela (auto-select por quantidade)
- `TrxErrorPage` — páginas de erro completas (404/403/500/503)

**Epic A11Y — Acessibilidade**
- `useFocusTrap` — trap de foco para modais/drawers com `activate`/`deactivate`
- `useAriaLive` — regiões aria-live singleton por politeness (`polite`/`assertive`)
- `TrxAppLayout` — skip-to-content (`#trx-main-content`) e `tabindex="-1"` no main

**Epic TI — Tipografia**
- `TrxText` — componente polimórfico com 13 variantes (h1-h6, body, body-sm, body-lg, caption, label, overline, code)
- `themes.css` — `@import` da fonte Inter via Google Fonts + `font-family` no `:root`

**Epic TH — Temas por App**
- `useAppTheme` — injeta `<style>` com CSS custom property overrides por app
  - Suporte a `primaryColor`, `primaryColorDark`, `primaryColorGlow`, `cardRadius`, `customVars`
  - `resetAppTheme()` para limpeza
- `data-trx-app` attribute no `<html>` para identificação do app ativo

**Epic PL — Playground & Docs (VitePress)**
- VitePress substitui Jekyll: config com nav, sidebar por seção, busca local, editLink
- Páginas de componentes: TrxAlert, TrxUserAvatar, TrxKPICard, TrxSearchBar, TrxFilterBar, TrxDataTableActions, TrxErrorPage, TrxText, TrxFormField
- Páginas de tokens: cores, espaçamento, tipografia, sombras, animações, z-index
- GitHub Actions `docs.yml` atualizado para VitePress (Node 20 + `npm run docs:build`)
- Scripts: `npm run docs:dev`, `docs:build`, `docs:preview`, `tokens`

**Suite de Testes (Epic TS)**
- 156 testes em 9 arquivos (Vitest 3 + @vue/test-utils + axe-core)

**Pipeline de Release (Epic VR)**
- release-it + commitlint + husky + GitHub Actions CI/Release

---

## [1.0.0] - 2026-02-28

### Added
- 14 componentes base TRX custom:
  - `TrxAppLayout` — layout principal com sidebar e topbar
  - `TrxPageHeader` — cabecalho de pagina com titulo, subtitulo e slot de acoes
  - `TrxCard` — card container com slots header, default e footer
  - `TrxStatCard` — card de estatistica com icone, valor e cor
  - `TrxDataTable` — DataTable com busca global integrada e empty/loading state
  - `TrxStatus` — indicador de status online/offline
  - `TrxStatusBadge` — badge de status generico com variantes
  - `TrxEmptyState` — estado vazio com icone, titulo e descricao
  - `TrxLoginPage` — pagina de login completa com animacoes
  - `TrxLoginForm` — formulario de login isolado
  - `TrxLoadingOverlay` — overlay de carregamento full-page
  - `TrxNotFound` — pagina 404
  - `TrxLogo` — logo TRX
  - `TrxThemeToggle` — botao de alternancia de tema
- ~110 wrappers PrimeVue 4.5 com prefixo `Trx*`:
  - Pass-through completo de attrs e slots
  - Defaults PT-BR nos componentes enhanced (DatePicker, Select, Password, Dialog, etc.)
  - 7 aliases legacy: TrxDropdown, TrxCalendar, TrxChips, TrxInputSwitch, TrxSidebar, TrxOverlayPanel, TrxTabView
  - Re-exports raw: PvCard, PvDataTable, PvTabView
- 6 composables:
  - `useTheme` — gerenciamento de tema Light/Dark com persistencia em localStorage
  - `useAuth` — autenticacao unificada para todos os apps TRX
  - `useApi` — cliente HTTP com interceptors de token e erro
  - `useTrxToast` — notificacoes toast com conveniences PT-BR
  - `useConfirm` — dialogo de confirmacao com defaults PT-BR (Sim/Nao)
  - `useDialog` — re-export do PrimeVue useDialog
- 20+ utilitarios de formatacao e helpers:
  - Datas: `formatDate`, `formatDateTime`, `formatTime`, `formatRelative`
  - Numeros: `formatCurrency`, `formatNumber`, `formatPercent`
  - Documentos BR: `formatPhone`, `formatCPF`, `formatCNPJ`
  - Duracao: `formatDuration`
  - Strings: `truncate`, `isEmpty`
  - Async: `debounce`, `throttle`, `sleep`
  - Objetos: `deepClone`, `uuid`
- ~1.096 classes CSS utilitarias em `utilities.css` (substitui PrimeFlex):
  - Display, Flexbox, Grid, Gap, Spacing, Width, Height
  - Typography, Border, Position, Overflow, Z-Index
  - Shadow, Opacity, Cursor, Transform, Transition, Animation
  - Colors semanticas com variaveis CSS
  - Prefixos responsivos: sm:, md:, lg:, xl:
- Sistema de temas em `themes.css`:
  - Light: Verde Palmeiras (#6ee7b7, #10b981)
  - Dark: Dracula Theme (#bd93f9, #50fa7b, #ff79c6)
  - Dark mode via classe `.dark` no `<html>`
  - 30+ variaveis CSS semanticas
- `configurePrimeVue(app)` — configura PrimeVue com preset TRX, ToastService, ConfirmationService, DialogService e diretiva Tooltip
- Documentacao em `docs/` (Jekyll)
- TypeScript strict mode com tipos exportados
- Build em modo library com Vite 5 + vite-plugin-dts

[Unreleased]: https://github.com/trixsystems/ui/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/trixsystems/ui/releases/tag/v1.0.0
