<template>
    <button @click="switchColorMode">
        <transition name="fade" mode="out-in">
            <Icon 
            v-if="colorMode === 'light'"
            class="mt-1 size-10 text-yellow-100 hover:text-yellow-300 transition-colors duration-200 ease-in-out" 
            name="mdi:lightbulb-on-90" 
            key="light"
            />
            <Icon 
            v-else
            class="mt-1 size-10 text-blue-300 hover:text-blue-600 transition-colors duration-200 ease-in-out" 
            name="mdi:weather-night" 
            key="dark"
            />
        </transition>
    </button>
</template>

<script setup>
// mdi:lightbulb-on-90 mdi:weather-night
const selectedIcon = ref('mdi:lightbulb-on-90')
const colorMode = ref('light')

const switchColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>