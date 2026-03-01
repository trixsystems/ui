import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '@trx/ui-common',
  description: 'Design System compartilhado para os produtos TRX Systems',
  lang: 'pt-BR',

  base: '/',
  cleanUrls: true,

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
          text: 'Componentes Base TRX',
          items: [
            { text: 'TrxCard', link: '/components/trx-card' },
            { text: 'TrxPageHeader', link: '/components/trx-page-header' },
            { text: 'TrxEmptyState', link: '/components/trx-empty-state' },
            { text: 'TrxAlert', link: '/components/trx-alert' },
            { text: 'TrxStatusBadge', link: '/components/trx-status-badge' },
            { text: 'TrxKPICard', link: '/components/trx-kpi-card' },
            { text: 'TrxUserAvatar', link: '/components/trx-user-avatar' },
            { text: 'TrxSearchBar', link: '/components/trx-search-bar' },
            { text: 'TrxFilterBar', link: '/components/trx-filter-bar' },
            { text: 'TrxDataTableActions', link: '/components/trx-data-table-actions' },
            { text: 'TrxErrorPage', link: '/components/trx-error-page' },
            { text: 'TrxText', link: '/components/trx-text' },
            { text: 'TrxAppLayout', link: '/components/trx-app-layout' },
            { text: 'TrxDataTable', link: '/components/trx-data-table' },
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
