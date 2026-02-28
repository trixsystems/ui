---
layout: default
title: Tarefas Jira
nav_order: 7
permalink: /jira-tasks/
---

# Tarefas Jira — @trx/ui-common Design System

Copie e cole cada bloco no Jira. Formato: Epic > Story > Tasks.
Gerado em: 2026-02-28

---

## EPIC DS — Design Tokens

**Titulo:** [DS] Estruturar Design Tokens formais
**Tipo:** Epic
**Prioridade:** Critica
**Descricao:**
Atualmente os tokens de design existem apenas como CSS variables em `src/styles/themes.css`.
Apps nao conseguem consumir tokens via codigo TypeScript/JavaScript.
O objetivo e estruturar uma hierarquia formal (primitive → semantic → component) e gerar tokens para multiplos formatos usando Style Dictionary.

---

### DS-1 — Definir arquitetura de tokens

**Tipo:** Story
**Epic:** DS
**Prioridade:** Critica
**Estimativa:** 3 pts

**Descricao:**
Definir a hierarquia de tres niveis para os tokens:
- **Primitive:** valores brutos — `color.emerald.500 = #10b981`, `spacing.4 = 1rem`
- **Semantic:** significado — `color.brand.primary = {color.emerald.500}`, `color.text.default`
- **Component:** uso especifico — `button.bg.primary = {color.brand.primary}`

**Criterio de aceite:**
- [ ] Documento de arquitetura criado em `docs/tokens/architecture.md`
- [ ] Todos os tokens atuais do `themes.css` mapeados para a nova hierarquia
- [ ] Aprovado pelo time

---

### DS-2 — Configurar Style Dictionary

**Tipo:** Story
**Epic:** DS
**Prioridade:** Critica
**Estimativa:** 5 pts

