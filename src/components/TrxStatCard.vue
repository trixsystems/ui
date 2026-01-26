<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  icon?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple'
}>()
</script>

<template>
  <div :class="['trx-stat-card', `color-${color || 'primary'}`]">
    <div class="stat-icon" v-if="icon">
      <i :class="icon"></i>
    </div>
    <div class="stat-content">
      <div class="stat-value">{{ value }}</div>
      <div class="stat-title">{{ title }}</div>
      <div v-if="trend && trendValue" :class="['stat-trend', `trend-${trend}`]">
        <i :class="trend === 'up' ? 'pi pi-arrow-up' : trend === 'down' ? 'pi pi-arrow-down' : 'pi pi-minus'"></i>
        <span>{{ trendValue }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-stat-card {
  background: var(--trx-bg-card, var(--bg-card));
  border: 1px solid var(--trx-border-color, var(--border-color));
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;
}

.trx-stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--trx-shadow-md, var(--shadow-md));
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon i {
  font-size: 1.5rem;
  color: white;
}

.color-primary .stat-icon { background: var(--trx-gradient-primary, var(--gradient-primary)); }
.color-success .stat-icon { background: var(--trx-gradient-success, var(--gradient-success)); }
.color-warning .stat-icon { background: var(--trx-gradient-warning, var(--gradient-warning)); }
.color-danger .stat-icon { background: var(--trx-gradient-danger, var(--gradient-danger)); }
.color-info .stat-icon { background: var(--trx-gradient-info, var(--gradient-info)); }
.color-purple .stat-icon { background: var(--trx-gradient-purple, var(--gradient-purple)); }

.stat-content {
  flex: 1;
  min-width: 0;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--trx-text-primary, var(--text-primary));
  line-height: 1.2;
}

.color-primary .stat-value { color: var(--trx-accent-color, var(--accent-color)); }
.color-success .stat-value { color: var(--trx-success-color, var(--success-color)); }
.color-warning .stat-value { color: var(--trx-warning-color, var(--warning-color)); }
.color-danger .stat-value { color: var(--trx-danger-color, var(--danger-color)); }
.color-info .stat-value { color: var(--trx-info-color, var(--info-color)); }
.color-purple .stat-value { color: var(--trx-purple-color, var(--purple-color)); }

.stat-title {
  font-size: 0.875rem;
  color: var(--trx-text-secondary, var(--text-secondary));
  margin-top: 0.25rem;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  width: fit-content;
}

.trend-up {
  background: var(--trx-success-soft, var(--success-soft));
  color: var(--trx-success-color, var(--success-color));
}

.trend-down {
  background: var(--trx-danger-soft, var(--danger-soft));
  color: var(--trx-danger-color, var(--danger-color));
}

.trend-neutral {
  background: var(--trx-bg-tertiary, var(--bg-tertiary));
  color: var(--trx-text-secondary, var(--text-secondary));
}
</style>
