<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  items?: unknown[]
  itemHeight?: number
  height?: number
  overscan?: number
}>(), {
  items: () => [],
  itemHeight: 48,
  height: 400,
  overscan: 5,
})

const container = ref<HTMLDivElement>()
const scrollTop = ref(0)

const visibleCount = computed(() => Math.ceil(props.height / props.itemHeight) + props.overscan * 2)
const startIdx    = computed(() => Math.max(0, Math.floor(scrollTop.value / props.itemHeight) - props.overscan))
const endIdx      = computed(() => Math.min(props.items.length, startIdx.value + visibleCount.value))
const visibleItems = computed(() => props.items.slice(startIdx.value, endIdx.value).map((item, i) => ({ item, index: startIdx.value + i })))
const totalHeight = computed(() => props.items.length * props.itemHeight)
const offsetY     = computed(() => startIdx.value * props.itemHeight)

function onScroll() {
  scrollTop.value = container.value?.scrollTop ?? 0
}

onMounted(() => container.value?.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => container.value?.removeEventListener('scroll', onScroll))
</script>

<template>
  <div
    ref="container"
    class="trx-virtual-list"
    :style="{ height: `${height}px`, overflowY: 'auto' }"
  >
    <div :style="{ height: `${totalHeight}px`, position: 'relative' }">
      <div :style="{ transform: `translateY(${offsetY}px)` }">
        <div
          v-for="{ item, index } in visibleItems"
          :key="index"
          :style="{ height: `${itemHeight}px` }"
        >
          <slot :item="item" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trx-virtual-list { overflow-y: auto; }
</style>
