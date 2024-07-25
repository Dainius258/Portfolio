<template>
  <div 
    ref="card" 
    class="scaled-element w-full rounded-xl bg-secondary p-3 transition-all duration-300 ease-in-out"
    :class="{ 'cursor-pointer hover:bg-cyan-800': clickable }"
    :style="animate ? { '--scale': scale } : {}"
  >
    <h1 class="font-semibold text-3xl">{{ title }}</h1>
    <h2 class="text-sm" v-if="subtitle">{{ subtitle }}</h2>
    <p class="mt-1">{{ description }}</p>
    <div class="flex flex-row mt-2" v-if="tags">
      <ItemTag class="mr-3 text-sm" v-for="tag in tags" :key="tag" :name="tag" />
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const card = ref(null)
const scale = ref(1)

const { stop } = useIntersectionObserver(
  card,
  ([{ intersectionRatio }]) => {
    scale.value = 0.8 + intersectionRatio * 0.2
  },
  { threshold: Array.from({ length: 100 }, (_, i) => i / 100) }
)

onUnmounted(stop)

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  animate: {
    type: Boolean,
    required: false,
    default: false
  },
  clickable: {
    type: Boolean,
    required: false,
    default: false
  },
  tags: {
    type: Array,
    required: false
  }
})
</script>

<style scoped>
.scaled-element {
  transform: scale(var(--scale, 1));
}
</style>