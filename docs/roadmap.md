---
layout: default
title: Roadmap
nav_order: 6
permalink: /roadmap/
---

# Roadmap do Design System
{: .no_toc }

Gaps identificados e plano de evolucao do `@trx/ui-common` como design system maduro.
{: .fs-6 .fw-300 }

Analise realizada em **fevereiro de 2026**.
{: .text-grey-dk-000 }

---

## Indice
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Por que um design system precisa de mais?

O `@trx/ui-common` ja entrega componentes, wrappers e utilitarios. Mas um design system maduro tambem precisa de:

- **Tokens** — a fonte de verdade de todas as decisoes visuais
- **Playground** — visualizacao e teste isolado de componentes
- **Testes** — confianca em refactors e evolucao
- **Validacao de formularios** — padrao consistente entre todos os apps
- **Documentacao viva** — exemplos interativos, nao apenas texto

---

## Epics

### Epic DS — Design Tokens
{: .text-purple-300 }

**Prioridade: CRITICA**

Atualmente os tokens existem apenas como CSS variables em `themes.css`. Apps nao conseguem consumir tokens via codigo TypeScript.

**Objetivo:** Estruturar tokens com hierarquia formal e exportar para JS/TS.

| Task | Descricao |
|:-----|:----------|
| DS-1 | Definir hierarquia primitive → semantic → component |
| DS-2 | Configurar Style Dictionary para gerar CSS + JS/TS |
| DS-3 | Criar tokens de espacamento, breakpoints, z-index, animacoes |
| DS-4 | Exportar tokens tipados: `import { tokens } from '@trx/ui-common/tokens'` |
| DS-5 | Documentar cada token com valor, uso e exemplo |

---

### Epic PL — Playground & Docs
{: .text-blue-300 }

**Prioridade: CRITICA**

Sem visualizacao interativa, o design system e opaco para devs e designers.

**Objetivo:** Site de documentacao com preview ao vivo de todos os componentes.

| Task | Descricao |
|:-----|:----------|
| PL-1 | Configurar VitePress (substitui Jekyll, alinhado com o stack Vue/Vite) |
| PL-2 | Configurar Histoire para stories de componentes |
| PL-3 | Criar stories dos 14 componentes base TRX |
| PL-4 | Criar stories dos componentes enhanced (DatePicker, Select, Dialog...) |
| PL-5 | Adicionar documentacao automatica de props via JSDoc |
| PL-6 | Publicar docs em GitHub Pages ou Netlify |

---

### Epic TS — Testes
{: .text-red-300 }

**Prioridade: CRITICA**

Zero cobertura de testes. Qualquer refactor pode quebrar silenciosamente em pacote compartilhado por 5 apps.

**Objetivo:** Cobertura minima de 70% nos composables e 50% nos componentes.

| Task | Descricao |
|:-----|:----------|
| TS-1 | Configurar Vitest + @vue/test-utils |
| TS-2 | Testes unitarios: useTheme (toggle, persist, fontSize) |
| TS-3 | Testes unitarios: useTrxToast (success, error, warn, info) |
| TS-4 | Testes unitarios: useApi (get, post, interceptors) |
| TS-5 | Testes unitarios: utils (formatDate, formatCurrency, formatPhone...) |
| TS-6 | Testes de renderizacao: TrxCard, TrxPageHeader, TrxEmptyState |
| TS-7 | Configurar axe-core para testes de acessibilidade |
| TS-8 | Integrar testes no pipeline CI |

---

### Epic FV — Formularios com Validacao
{: .text-green-300 }

**Prioridade: ALTA**

Cada app implementa validacao do zero de forma inconsistente.

**Objetivo:** Padrao unificado de formularios com validacao declarativa.

| Task | Descricao |
|:-----|:----------|
| FV-1 | Avaliar e integrar Vee-Validate 4 |
| FV-2 | Criar `TrxFormField` com slot de erro inline e estado de validacao |
| FV-3 | Integrar Zod como parser de schema |
| FV-4 | Criar `TrxForm` com estado global (dirty, valid, submitting) |
| FV-5 | Documentar padrao de formulario com exemplos |
| FV-6 | Criar composable `useForm` wrapper sobre Vee-Validate |

---

### Epic NC — Novos Componentes
{: .text-yellow-300 }

**Prioridade: ALTA**

Padroes comuns nos apps que nao existem no pacote, causando duplicacao.

**Objetivo:** Centralizar componentes reutilizados em multiplos apps.

