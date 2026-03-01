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
        {
          text: 'Telecom',
          collapsed: true,
          items: [
            { text: 'TrxCallCard', link: '/components/trx-call-card' },
            { text: 'TrxCallTimer', link: '/components/trx-call-timer' },
            { text: 'TrxCallQueue', link: '/components/trx-call-queue' },
            { text: 'TrxPhoneDialer', link: '/components/trx-phone-dialer' },
            { text: 'TrxSoftphone', link: '/components/trx-softphone' },
            { text: 'TrxPhoneInput', link: '/components/trx-phone-input' },
            { text: 'TrxWaveform', link: '/components/trx-waveform' },
            { text: 'TrxTranscription', link: '/components/trx-transcription' },
          ],
        },
        {
          text: 'Telecom Avançado',
          collapsed: true,
          items: [
            { text: 'TrxCallHistory', link: '/components/trx-call-history' },
            { text: 'TrxCallScript', link: '/components/trx-call-script' },
            { text: 'TrxDispositionPicker', link: '/components/trx-disposition-picker' },
            { text: 'TrxDialerList', link: '/components/trx-dialer-list' },
            { text: 'TrxIVRBuilder', link: '/components/trx-ivr-builder' },
          ],
        },
        {
          text: 'Telecom Pro',
          collapsed: true,
          items: [
            { text: 'TrxDTMFPad', link: '/components/trx-dtmf-pad' },
            { text: 'TrxTransferDialog', link: '/components/trx-transfer-dialog' },
            { text: 'TrxCallMonitor', link: '/components/trx-call-monitor' },
            { text: 'TrxBreakSelector', link: '/components/trx-break-selector' },
            { text: 'TrxQueueMetrics', link: '/components/trx-queue-metrics' },
            { text: 'TrxAgentRanking', link: '/components/trx-agent-ranking' },
            { text: 'TrxCallRecorder', link: '/components/trx-call-recorder' },
            { text: 'TrxExtensionPicker', link: '/components/trx-extension-picker' },
            { text: 'TrxAHTIndicator', link: '/components/trx-aht-indicator' },
            { text: 'TrxConferencePanel', link: '/components/trx-conference-panel' },
          ],
        },
        {
          text: 'Dashboard',
          collapsed: true,
          items: [
            { text: 'TrxDashboardGrid', link: '/components/trx-dashboard-grid' },
            { text: 'TrxMetricCard', link: '/components/trx-metric-card' },
            { text: 'TrxSparkline', link: '/components/trx-sparkline' },
            { text: 'TrxGaugeChart', link: '/components/trx-gauge-chart' },
            { text: 'TrxHeatmap', link: '/components/trx-heatmap' },
          ],
        },
        {
          text: 'Gráficos',
          collapsed: true,
          items: [
            { text: 'TrxProgressRing', link: '/components/trx-progress-ring' },
            { text: 'TrxRealTimeTicker', link: '/components/trx-real-time-ticker' },
            { text: 'TrxFunnelChart', link: '/components/trx-funnel-chart' },
            { text: 'TrxLineChart', link: '/components/trx-line-chart' },
            { text: 'TrxBarChart', link: '/components/trx-bar-chart' },
            { text: 'TrxDonutChart', link: '/components/trx-donut-chart' },
            { text: 'TrxRadarChart', link: '/components/trx-radar-chart' },
            { text: 'TrxBulletChart', link: '/components/trx-bullet-chart' },
            { text: 'TrxWaterfallChart', link: '/components/trx-waterfall-chart' },
            { text: 'TrxHorizontalBar', link: '/components/trx-horizontal-bar' },
            { text: 'TrxScatterChart', link: '/components/trx-scatter-chart' },
            { text: 'TrxPieChart', link: '/components/trx-pie-chart' },
          ],
        },
        {
          text: 'Tabelas Avançadas',
          collapsed: true,
          items: [
            { text: 'TrxTableToolbar', link: '/components/trx-table-toolbar' },
            { text: 'TrxBulkActions', link: '/components/trx-bulk-actions' },
            { text: 'TrxExportButton', link: '/components/trx-export-button' },
            { text: 'TrxColumnConfig', link: '/components/trx-column-config' },
          ],
        },
        {
          text: 'Formulários Avançados',
          collapsed: true,
          items: [
            { text: 'TrxDateRangePicker', link: '/components/trx-date-range-picker' },
            { text: 'TrxDurationInput', link: '/components/trx-duration-input' },
            { text: 'TrxTimePicker', link: '/components/trx-time-picker' },
            { text: 'TrxFileDropzone', link: '/components/trx-file-dropzone' },
            { text: 'TrxAddressForm', link: '/components/trx-address-form' },
            { text: 'TrxCurrencyInput', link: '/components/trx-currency-input' },
            { text: 'TrxColorPicker', link: '/components/trx-color-picker' },
            { text: 'TrxTagInput', link: '/components/trx-tag-input' },
            { text: 'TrxOTPInput', link: '/components/trx-otp-input' },
            { text: 'TrxSignaturePad', link: '/components/trx-signature-pad' },
            { text: 'TrxMarkdownEditor', link: '/components/trx-markdown-editor' },
            { text: 'TrxJsonEditor', link: '/components/trx-json-editor' },
          ],
        },
        {
          text: 'Navegação Avançada',
          collapsed: true,
          items: [
            { text: 'TrxPageLayout', link: '/components/trx-page-layout' },
            { text: 'TrxTabsRouter', link: '/components/trx-tabs-router' },
            { text: 'TrxMobileNav', link: '/components/trx-mobile-nav' },
            { text: 'TrxSidebarNav', link: '/components/trx-sidebar-nav' },
            { text: 'TrxCommandPalette', link: '/components/trx-command-palette' },
            { text: 'TrxWizard', link: '/components/trx-wizard' },
            { text: 'TrxOnboarding', link: '/components/trx-onboarding' },
          ],
        },
        {
          text: 'Usuário & Permissões',
          collapsed: true,
          items: [
            { text: 'TrxUserMenu', link: '/components/trx-user-menu' },
            { text: 'TrxProfileCard', link: '/components/trx-profile-card' },
            { text: 'TrxRoleBadge', link: '/components/trx-role-badge' },
            { text: 'TrxPermissionGate', link: '/components/trx-permission-gate' },
          ],
        },
        {
          text: 'Feedback Avançado',
          collapsed: true,
          items: [
            { text: 'TrxNotificationBell', link: '/components/trx-notification-bell' },
            { text: 'TrxConnectionStatus', link: '/components/trx-connection-status' },
            { text: 'TrxConfirmButton', link: '/components/trx-confirm-button' },
            { text: 'TrxSaveIndicator', link: '/components/trx-save-indicator' },
          ],
        },
        {
          text: 'Dados & Exibição',
          collapsed: true,
          items: [
            { text: 'TrxKanbanBoard', link: '/components/trx-kanban-board' },
            { text: 'TrxCalendarView', link: '/components/trx-calendar-view' },
            { text: 'TrxVirtualList', link: '/components/trx-virtual-list' },
            { text: 'TrxCodeBlock', link: '/components/trx-code-block' },
            { text: 'TrxMarkdownRenderer', link: '/components/trx-markdown-renderer' },
            { text: 'TrxTruncateText', link: '/components/trx-truncate-text' },
            { text: 'TrxJsonViewer', link: '/components/trx-json-viewer' },
            { text: 'TrxDiffViewer', link: '/components/trx-diff-viewer' },
            { text: 'TrxInfiniteScroll', link: '/components/trx-infinite-scroll' },
            { text: 'TrxPivotTable', link: '/components/trx-pivot-table' },
          ],
        },
        {
          text: 'Omnichannel',
          collapsed: true,
          items: [
            { text: 'TrxChatBubble', link: '/components/trx-chat-bubble' },
            { text: 'TrxChatWindow', link: '/components/trx-chat-window' },
            { text: 'TrxChannelBadge', link: '/components/trx-channel-badge' },
            { text: 'TrxContactCard', link: '/components/trx-contact-card' },
            { text: 'TrxTicketCard', link: '/components/trx-ticket-card' },
            { text: 'TrxConversationList', link: '/components/trx-conversation-list' },
            { text: 'TrxTypingIndicator', link: '/components/trx-typing-indicator' },
            { text: 'TrxQuickReplies', link: '/components/trx-quick-replies' },
            { text: 'TrxCannedResponses', link: '/components/trx-canned-responses' },
            { text: 'TrxEmailComposer', link: '/components/trx-email-composer' },
            { text: 'TrxTemplateSelector', link: '/components/trx-template-selector' },
            { text: 'TrxSentimentIndicator', link: '/components/trx-sentiment-indicator' },
            { text: 'TrxBotBubble', link: '/components/trx-bot-bubble' },
            { text: 'TrxContactTimezone', link: '/components/trx-contact-timezone' },
          ],
        },
        {
          text: 'CRM',
          collapsed: true,
          items: [
            { text: 'TrxLeadCard', link: '/components/trx-lead-card' },
            { text: 'TrxSLAIndicator', link: '/components/trx-sla-indicator' },
            { text: 'TrxCRMTimeline', link: '/components/trx-crm-timeline' },
          ],
        },
        {
          text: 'Layout & UX',
          collapsed: true,
          items: [
            { text: 'TrxSplitPane', link: '/components/trx-split-pane' },
            { text: 'TrxFloatingActionButton', link: '/components/trx-floating-action-button' },
            { text: 'TrxContextMenu', link: '/components/trx-context-menu' },
            { text: 'TrxDraggableList', link: '/components/trx-draggable-list' },
            { text: 'TrxBackToTop', link: '/components/trx-back-to-top' },
            { text: 'TrxResizableSidebar', link: '/components/trx-resizable-sidebar' },
          ],
        },
        {
          text: 'Sistema & UX',
          collapsed: true,
          items: [
            { text: 'TrxMaintenancePage', link: '/components/trx-maintenance-page' },
            { text: 'TrxSessionTimeout', link: '/components/trx-session-timeout' },
            { text: 'TrxShortcutHelper', link: '/components/trx-shortcut-helper' },
            { text: 'TrxFeatureFlag', link: '/components/trx-feature-flag' },
            { text: 'TrxEnvironmentBanner', link: '/components/trx-environment-banner' },
            { text: 'TrxLogViewer', link: '/components/trx-log-viewer' },
            { text: 'TrxOfflineIndicator', link: '/components/trx-offline-indicator' },
            { text: 'TrxUpdatePrompt', link: '/components/trx-update-prompt' },
            { text: 'TrxFilePreview', link: '/components/trx-file-preview' },
            { text: 'TrxAnnouncementBar', link: '/components/trx-announcement-bar' },
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
