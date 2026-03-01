import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '@trx/ui-common',
  description: 'Design System compartilhado para os produtos TRX Systems',
  lang: 'pt-BR',

  base: '/',
  cleanUrls: true,

  // Exclui arquivos Jekyll legados que não foram migrados para VitePress
  srcExclude: [
    'composables/**',
    'utils/**',
    'theme/**',
    'jira-tasks.md',
    'guide/index.md',
    'components/trx-login-page.md',
    'components/trx-not-found.md',
  ],

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://cdn.jsdelivr.net/npm/primeicons@7/primeicons.css', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '@trx/ui-common',

    nav: [
      { text: 'Guia', link: '/guide/getting-started' },
      { text: 'Componentes', link: '/components/' },
      { text: 'Tokens', link: '/tokens/' },
      { text: 'Roadmap', link: '/roadmap' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: 'https://github.com/trixsystems/ui/blob/main/CHANGELOG.md' },
          { text: 'Releases', link: 'https://github.com/trixsystems/ui/releases' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introdução',
          items: [
            { text: 'Primeiros Passos', link: '/guide/getting-started' },
            { text: 'Configuração do Projeto', link: '/guide/project-setup' },
            { text: 'Migração', link: '/guide/migration' },
            { text: 'Contribuindo', link: '/guide/contributing' },
          ],
        },
      ],

      '/components/': [
        {
          text: 'Layout & Navegação',
          items: [
            { text: 'TrxAppLayout', link: '/components/trx-app-layout' },
            { text: 'TrxPageHeader', link: '/components/trx-page-header' },
            { text: 'TrxBanner', link: '/components/trx-banner' },
          ],
        },
        {
          text: 'Dados & Tabelas',
          items: [
            { text: 'TrxCard', link: '/components/trx-card' },
            { text: 'TrxDataTable', link: '/components/trx-data-table' },
            { text: 'TrxDataTableActions', link: '/components/trx-data-table-actions' },
            { text: 'TrxFilterBar', link: '/components/trx-filter-bar' },
            { text: 'TrxKPICard', link: '/components/trx-kpi-card' },
          ],
        },
        {
          text: 'Feedback & Status',
          items: [
            { text: 'TrxAlert', link: '/components/trx-alert' },
            { text: 'TrxEmptyState', link: '/components/trx-empty-state' },
            { text: 'TrxErrorPage', link: '/components/trx-error-page' },
            { text: 'TrxStatusBadge', link: '/components/trx-status-badge' },
          ],
        },
        {
          text: 'Usuário & Agente',
          items: [
            { text: 'TrxUserAvatar', link: '/components/trx-user-avatar' },
            { text: 'TrxAgentStatus', link: '/components/trx-agent-status' },
          ],
        },
        {
          text: 'Utilitários',
          items: [
            { text: 'TrxText', link: '/components/trx-text' },
            { text: 'TrxSearchBar', link: '/components/trx-search-bar' },
            { text: 'TrxCopyButton', link: '/components/trx-copy-button' },
            { text: 'TrxAudioPlayer', link: '/components/trx-audio-player' },
          ],
        },
        {
          text: 'Formulários',
          items: [
            { text: 'TrxFormField', link: '/components/trx-form-field' },
          ],
        },
      ],

      '/tokens/': [
        {
          text: 'Design Tokens',
          items: [
            { text: 'Visão Geral', link: '/tokens/' },
            { text: 'Cores', link: '/tokens/colors' },
            { text: 'Espaçamento', link: '/tokens/spacing' },
            { text: 'Tipografia', link: '/tokens/typography' },
            { text: 'Sombras & Bordas', link: '/tokens/shadows' },
            { text: 'Animações', link: '/tokens/animation' },
            { text: 'Z-Index', link: '/tokens/zindex' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trixsystems/ui' },
    ],

    footer: {
      message: 'Apache License 2.0',
      copyright: 'Copyright © 2024-2026 TRIX Systems',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/trixsystems/ui/edit/main/docs/:path',
      text: 'Editar esta página',
    },

    lastUpdated: {
      text: 'Atualizado em',
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'dracula',
    },
  },
})
