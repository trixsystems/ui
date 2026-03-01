/**
 * @trx/ui-common — useAppTheme
 *
 * Permite customizar o tema por aplicação sobrescrevendo tokens CSS.
 * Útil para diferenciar visualmente cada app TRX (Call, Switch, Phone, etc.)
 *
 * @example
 * // Em main.ts de cada app:
 * import { useAppTheme } from '@trx/ui-common'
 *
 * useAppTheme({
 *   appName: 'call',
 *   primaryColor: '#0ea5e9',
 *   primaryColorDark: '#38bdf8',
 * })
 */

export interface AppThemeConfig {
  /** Nome do app (ex: 'call', 'switch', 'phone', 'dialer', 'omnichannel') */
  appName: string
  /** Cor de acento principal (light mode) */
  primaryColor?: string
  /** Versão hover da cor principal */
  primaryColorHover?: string
  /** Cor de acento no dark mode */
  primaryColorDark?: string
  /** Glow da cor no dark mode */
  primaryColorGlow?: string
  /** Substitui o --trx-card-radius */
  cardRadius?: string
  /** CSS vars customizadas extras */
  customVars?: Record<string, string>
  /** Seletor CSS alvo (padrão: ':root') */
  selector?: string
}

const appliedAppName = { current: '' }

/**
 * Aplica um tema customizado por aplicação via CSS custom properties.
 * Deve ser chamado uma vez em main.ts antes de montar o app.
 */
export function useAppTheme(config: AppThemeConfig): void {
  const {
    appName,
    primaryColor,
    primaryColorHover,
    primaryColorDark,
    primaryColorGlow,
    cardRadius,
    customVars = {},
    selector = ':root',
  } = config

  // Evita aplicar duas vezes
  if (appliedAppName.current === appName) return
  appliedAppName.current = appName

  const vars: Record<string, string> = {}

  if (primaryColor) {
    vars['--trx-accent-color'] = primaryColor
    vars['--trx-accent-hover'] = primaryColorHover ?? adjustBrightness(primaryColor, -10)
    vars['--trx-primary-soft'] = hexToRgba(primaryColor, 0.15)
  }

  if (primaryColorDark) {
    vars['--trx-accent-color-dark-override'] = primaryColorDark
  }

  if (primaryColorGlow) {
    vars['--trx-accent-glow'] = primaryColorGlow
  }

  if (cardRadius) {
    vars['--trx-card-radius'] = cardRadius
  }

  Object.assign(vars, customVars)

  // Aplica ao seletor alvo
  const cssText = Object.entries(vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n')

  if (!cssText) return

  const styleId = `trx-app-theme-${appName}`

  // Remove tema anterior se existir
  document.getElementById(styleId)?.remove()

  const style = document.createElement('style')
  style.id = styleId
  style.textContent = `${selector} {\n${cssText}\n}`
  document.head.appendChild(style)

  // Adiciona data attribute para identificar o app no DOM
  document.documentElement.setAttribute('data-trx-app', appName)
}

/** Reseta o tema customizado */
export function resetAppTheme(): void {
  const el = document.querySelector(`[id^="trx-app-theme-"]`)
  el?.remove()
  document.documentElement.removeAttribute('data-trx-app')
  appliedAppName.current = ''
}

// --- helpers internos ---

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function adjustBrightness(hex: string, amount: number): string {
  const clean = hex.replace('#', '')
  const clamp = (n: number) => Math.min(255, Math.max(0, n))
  const r = clamp(parseInt(clean.substring(0, 2), 16) + amount)
  const g = clamp(parseInt(clean.substring(2, 4), 16) + amount)
  const b = clamp(parseInt(clean.substring(4, 6), 16) + amount)
  return `#${[r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('')}`
}
