<script setup lang="ts">
import { computed, ref } from 'vue'

export interface TrxCalendarEvent {
  id: string
  title: string
  date: string // YYYY-MM-DD
  color?: string
  allDay?: boolean
  time?: string
}

const props = withDefaults(defineProps<{
  events?: TrxCalendarEvent[]
  modelValue?: string // selected date YYYY-MM-DD
  loading?: boolean
}>(), {
  events: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [date: string]
  eventClick: [event: TrxCalendarEvent]
  dateClick: [date: string]
}>()

const today = new Date()
const viewYear = ref(today.getFullYear())
const viewMonth = ref(today.getMonth()) // 0-based

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

const firstDay = computed(() => new Date(viewYear.value, viewMonth.value, 1).getDay())
const daysInMonth = computed(() => new Date(viewYear.value, viewMonth.value + 1, 0).getDate())

const cells = computed(() => {
  const result: Array<{ day: number | null; dateStr: string }> = []
  for (let i = 0; i < firstDay.value; i++) result.push({ day: null, dateStr: '' })
  for (let d = 1; d <= daysInMonth.value; d++) {
    const mm = String(viewMonth.value + 1).padStart(2, '0')
    const dd = String(d).padStart(2, '0')
    result.push({ day: d, dateStr: `${viewYear.value}-${mm}-${dd}` })
  }
  return result
})

const eventMap = computed(() => {
  const m: Record<string, TrxCalendarEvent[]> = {}
  for (const ev of props.events) {
    if (!m[ev.date]) m[ev.date] = []
    m[ev.date].push(ev)
  }
  return m
})

const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`

function prevMonth() {
  if (viewMonth.value === 0) { viewMonth.value = 11; viewYear.value-- }
  else viewMonth.value--
}
function nextMonth() {
  if (viewMonth.value === 11) { viewMonth.value = 0; viewYear.value++ }
  else viewMonth.value++
}
function selectDate(dateStr: string) {
  emit('update:modelValue', dateStr)
  emit('dateClick', dateStr)
}
</script>

<template>
  <div class="trx-calendar">
    <div class="trx-calendar__header">
      <button class="trx-calendar__nav" @click="prevMonth"><i class="pi pi-chevron-left"></i></button>
      <span class="trx-calendar__month">{{ MONTHS[viewMonth] }} {{ viewYear }}</span>
      <button class="trx-calendar__nav" @click="nextMonth"><i class="pi pi-chevron-right"></i></button>
    </div>
    <div class="trx-calendar__grid">
      <div v-for="wd in WEEKDAYS" :key="wd" class="trx-calendar__weekday">{{ wd }}</div>
      <div
        v-for="(cell, i) in cells"
        :key="i"
        class="trx-calendar__cell"
        :class="{
          'trx-calendar__cell--empty': !cell.day,
          'trx-calendar__cell--today': cell.dateStr === todayStr,
          'trx-calendar__cell--selected': cell.dateStr === modelValue,
        }"
        @click="cell.day && selectDate(cell.dateStr)"
      >
        <span v-if="cell.day" class="trx-calendar__day">{{ cell.day }}</span>
        <div v-if="cell.dateStr && eventMap[cell.dateStr]" class="trx-calendar__events">
          <div
            v-for="ev in eventMap[cell.dateStr].slice(0, 2)"
            :key="ev.id"
            class="trx-calendar__event"
            :style="{ background: ev.color ?? 'var(--trx-accent-color)' }"
            :title="ev.title"
            @click.stop="emit('eventClick', ev)"
          >{{ ev.title }}</div>
          <div v-if="eventMap[cell.dateStr].length > 2" class="trx-calendar__more">
            +{{ eventMap[cell.dateStr].length - 2 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-calendar { background: var(--trx-bg-card); border: 1px solid var(--trx-border-color); border-radius: 12px; overflow: hidden; }
.trx-calendar__header { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-bottom: 1px solid var(--trx-border-color); }
.trx-calendar__nav { background: none; border: 1px solid var(--trx-border-color); border-radius: 6px; padding: 0.3rem 0.5rem; cursor: pointer; color: var(--trx-text-secondary); transition: all 0.15s; }
.trx-calendar__nav:hover { border-color: var(--trx-accent-color); color: var(--trx-accent-color); }
.trx-calendar__month { font-weight: 700; font-size: 0.9rem; color: var(--trx-text-primary); }
.trx-calendar__grid { display: grid; grid-template-columns: repeat(7, 1fr); }
.trx-calendar__weekday { padding: 0.4rem; text-align: center; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--trx-text-secondary); border-bottom: 1px solid var(--trx-border-color); }
.trx-calendar__cell {
  min-height: 72px; padding: 0.3rem; border-right: 1px solid var(--trx-border-color);
  border-bottom: 1px solid var(--trx-border-color); cursor: pointer; transition: background 0.15s;
  vertical-align: top; display: flex; flex-direction: column;
}
.trx-calendar__cell:nth-child(7n) { border-right: none; }
.trx-calendar__cell--empty { cursor: default; background: var(--trx-bg-secondary); }
.trx-calendar__cell:not(.trx-calendar__cell--empty):hover { background: var(--trx-bg-secondary); }
.trx-calendar__cell--today .trx-calendar__day { background: var(--trx-accent-color); color: white; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; }
.trx-calendar__cell--selected { background: color-mix(in srgb, var(--trx-accent-color) 8%, transparent); }
.trx-calendar__day { font-size: 0.8rem; font-weight: 600; color: var(--trx-text-primary); line-height: 1; margin-bottom: 0.2rem; }
.trx-calendar__events { display: flex; flex-direction: column; gap: 1px; }
.trx-calendar__event {
  font-size: 0.65rem; color: white; padding: 1px 4px; border-radius: 3px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;
}
.trx-calendar__more { font-size: 0.65rem; color: var(--trx-text-secondary); }
</style>
