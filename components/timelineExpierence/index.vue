<template>
    <div class="container mx-auto">
    <div class="relative">
      <div v-if="!smallerThanMd" class="absolute h-full w-0.5 bg-fourth left-1/2 transform -translate-x-1/2"></div>
      <div class="h-16"></div>
      <div class="space-y-8">
        <div v-for="(item, index) in experience" :key="index" class="flex items-start">
         <div 
         v-element-visibility="state => onCardVisibility(state, index)" 
         class="md:w-1/2 w-full" 
         :class="{ 
          'order-1 mr-4 md:mr-20 text-right slide-in-right': index % 2 === 0 && cardVisible[index], 
          'order-2 ml-4 md:ml-20 slide-in-left': index % 2 !== 0 && cardVisible[index],
          'opacity-0 translate-x-100': !cardVisible[index],
          }">
            <ItemCard :title="item.title" :subtitle="item.location" :description="item.description"/>
          </div>
          <!-- Checkpoint -->
          <div 
          v-if="!smallerThanMd"
          class="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center"
          >
            <NuxtImg class=" size-full p-3" :src="item.img" />
          </div>
          <!-- Date -->
          <div 
          class="md:w-1/2 w-fit text-sm md:text-base mt-" 
          :class="{ 
            'order-2 appear': index % 2 === 0 && cardVisible[index],  
            'order-1 text-right appear': index % 2 !== 0 && cardVisible[index],
            'opacity-0 translate-x-100': !cardVisible[index],
            }">
          <p>{{item.date}}</p>
          </div>
        </div>
      </div>
      <div class="h-16"></div>
    </div>
  </div>
</template>

<script setup>
import { vElementVisibility } from '@vueuse/components'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanMd = breakpoints.smaller('md')

const cardVisible = ref([])
function onCardVisibility(state, index) {
  if (state) {
    cardVisible.value[index] = true
  }
}

const props = defineProps({
    experience: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
@keyframes slide-in-right {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.appear {
  animation: appear 1s ease-out forwards;
}
.slide-in-right {
  animation: slide-in-right 1s ease-out forwards;
}
.slide-in-left {
  animation: slide-in-left 1s ease-out forwards;
}

</style>