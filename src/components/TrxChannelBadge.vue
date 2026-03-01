<script setup lang="ts">
export type TrxChannel = 'whatsapp' | 'phone' | 'email' | 'sms' | 'chat' | 'telegram' | 'instagram' | 'messenger'

const channelConfig: Record<TrxChannel, { label: string; icon: string; color: string }> = {
  whatsapp:  { label: 'WhatsApp',  icon: 'pi pi-whatsapp',  color: '#25D366' },
  phone:     { label: 'Telefone',  icon: 'pi pi-phone',     color: 'var(--trx-accent-color)' },
  email:     { label: 'E-mail',    icon: 'pi pi-envelope',  color: '#3b82f6' },
  sms:       { label: 'SMS',       icon: 'pi pi-mobile',    color: '#8b5cf6' },
  chat:      { label: 'Chat',      icon: 'pi pi-comments',  color: '#06b6d4' },
  telegram:  { label: 'Telegram',  icon: 'pi pi-telegram',  color: '#0088CC' },
  instagram: { label: 'Instagram', icon: 'pi pi-instagram', color: '#E1306C' },
  messenger: { label: 'Messenger', icon: 'pi pi-facebook',  color: '#0099FF' },
}

const props = withDefaults(defineProps<{
  channel: TrxChannel
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  iconOnly?: boolean
}>(), {
  size: 'md',
  showLabel: true,
})

const cfg = channelConfig[props.channel] ?? { label: props.channel, icon: 'pi pi-question-circle', color: 'var(--trx-text-secondary)' }
</script>

<template>
  <span
    class="trx-channel-badge"
    :class="`trx-channel-badge--${size}`"
    :style="{ '--ch-color': cfg.color }"
    :title="cfg.label"
  >
    <i :class="cfg.icon"></i>
    <span v-if="!iconOnly && showLabel">{{ cfg.label }}</span>
  </span>
</template>

<style scoped>
.trx-channel-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 20px;
  font-weight: 600;
  background: color-mix(in srgb, var(--ch-color) 12%, transparent);
  color: var(--ch-color);
  border: 1px solid color-mix(in srgb, var(--ch-color) 30%, transparent);
}

.trx-channel-badge--sm { font-size: 0.65rem; padding: 0.1rem 0.4rem; }
.trx-channel-badge--md { font-size: 0.75rem; padding: 0.2rem 0.6rem; }
.trx-channel-badge--lg { font-size: 0.875rem; padding: 0.3rem 0.8rem; }

.trx-channel-badge i { font-size: 1em; }
</style>