| Task | Descricao | Apps que precisam |
|:-----|:----------|:-----------------|
| NC-1 | `TrxAlert` — mensagens inline persistentes (info, warning, error, success) | Todos |
| NC-2 | `TrxBanner` — banner de aviso no topo da pagina | Call, Switch |
| NC-3 | `TrxUserAvatar` — avatar com iniciais, foto e status online | Todos |
| NC-4 | `TrxKPICard` — card de metrica com valor, trend e variacao | Call, Dialer, Switch |
| NC-5 | `TrxSearchBar` — busca global com atalho Cmd+K | Switch, Omnichannel |
| NC-6 | `TrxFilterBar` — barra de filtros reutilizavel para listagens | Todos |
| NC-7 | `TrxCopyButton` — copiar texto com feedback visual | Phone, Call |
| NC-8 | `TrxConfirmButton` — botao com confirmacao inline sem dialog | Todos |
| NC-9 | `TrxErrorPage` — paginas de erro genericas (500, 403, 503) | Todos |
| NC-10 | `TrxDataTableActions` — coluna de acoes padronizada para tabelas | Todos |

---

### Epic VR — Versionamento & Release
{: .text-orange-300 }

**Prioridade: ALTA**

Versao travada em 1.0.0 sem processo de release. Apps nao sabem o que mudou.

**Objetivo:** Pipeline de release automatizado com changelog e semver.

| Task | Descricao |
|:-----|:----------|
| VR-1 | Criar `CHANGELOG.md` com historico desde o inicio |
| VR-2 | Configurar commitlint + Conventional Commits |
| VR-3 | Configurar husky para validar commits |
| VR-4 | Configurar release-it ou semantic-release |
| VR-5 | CI/CD: GitHub Actions para build + publish |
| VR-6 | Documentar politica de breaking changes e deprecation |

---

### Epic A11Y — Acessibilidade
{: .text-grey-dk-000 }

**Prioridade: MEDIA**

**Objetivo:** Conformidade minima WCAG 2.1 AA nos componentes base.

| Task | Descricao |
|:-----|:----------|
| A11Y-1 | Auditoria de acessibilidade nos 14 componentes base |
| A11Y-2 | Adicionar skip-to-content no `TrxAppLayout` |
| A11Y-3 | Criar composable `useFocusTrap` |
| A11Y-4 | Criar composable `useAriaLive` para anuncios dinamicos |
| A11Y-5 | Documentar padroes ARIA para componentes complexos |
| A11Y-6 | Verificar contraste de cores Light e Dark theme |

---

### Epic TI — Tipografia & Icones
{: .text-grey-dk-000 }

**Prioridade: MEDIA / BAIXA**

**Objetivo:** Vocabulario visual completo independente de bibliotecas externas.

| Task | Descricao | Prioridade |
|:-----|:----------|:-----------|
| TI-1 | Definir type scale como tokens (xs, sm, base, lg, xl, 2xl, 3xl) | Media |
| TI-2 | Criar `TrxText` com variantes semanticas (heading, body, caption, label) | Media |
| TI-3 | Garantir carregamento da font Inter via `@font-face` no pacote | Media |
| TI-4 | Avaliar icones SVG customizados para dominio de telefonia | Baixa |
| TI-5 | Criar `TrxIcon` com padronizacao de tamanhos | Baixa |
| TI-6 | Criar icon registry para icones TRX | Baixa |

---

### Epic TH — Temas por App
{: .text-grey-dk-000 }

**Prioridade: BAIXA**

**Objetivo:** Permitir customizacao de marca por app sem duplicar o tema base.

| Task | Descricao |
|:-----|:----------|
| TH-1 | Refatorar temas para usar CSS `@layer` |
| TH-2 | Criar sistema de override de tokens por app |
| TH-3 | Criar tema "TRX Stack" diferenciado de "TRX Call" |
| TH-4 | Documentar guia de customizacao de tema |

---

## Status Atual

| Epic | Status | Progresso |
|:-----|:-------|:----------|
| DS — Design Tokens | Nao iniciado | 0% |
| PL — Playground | Nao iniciado | 0% |
| TS — Testes | Nao iniciado | 0% |
| FV — Form Validation | Nao iniciado | 0% |
| NC — Novos Componentes | Nao iniciado | 0% |
| VR — Versionamento | Nao iniciado | 0% |
| A11Y — Acessibilidade | Nao iniciado | 0% |
| TI — Tipografia & Icones | Nao iniciado | 0% |
| TH — Temas por App | Nao iniciado | 0% |

---

## O que ja temos (baseline)

- 14 componentes base TRX custom
- ~110 wrappers PrimeVue com pass-through e defaults PT-BR
- 1.096+ classes CSS utilitarias (substitui PrimeFlex)
- Tema Light (Verde Palmeiras) + Dark (Dracula)
- 6 composables: useTheme, useAuth, useApi, useTrxToast, useConfirm, useDialog
- 20+ utilitarios: formatDate, formatCurrency, formatPhone, debounce, uuid...
- Docs Jekyll/Markdown
- TypeScript strict mode
