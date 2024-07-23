<template>
    <button @click="switchColorMode">
        <div class="size-10 mb-3">
          <transition name="fade" mode="out-in">
              <Icon 
              v-if="colorMode.preference === 'dark'"
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
        </div>
    </button>
</template>

<script setup>
// mdi:lightbulb-on-90 mdi:weather-night
const colorMode = useColorMode()
const selectedIcon = ref(colorMode.preference === 'dark' ? 'mdi:lightbulb-on-90' : 'mdi:weather-night')

const switchColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
  console.log(colorMode.preference);
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>