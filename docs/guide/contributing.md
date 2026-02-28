---
layout: default
title: Contribuindo
parent: Guia
nav_order: 5
permalink: /guide/contributing/
---

# Contribuindo com o @trx/ui-common

Este guia cobre as convencoes de contribuicao, politica de versioning e o processo de release.

---

## Convencao de Commits

O projeto usa [Conventional Commits](https://www.conventionalcommits.org/pt-br/) enforçado via `commitlint` + `husky`.

### Formato

```
<tipo>(<escopo opcional>): <descricao em minusculo>

[corpo opcional]

[rodape opcional]
```

### Tipos aceitos

| Tipo | Quando usar | Bump de versao |
|:-----|:------------|:---------------|
| `feat` | Nova funcionalidade | minor (1.1.0) |
| `fix` | Correcao de bug | patch (1.0.1) |
| `feat!` / `fix!` | Breaking change | major (2.0.0) |
| `perf` | Melhoria de performance | patch |
| `refactor` | Refatoracao sem mudanca de comportamento | sem bump |
| `docs` | Documentacao | sem bump |
| `test` | Adicao ou correcao de testes | sem bump |
| `ci` | Configuracao de CI/CD | sem bump |
| `chore` | Tarefas de manutencao | sem bump (oculto no CHANGELOG) |
| `style` | Formatacao, sem mudanca de logica | sem bump (oculto no CHANGELOG) |
| `revert` | Reverter um commit | sem bump |

### Exemplos

```bash
# Nova feature (minor bump)
feat: adiciona componente TrxAlert com variantes

# Bug fix (patch bump)
fix: corrige formatacao de CPF com digitos verificadores iguais

# Breaking change (major bump) — nota o ! ou o rodape BREAKING CHANGE
feat!: altera API do TrxAppLayout — prop sidebar-width renomeada para sidebar-size

# Com escopo
feat(theme): adiciona suporte a tema por aplicacao
fix(useApi): nao limpa token ao receber erro 400

# Sem bump (documentacao, testes, ci)
docs: atualiza guia de instalacao para monorepo
test: adiciona testes de renderizacao do TrxDataTable
ci: adiciona step de cobertura de codigo no workflow
```

---

## Politica de Versioning

O projeto segue [Semantic Versioning 2.0.0](https://semver.org/lang/pt-BR/).

```
MAJOR.MINOR.PATCH

1.2.3
│ │ └── PATCH: correcoes de bug, sem quebra de API
│ └──── MINOR: novas funcionalidades, sem quebra de API
└────── MAJOR: mudancas incompativeis com versoes anteriores
```

### O que constitui um MAJOR (breaking change)?

- Remocao de componente, composable, utilitario ou tipo exportado
- Renomeacao de prop obrigatoria ou evento de componente
- Mudanca no comportamento padrao de um componente (sem flag de opt-in)
- Remocao de alias legacy sem aviso previo (ver politica de deprecation)
- Mudanca em variaveis CSS que afete o layout dos apps consumidores
- Upgrade de peer dependency com breaking changes (ex: PrimeVue 4 → 5)

### O que NAO constitui um breaking change?

- Adicao de nova prop opcional com valor default
- Adicao de novo componente, composable ou utilitario
- Adicao de novo slot opcional
- Adicao de nova variavel CSS
- Mudancas internas de implementacao sem mudanca de API publica

---

## Politica de Deprecation

Para garantir migracao suave entre versoes, seguimos este processo:

### 1. Aviso de deprecation (MINOR)

Marque o item como deprecated no codigo:

```typescript
/**
 * @deprecated desde v1.2.0. Use TrxSelect no lugar.
 * Sera removido na v2.0.0.
 */
export { TrxSelect as TrxDropdown }
```

E no CHANGELOG:

```markdown
### Deprecated
- `TrxDropdown` — use `TrxSelect`. Sera removido na v2.0.0.
```

### 2. Periodo de deprecation

Um item deprecated deve permanecer funcional por **pelo menos 2 versoes minor** antes de ser removido.

Exemplo:
- v1.2.0: `TrxDropdown` marcado como deprecated, `TrxSelect` disponivel
- v1.3.0: aviso de console em desenvolvimento
- v2.0.0: `TrxDropdown` removido

### 3. Remocao (MAJOR)

A remocao deve ser anunciada no CHANGELOG como `BREAKING CHANGE`:

```markdown
### Removed
- **BREAKING:** `TrxDropdown` removido. Use `TrxSelect`.
  Migration: s/TrxDropdown/TrxSelect/g
```

---

## Processo de Release

### Pre-requisitos

```bash
# Working tree limpa
git status  # deve retornar "nothing to commit"

# Branch main atualizada
git checkout main && git pull
```

### Executar o release

```bash
# Patch — bug fixes (1.0.0 → 1.0.1)
npm run release

# Minor — novas features (1.0.0 → 1.1.0)
npm run release:minor

# Major — breaking changes (1.0.0 → 2.0.0)
npm run release:major
```

O `release-it` vai automaticamente:
1. Determinar a proxima versao com base nos commits desde o ultimo release
2. Atualizar `CHANGELOG.md` com as mudancas do periodo
3. Atualizar `version` no `package.json`
4. Criar commit `chore: release vX.X.X`
5. Criar tag Git `vX.X.X`
6. Fazer push da tag para o GitHub
7. Criar GitHub Release com o CHANGELOG da versao

### Apos o release

Avise os apps consumidores para atualizar a dependencia:

```json
{
  "dependencies": {
    "@trx/ui-common": "github:trixsystems/ui#v1.1.0"
  }
}
```

---

## Via GitHub Actions (alternativo)

O workflow `release.yml` permite fazer releases sem acesso local:

1. Acesse **Actions → Release → Run workflow**
2. Escolha o tipo de incremento: `patch`, `minor` ou `major`
3. Clique em **Run workflow**

O workflow executa: typecheck → build → release-it.

---

## Adicionando Componentes

### Componente base TRX (custom)

1. Criar `src/components/TrxNomeComponente.vue`
2. Exportar em `src/components/index.ts`
3. Adicionar testes em `src/__tests__/components/TrxNomeComponente.spec.ts`
4. Rebuild: `npm run build`

### Wrapper PrimeVue

1. Criar `src/components/<categoria>/TrxNomeComponente.vue`
2. Exportar em `src/components/<categoria>/index.ts`
3. Rebuild: `npm run build`

### Convencoes de nomenclatura

- Componentes: `TrxPascalCase.vue`
- Composables: `useCamelCase.ts`
- Utilitarios: funcoes `camelCase`, exportadas em `src/utils/index.ts`
- CSS classes: `trx-kebab-case` (para classes proprias), sem prefixo para classes utilitarias

---

## Testes

```bash
npm test              # Executa todos os testes
npm run test:watch    # Modo watch (desenvolvimento)
npm run test:coverage # Gera relatorio de cobertura HTML
```

### Estrutura de testes

```
src/__tests__/
├── setup.ts                          # Setup global (mocks, reset)
├── composables/
│   ├── useTheme.spec.ts
│   ├── useTrxToast.spec.ts
│   └── useApi.spec.ts
├── utils/
│   └── index.spec.ts
├── components/
│   ├── TrxCard.spec.ts
│   ├── TrxPageHeader.spec.ts
│   ├── TrxEmptyState.spec.ts
│   └── TrxStatusBadge.spec.ts
└── a11y/
    └── components.a11y.spec.ts
```

### Metas de cobertura

| Categoria | Meta |
|:----------|:-----|
| Composables | 70% |
| Utilitarios | 80% |
| Componentes base | 50% |

---

## CI

Todo PR para `main` executa automaticamente:

1. `npm run typecheck` — validacao TypeScript
2. `npm test` — suite de testes
3. `npx vite build` — build de producao

O merge so e permitido com todos os checks passando.
