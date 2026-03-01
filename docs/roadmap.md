# Roadmap do Design System

Análise e plano de evolução do `@trx/ui-common` como design system maduro.

Análise realizada em **fevereiro de 2026**.

---

## Status Geral

| Epic | Status | Progresso |
|:-----|:-------|:----------|
| DS — Design Tokens | **Concluído** | 100% |
| PL — Playground & Docs | **Concluído** | 100% |
| TS — Testes | **Concluído** | 100% |
| FV — Form Validation | **Concluído** | 100% |
| NC — Novos Componentes | **Concluído** | 100% |
| VR — Versionamento | **Concluído** | 100% |
| A11Y — Acessibilidade | **Concluído** | 100% |
| TI — Tipografia & Ícones | **Concluído** | 100% |
| TH — Temas por App | **Concluído** | 100% |

---

## Epic DS — Design Tokens ✓

**Tokens tipados com exportação CSS (Style Dictionary) + TypeScript.**

- [x] DS-1 — Hierarquia primitive → semantic → component (`src/tokens/primitive.json`)
- [x] DS-2 — Style Dictionary v4 gera `dist/tokens/tokens.css` e `dist/tokens/primitive.js`
- [x] DS-3 — Tokens de espaçamento, breakpoints, z-index, animações, sombras
- [x] DS-4 — `import { tokens } from '@trx/ui-common/tokens'`
- [x] DS-5 — Documentação completa em `/tokens/`

---

## Epic PL — Playground & Docs ✓

**Documentação VitePress em `docs/` com GitHub Pages.**

- [x] PL-1 — VitePress substitui Jekyll (config, nav, sidebar, search)
- [x] PL-2 — Páginas de componentes e tokens completas
- [x] PL-3 — GitHub Actions `docs.yml` para build+deploy automático
- [x] PL-4 — Scripts `npm run docs:dev` / `docs:build` / `docs:preview`
- [x] PL-5 — Tema dark Dracula + fonte Inter + ícones PrimeIcons no site

---

## Epic TS — Testes ✓

**156 testes, 9 arquivos, cobertura de composables e componentes.**

- [x] TS-1 — Vitest 3 + @vue/test-utils + jsdom
- [x] TS-2 — `useTheme.spec.ts` (21 testes)
- [x] TS-3 — `useTrxToast.spec.ts` (10 testes)
- [x] TS-4 — `useApi.spec.ts` (14 testes)
- [x] TS-5 — `utils/index.spec.ts` (59 testes)
- [x] TS-6 — `TrxCard`, `TrxPageHeader`, `TrxEmptyState`, `TrxStatusBadge`
- [x] TS-7 — `axe-core` para a11y (`components.a11y.spec.ts`)
- [x] TS-8 — CI integrado em `ci.yml`

---

## Epic FV — Formulários com Validação ✓

**Composable `useForm` com Zod + componente `TrxFormField`.**

- [x] FV-1 — `useForm` composable com Zod `safeParseAsync`
- [x] FV-2 — `TrxFormField` com label, erro (role="alert"), hint e estado disabled
- [x] FV-3 — Integração Zod sem vee-validate no runtime
- [x] FV-4 — Estado completo: `values`, `errors`, `isDirty`, `isSubmitting`, `isValid`
- [x] FV-5 — Documentação em `/components/trx-form-field`

---

## Epic NC — Novos Componentes ✓

**7 novos componentes base TRX.**

- [x] NC-1 — `TrxAlert` — alertas inline (info/success/warning/error)
- [x] NC-2 — `TrxUserAvatar` — avatar com iniciais e status online/offline
- [x] NC-3 — `TrxKPICard` — card de métrica com tendência e skeleton
- [x] NC-4 — `TrxSearchBar` — busca global com atalho Cmd+K
- [x] NC-5 — `TrxFilterBar` — chips de filtros ativos com remoção individual
- [x] NC-6 — `TrxDataTableActions` — ações inline/menu para linhas de tabela
- [x] NC-7 — `TrxErrorPage` — páginas de erro 404/403/500/503

---

## Epic VR — Versionamento & Release ✓

**Pipeline completo com commitlint, husky, release-it e GitHub Actions.**

- [x] VR-1 — `CHANGELOG.md` com histórico
- [x] VR-2 — Commitlint + Conventional Commits
- [x] VR-3 — Husky `commit-msg` hook
- [x] VR-4 — release-it com `@release-it/conventional-changelog`
- [x] VR-5 — GitHub Actions `ci.yml` (PR) e `release.yml` (dispatch manual)
- [x] VR-6 — `docs/guide/contributing.md` com política de breaking changes

---

## Epic A11Y — Acessibilidade ✓

**WCAG 2.1 AA nos componentes base.**

- [x] A11Y-1 — Skip-to-content no `TrxAppLayout` (`#trx-main-content`)
- [x] A11Y-2 — `useFocusTrap` — trap de foco para modais/drawers
- [x] A11Y-3 — `useAriaLive` — anúncios via aria-live region
- [x] A11Y-4 — Testes axe-core integrados na suite de testes

---

## Epic TI — Tipografia & Ícones ✓

**Escala tipográfica formal e componente polimórfico.**

- [x] TI-1 — Escala de tipo como tokens (xs → 4xl) no `tokens/index.ts`
- [x] TI-2 — `TrxText` com 13 variantes semânticas (h1-h6, body, caption, label, overline, code)
- [x] TI-3 — Fonte Inter via `@import` no `themes.css` + `font-family` no `:root`

---

## Epic TH — Temas por App ✓

**Customização de marca por aplicação via CSS custom properties.**

- [x] TH-1 — `useAppTheme` — injeta `<style>` com overrides por app
- [x] TH-2 — Suporte a `primaryColor`, `cardRadius`, `customVars`
- [x] TH-3 — `data-trx-app` attribute no `<html>` para identificação
- [x] TH-4 — `resetAppTheme()` para testes e SSR

---

## O que temos hoje

- **21 componentes base TRX** custom (era 14)
- **~110 wrappers PrimeVue** com pass-through e defaults PT-BR
- **1.096+ classes CSS** utilitárias (substitui PrimeFlex)
- **Tema Light** (Verde Palmeiras) + **Dark** (Dracula)
- **10 composables**: useTheme, useAuth, useApi, useTrxToast, useConfirm, useDialog, useForm, useFocusTrap, useAriaLive, useAppTheme
- **Design tokens** TypeScript + CSS via Style Dictionary
- **156 testes** passando (Vitest)
- **Docs VitePress** em `docs/`
