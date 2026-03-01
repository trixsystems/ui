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
            { text: 'TrxLogo', link: '/components/trx-logo' },
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
            { text: 'TrxStatCard', link: '/components/trx-stat-card' },
          ],
        },
        {
          text: 'Feedback & Status',
          items: [
            { text: 'TrxAlert', link: '/components/trx-alert' },
            { text: 'TrxEmptyState', link: '/components/trx-empty-state' },
            { text: 'TrxErrorPage', link: '/components/trx-error-page' },
            { text: 'TrxStatus', link: '/components/trx-status' },
            { text: 'TrxStatusBadge', link: '/components/trx-status-badge' },
            { text: 'TrxLoadingOverlay', link: '/components/trx-loading-overlay' },
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
          text: 'Autenticação',
          items: [
            { text: 'TrxLoginPage', link: '/components/trx-login-page' },
            { text: 'TrxLoginForm', link: '/components/trx-login-form' },
            { text: 'TrxNotFound', link: '/components/trx-not-found' },
          ],
        },
        {
          text: 'Botões',
          items: [
            { text: 'TrxButton / TrxSplitButton / TrxSpeedDial', link: '/components/trx-button' },
          ],
        },
        {
          text: 'Formulários',
          collapsed: false,
          items: [
            { text: 'TrxFormField', link: '/components/trx-form-field' },
            { text: 'TrxInputText / TrxTextarea / TrxInputMask / TrxInputOtp', link: '/components/trx-input-text' },
            { text: 'TrxInputNumber', link: '/components/trx-input-number' },
            { text: 'TrxPassword', link: '/components/trx-password' },
            { text: 'TrxSelect / TrxMultiSelect / TrxListbox', link: '/components/trx-select' },
            { text: 'TrxDatePicker', link: '/components/trx-date-picker' },
            { text: 'TrxAutoComplete', link: '/components/trx-auto-complete' },
            { text: 'TrxCheckbox / TrxRadioButton / TrxToggleSwitch', link: '/components/trx-checkbox' },
            { text: 'TrxInputChips / TrxSlider / TrxRating / TrxKnob...', link: '/components/trx-input-extras' },
            { text: 'TrxFileUpload', link: '/components/trx-file-upload' },
          ],
        },
        {
          text: 'Painéis',
          items: [
            { text: 'TrxPanel / TrxFieldset / TrxDivider / TrxSplitter', link: '/components/trx-panel' },
            { text: 'TrxAccordion', link: '/components/trx-accordion' },
            { text: 'TrxTabs', link: '/components/trx-tabs' },
            { text: 'TrxStepper', link: '/components/trx-stepper' },
          ],
        },
        {
          text: 'Overlays',
          items: [
            { text: 'TrxDialog / TrxConfirmDialog', link: '/components/trx-dialog' },
            { text: 'TrxDrawer / TrxPopover', link: '/components/trx-drawer' },
          ],
        },
        {
          text: 'Navegação',
          items: [
            { text: 'TrxMenu / TrxMenubar / TrxBreadcrumb...', link: '/components/trx-menu' },
          ],
        },
        {
          text: 'Mensagens',
          items: [
            { text: 'TrxToast / TrxMessage / TrxInlineMessage', link: '/components/trx-toast' },
          ],
        },
        {
          text: 'Dados & Listas',
          items: [
            { text: 'TrxPaginator', link: '/components/trx-paginator' },
            { text: 'TrxDataView / TrxTimeline / TrxTree...', link: '/components/trx-data-view' },
          ],
        },
        {
          text: 'Mídia',
          items: [
            { text: 'TrxImage / TrxCarousel / TrxGalleria / TrxImageCompare', link: '/components/trx-media' },
            { text: 'TrxChart', link: '/components/trx-chart' },
          ],
        },
        {
          text: 'Utilitários',
          items: [
            { text: 'TrxText', link: '/components/trx-text' },
            { text: 'TrxSearchBar', link: '/components/trx-search-bar' },
            { text: 'TrxCopyButton', link: '/components/trx-copy-button' },
            { text: 'TrxAudioPlayer', link: '/components/trx-audio-player' },
            { text: 'TrxThemeToggle', link: '/components/trx-theme-toggle' },
            { text: 'TrxAvatar / TrxBadge / TrxTag / TrxChip / TrxSkeleton...', link: '/components/trx-misc' },
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