**Descricao:**
Instalar e configurar [Style Dictionary](https://amzn.github.io/style-dictionary/) para gerar tokens em multiplos formatos a partir de uma fonte de verdade JSON/YAML.

**Criterio de aceite:**
- [ ] `npm run tokens` gera `dist/tokens/tokens.css`, `dist/tokens/tokens.js`, `dist/tokens/tokens.d.ts`
- [ ] Export: `import { tokens } from '@trx/ui-common/tokens'`
- [ ] tokens.css substitui variaveis hardcoded no `themes.css`
- [ ] CI roda `npm run tokens` no build

---

### DS-3 — Criar tokens de espacamento, breakpoints e z-index

**Tipo:** Story
**Epic:** DS
**Prioridade:** Alta
**Estimativa:** 2 pts

**Descricao:**
Os tokens de espacamento existem implicitamente nas classes utility mas nao como tokens exportaveis.

**Tokens a criar:**
- Escala de espacamento: 0, 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 5rem, 6rem, 8rem
- Breakpoints: sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1536px
- Z-index: dropdown=1000, sticky=1020, fixed=1030, modal=1040, popover=1050, toast=1060

**Criterio de aceite:**
- [ ] Tokens definidos no formato Style Dictionary
- [ ] Exportados via `@trx/ui-common/tokens`
- [ ] Documentados em `docs/tokens/spacing.md`

---

### DS-4 — Criar tokens de animacao

**Tipo:** Story
**Epic:** DS
**Prioridade:** Media
**Estimativa:** 2 pts

**Descricao:**
Padronizar duracoes e easings de transicoes CSS.

**Tokens a criar:**
- Duracoes: fast=100ms, base=200ms, slow=300ms, slower=500ms
- Easings: ease-in, ease-out, ease-in-out, spring
- Reducao de movimento: `prefers-reduced-motion` integrado

**Criterio de aceite:**
- [ ] Tokens de animacao definidos e exportados
- [ ] Classes `.transition-*` refatoradas para usar os tokens

---

### DS-5 — Documentar tokens

**Tipo:** Story
**Epic:** DS
**Prioridade:** Media
**Estimativa:** 3 pts

**Descricao:**
Cada token deve ter: nome, valor (light e dark), uso semantico e exemplo de uso.

**Criterio de aceite:**
- [ ] Pagina de tokens em `/docs/tokens/` com todas as categorias
- [ ] Preview visual de cada cor com hex, valor CSS e uso
- [ ] Tabela de tokens de espacamento com visualizacao em px/rem

---

---

## EPIC PL — Playground & Documentacao Viva

**Titulo:** [PL] Implementar playground interativo e docs com VitePress
**Tipo:** Epic
**Prioridade:** Critica
**Descricao:**
Sem visualizacao interativa, o design system e opaco. Designers e devs nao conseguem explorar componentes sem integrar nos apps. O objetivo e ter um site de documentacao com preview ao vivo.

---

### PL-1 — Migrar docs de Jekyll para VitePress

**Tipo:** Story
**Epic:** PL
**Prioridade:** Critica
**Estimativa:** 5 pts

**Descricao:**
Jekyll e incompativel com o stack Vue/Vite. VitePress e a escolha natural (Vue + Vite, suporta componentes Vue nas paginas).

**Criterio de aceite:**
- [ ] VitePress configurado em `docs/` (ou `packages/docs/`)
- [ ] Todo o conteudo do Jekyll migrado para VitePress
- [ ] `npm run docs:dev` sobe preview em localhost
- [ ] `npm run docs:build` gera site estatico
- [ ] Deploy automatizado no GitHub Pages ou Netlify

---

### PL-2 — Configurar Histoire para stories

**Tipo:** Story
**Epic:** PL
**Prioridade:** Critica
**Estimativa:** 5 pts

**Descricao:**
[Histoire](https://histoire.dev/) e o Storybook para Vue — nativo Vue 3, Vite-first, mais leve.

**Criterio de aceite:**
- [ ] Histoire configurado com tema TRX
- [ ] `npm run story:dev` sobe o playground em localhost
- [ ] Integrado ao VitePress como link externo ou embeddado
- [ ] Configurado para suportar dark mode

---

### PL-3 — Criar stories dos componentes base TRX

**Tipo:** Story
**Epic:** PL
**Prioridade:** Alta
**Estimativa:** 8 pts

**Descricao:**
Stories para os 14 componentes custom TRX com todas as variantes documentadas.

**Componentes:**
- [ ] TrxAppLayout (com menu, sem menu, com footer)
- [ ] TrxPageHeader (com subtitle, com actions, minimo)
- [ ] TrxCard (default, loading, hoverable, com slots)
- [ ] TrxStatCard (positivo, negativo, neutro)
- [ ] TrxDataTable (vazio, loading, paginado, com filtro)
- [ ] TrxStatus (todos os tipos)
- [ ] TrxStatusBadge (todos os tipos)
- [ ] TrxEmptyState (padrao, com icone, com action)
- [ ] TrxLoadingOverlay
- [ ] TrxLoginPage / TrxLoginForm
- [ ] TrxNotFound
- [ ] TrxLogo (variantes)
- [ ] TrxThemeToggle

---

### PL-4 — Criar stories dos componentes enhanced

**Tipo:** Story
**Epic:** PL
**Prioridade:** Media
**Estimativa:** 5 pts

**Descricao:**
Stories para os wrappers PrimeVue com defaults PT-BR demonstrados.

**Componentes prioritarios:**
- [ ] TrxDatePicker (com formato BR, range, inline)
- [ ] TrxInputNumber (moeda, percentual, inteiro)
- [ ] TrxPassword (forca, toggle visibilidade)
- [ ] TrxSelect (simples, com grupos, com filtro)
- [ ] TrxMultiSelect
- [ ] TrxDialog (simples, com footer custom)
- [ ] TrxConfirmDialog
- [ ] TrxToast (todos os tipos)
- [ ] TrxFileUpload

---

### PL-5 — Auto-documentacao de props via JSDoc

**Tipo:** Story
**Epic:** PL
**Prioridade:** Media
**Estimativa:** 3 pts

**Descricao:**
Adicionar JSDoc nas props dos 14 componentes base para que Histoire e VitePress gerem documentacao automatica.

**Criterio de aceite:**
- [ ] Todos os props dos componentes base com `@description`, `@default`, `@example`
- [ ] Histoire exibe tabela de props automaticamente
- [ ] Tipos exportados documentados no VitePress

---

---

## EPIC TS — Testes

**Titulo:** [TS] Implementar suite de testes com Vitest
**Tipo:** Epic
**Prioridade:** Critica
**Descricao:**
Zero cobertura de testes em pacote compartilhado por 5 apps e risco critico. Qualquer refactor pode quebrar silenciosamente.

---

### TS-1 — Configurar Vitest e ambiente de testes

**Tipo:** Story
**Epic:** TS
**Prioridade:** Critica
**Estimativa:** 3 pts

**Descricao:**
Instalar e configurar o ambiente de testes.

**Dependencias:** `vitest`, `@vue/test-utils`, `@vitest/coverage-v8`, `jsdom`, `axe-core`, `vitest-axe`

**Criterio de aceite:**
- [ ] `npm run test` executa todos os testes
- [ ] `npm run test:coverage` gera relatorio de cobertura
- [ ] Configurado para simular DOM com jsdom
- [ ] Integrado ao CI (GitHub Actions)
- [ ] Meta de cobertura: 70% composables, 50% componentes

---

### TS-2 — Testes do composable useTheme

**Tipo:** Story
**Epic:** TS
**Prioridade:** Alta
**Estimativa:** 3 pts

**Criterio de aceite:**
- [ ] toggleTheme alterna entre light e dark
- [ ] setTheme aplica classe `.dark` no document
- [ ] Persiste no localStorage
- [ ] setFontSize aplica classe CSS correta
- [ ] increaseFontSize / decreaseFontSize respeitam os limites (12-20px)

---

### TS-3 — Testes do composable useTrxToast

**Tipo:** Story
**Epic:** TS
**Prioridade:** Alta
**Estimativa:** 2 pts

**Criterio de aceite:**
- [ ] success() chama PrimeVue toast com severity="success"
- [ ] error() chama com severity="error" e life=5000
- [ ] warn() e info() com os valores corretos
- [ ] clear() limpa toasts

---

### TS-4 — Testes dos utilitarios

**Tipo:** Story
**Epic:** TS
**Prioridade:** Alta
**Estimativa:** 5 pts

**Funcoes a testar:**
- [ ] formatDate (varios formatos, datas invalidas)
- [ ] formatCurrency (BRL, valores negativos, zero)
- [ ] formatPhone (8 digitos, 9 digitos, com DDD, sem DDD)
- [ ] formatCPF / formatCNPJ
- [ ] formatDuration (segundos → MM:SS e HH:MM:SS)
- [ ] debounce (atrasa chamada, cancela anterior)
- [ ] truncate (com e sem overflow)
- [ ] uuid (formato UUID v4)
- [ ] isEmpty (null, undefined, string vazia, objeto vazio)

---

### TS-5 — Testes de renderizacao dos componentes base

**Tipo:** Story
**Epic:** TS
**Prioridade:** Media
**Estimativa:** 8 pts

**Componentes prioritarios:**
- [ ] TrxCard (renderiza title, slots, loading state)
- [ ] TrxPageHeader (title, subtitle, slot actions)
- [ ] TrxEmptyState (title, description, icon)
- [ ] TrxStatusBadge (todos os tipos de status)
- [ ] TrxDataTable (empty state, loading state)
- [ ] TrxLoadingOverlay (visivel/invisivel)

---

### TS-6 — Testes de acessibilidade

**Tipo:** Story
**Epic:** TS
**Prioridade:** Media
**Estimativa:** 3 pts

**Criterio de aceite:**
- [ ] vitest-axe configurado
- [ ] Todos os 14 componentes base passam na auditoria axe
- [ ] Nenhuma violacao de nivel critico ou sério

---

---

## EPIC FV — Formularios com Validacao

**Titulo:** [FV] Integrar Vee-Validate + Zod para formularios padronizados
**Tipo:** Epic
**Prioridade:** Alta
**Descricao:**
Atualmente cada app implementa validacao de formularios de forma diferente e inconsistente. O objetivo e um padrao unificado declarativo.

---

### FV-1 — Avaliar e instalar Vee-Validate 4

**Tipo:** Story
**Epic:** FV
**Prioridade:** Alta
**Estimativa:** 2 pts

**Criterio de aceite:**
- [ ] Vee-Validate 4 instalado como peer dependency
- [ ] Zod instalado como peer dependency
- [ ] Nenhum conflito com PrimeVue ou Vue 3.5
- [ ] Decisao documentada (Vee-Validate vs alternativas)

---

### FV-2 — Criar componente TrxFormField

**Tipo:** Story
**Epic:** FV
**Prioridade:** Alta
**Estimativa:** 5 pts

**Descricao:**
Wrapper que adiciona label, mensagem de erro e estados visuais ao redor de qualquer campo.

```vue
<TrxFormField name="email" label="E-mail" :rules="...">
  <TrxInputText v-model="email" />
</TrxFormField>
```

**Criterio de aceite:**
- [ ] Exibe label acima do campo
- [ ] Exibe erro inline abaixo do campo (vermelho)
- [ ] Estados: default, error, valid, disabled
- [ ] Compativel com todos os componentes Trx* de formulario
- [ ] Documentado com story no Histoire

---

### FV-3 — Criar composable useForm

**Tipo:** Story
**Epic:** FV
**Prioridade:** Alta
**Estimativa:** 5 pts

**Descricao:**
Composable que encapsula Vee-Validate com schema Zod.

```typescript
const { form, errors, isValid, handleSubmit } = useForm({
  schema: z.object({ email: z.string().email(), password: z.string().min(8) }),
  initialValues: { email: '', password: '' }
})
```

**Criterio de aceite:**
- [ ] Aceita schema Zod
- [ ] Expoe: values, errors, isValid, isDirty, isSubmitting
- [ ] handleSubmit previne submit com erros
- [ ] Resetable via reset()
- [ ] Testado com Vitest

---

### FV-4 — Documentar padrao de formulario

**Tipo:** Story
**Epic:** FV
**Prioridade:** Media
**Estimativa:** 2 pts

**Criterio de aceite:**
- [ ] Guia completo em `docs/guide/forms.md`
- [ ] Exemplos: login form, CRUD form, multi-step
- [ ] Exemplos de schemas Zod comuns (email, CPF, CNPJ, telefone)

---

---

## EPIC NC — Novos Componentes Base

**Titulo:** [NC] Criar componentes base ausentes
**Tipo:** Epic
**Prioridade:** Alta
**Descricao:**
Padroes de UI repetidos em multiplos apps que nao existem no pacote, causando duplicacao e inconsistencia.

---

### NC-1 — TrxAlert

**Tipo:** Story | **Epic:** NC | **Estimativa:** 3 pts

**Descricao:** Mensagem inline persistente com variantes info, success, warning, error. Diferente de Toast (nao some automaticamente).

```vue
<TrxAlert type="warning" title="Atencao" dismissible>
  Sua sessao expira em 5 minutos.
</TrxAlert>
```

**Criterio de aceite:**
- [ ] 4 variantes: info, success, warning, error
- [ ] Prop `dismissible` para fechar manualmente
- [ ] Slot para icone customizado
- [ ] Dark mode suportado
- [ ] Story no Histoire

---

### NC-2 — TrxUserAvatar

**Tipo:** Story | **Epic:** NC | **Estimativa:** 3 pts

**Descricao:** Avatar de usuario com foto, fallback de iniciais, indicador de status online.

```vue
<TrxUserAvatar name="Joao Silva" src="/foto.jpg" status="online" size="lg" />
```

**Criterio de aceite:**
- [ ] Fallback automatico para iniciais (2 letras) quando sem foto
- [ ] Status: online, offline, away, busy
- [ ] Tamanhos: sm, md, lg, xl
- [ ] Story no Histoire

---

### NC-3 — TrxKPICard

**Tipo:** Story | **Epic:** NC | **Estimativa:** 3 pts

**Descricao:** Card de metrica com valor principal, label, icone e indicador de variacao/trend.

```vue
<TrxKPICard title="Chamadas hoje" :value="1234" trend="+12%" trend-type="up" icon="pi pi-phone" />
```

**Criterio de aceite:**
- [ ] Trend positivo (verde, seta cima) e negativo (vermelho, seta baixo)
- [ ] Slot para conteudo customizado abaixo do valor
- [ ] Loading skeleton
- [ ] Story no Histoire

---

### NC-4 — TrxSearchBar

**Tipo:** Story | **Epic:** NC | **Estimativa:** 5 pts

**Descricao:** Busca global com atalho de teclado (Cmd+K / Ctrl+K) que abre um modal de busca.

**Criterio de aceite:**
- [ ] Atalho Cmd+K abre modal de busca
- [ ] Input com debounce de 300ms
- [ ] Slot para resultados customizados
- [ ] Fechar com Escape
- [ ] Integrado ao TrxAppLayout (opcional)
- [ ] Story no Histoire

---

### NC-5 — TrxFilterBar

**Tipo:** Story | **Epic:** NC | **Estimativa:** 5 pts

**Descricao:** Barra de filtros reutilizavel para listagens com chips de filtros ativos.

**Criterio de aceite:**
- [ ] Slots para filtros customizados (selects, inputs, date range)
- [ ] Chips exibindo filtros ativos com botao de remover
- [ ] Botao "Limpar filtros" quando ha filtros ativos
- [ ] Emite evento com estado atual dos filtros
- [ ] Story no Histoire

---

### NC-6 — TrxDataTableActions

**Tipo:** Story | **Epic:** NC | **Estimativa:** 3 pts

**Descricao:** Coluna de acoes padronizada para tabelas com menu dropdown.

```vue
<TrxDataTableActions :actions="[{label:'Editar', icon:'pi pi-pencil', action: edit}, ...]" :row="rowData" />
```

**Criterio de aceite:**
- [ ] Suporta lista de acoes com icone, label e handler
- [ ] Suporte a acoes condicionais (visible/disabled por row)
- [ ] Variante: botoes inline (para poucos itens) ou menu (para muitos)
- [ ] Story no Histoire

---

### NC-7 — TrxErrorPage

**Tipo:** Story | **Epic:** NC | **Estimativa:** 2 pts

**Descricao:** Paginas de erro genericas para erros nao previstos.

**Criterio de aceite:**
- [ ] Tipos: 500 (erro interno), 403 (sem permissao), 503 (manutencao)
- [ ] Slot para mensagem customizada
- [ ] Botao de "Voltar" e "Tentar novamente"
- [ ] Consistente com TrxNotFound (404 ja existe)

---

---

## EPIC VR — Versionamento & Release

**Titulo:** [VR] Implementar semver, CHANGELOG e pipeline de release
**Tipo:** Epic
**Prioridade:** Alta
**Descricao:**
Versao travada em 1.0.0 desde o lancamento. Apps nao sabem o que mudou entre versoes.

---

### VR-1 — Criar CHANGELOG.md

**Tipo:** Story | **Epic:** VR | **Estimativa:** 2 pts

**Criterio de aceite:**
- [ ] CHANGELOG.md criado com historico desde o commit inicial
- [ ] Formato: [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
- [ ] Secoes: Added, Changed, Deprecated, Removed, Fixed, Security

---

### VR-2 — Configurar Conventional Commits

**Tipo:** Story | **Epic:** VR | **Estimativa:** 2 pts

**Dependencias:** `@commitlint/cli`, `@commitlint/config-conventional`, `husky`

**Criterio de aceite:**
- [ ] commitlint valida mensagens de commit no pre-commit
- [ ] Tipos aceitos: feat, fix, docs, style, refactor, test, chore, perf, ci
- [ ] Documentado no CLAUDE.md e README

---

### VR-3 — Configurar release automatizado

**Tipo:** Story | **Epic:** VR | **Estimativa:** 5 pts

**Descricao:** Usar `release-it` ou `semantic-release` para automatizar versionamento e CHANGELOG.

**Criterio de aceite:**
- [ ] `npm run release` calcula versao automaticamente por tipo de commit
- [ ] Atualiza CHANGELOG.md
- [ ] Cria tag Git
- [ ] (Opcional) Publica no GitHub Packages

---

### VR-4 — GitHub Actions CI/CD

**Tipo:** Story | **Epic:** VR | **Estimativa:** 3 pts

**Criterio de aceite:**
- [ ] Workflow `ci.yml`: roda `typecheck` + `build` + `test` em todo PR
- [ ] Workflow `release.yml`: executa release ao fazer merge na main
- [ ] Badge de status no README

---

---

## EPIC A11Y — Acessibilidade

**Titulo:** [A11Y] Implementar conformidade WCAG 2.1 AA
**Tipo:** Epic
**Prioridade:** Media

---

### A11Y-1 — Auditoria inicial dos componentes base

**Tipo:** Story | **Epic:** A11Y | **Estimativa:** 3 pts

**Criterio de aceite:**
- [ ] axe-core rodado em todos os 14 componentes
- [ ] Lista de violacoes documentada
- [ ] Priorizacao de correcoes

---

### A11Y-2 — Skip-to-content no TrxAppLayout

**Tipo:** Story | **Epic:** A11Y | **Estimativa:** 1 pt

**Criterio de aceite:**
- [ ] Link "Pular para o conteudo" como primeiro elemento focavel
- [ ] Visivel apenas no foco do teclado

---

### A11Y-3 — Composable useFocusTrap

**Tipo:** Story | **Epic:** A11Y | **Estimativa:** 3 pts

**Criterio de aceite:**
- [ ] Prende foco dentro de um elemento (modal, drawer)
- [ ] Libera ao desmontar
- [ ] Usado internamente pelo TrxDialog

---

### A11Y-4 — Verificar contraste de cores

**Tipo:** Story | **Epic:** A11Y | **Estimativa:** 2 pts

**Criterio de aceite:**
- [ ] Todas as combinacoes texto/fundo passam em WCAG AA (4.5:1 normal, 3:1 grande)
- [ ] Light theme verificado
- [ ] Dark theme verificado
- [ ] Correcoes aplicadas onde necessario

---

---

## Resumo de Estimativas

| Epic | Stories | Total (pts) | Prioridade |
|:-----|:--------|:------------|:-----------|
| DS — Design Tokens | 5 | 15 pts | CRITICA |
| PL — Playground | 5 | 26 pts | CRITICA |
| TS — Testes | 6 | 24 pts | CRITICA |
| FV — Form Validation | 4 | 14 pts | ALTA |
| NC — Novos Componentes | 7 | 24 pts | ALTA |
| VR — Versionamento | 4 | 12 pts | ALTA |
| A11Y — Acessibilidade | 4 | 9 pts | MEDIA |
| **Total** | **35** | **~124 pts** | |

---

## Sugestao de Sprint Inicial (2 semanas)

Foco em desbloqueadores criticos:

| Task | Estimativa |
|:-----|:-----------|
| TS-1 — Configurar Vitest | 3 pts |
| TS-4 — Testes dos utilitarios | 5 pts |
| VR-1 — Criar CHANGELOG.md | 2 pts |
| VR-2 — Conventional Commits | 2 pts |
| PL-1 — Migrar docs para VitePress | 5 pts |
| DS-1 — Definir arquitetura de tokens | 3 pts |
| **Total Sprint** | **20 pts** |
