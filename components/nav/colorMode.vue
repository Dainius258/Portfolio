<template>
    <button @click="switchColorMode">
        <Icon 
        class="mt-1 size-10 transition-colors duration-200 ease-in-out" 
        :name="selectedIcon" 
        :class="{'text-cyan-100 hover:text-cyan-300': colorMode === 'dark','text-yellow-100 hover:text-yellow-300': colorMode === 'light'}"
        />
    </button>
</template>

<script setup>
const selectedIcon = ref('mdi:lightbulb-on-90')
const colorMode = ref('light')

const switchColorMode = () => {
    if (colorMode.value === 'light') {
        colorMode.value = 'dark'
        selectedIcon.value = 'mdi:weather-night'
    } else {
        colorMode.value = 'light'
        selectedIcon.value = 'mdi:lightbulb-on-90'
    }
}
// mdi:lightbulb-on-90 mdi:weather-night
</script>