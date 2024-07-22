<template>
    <div v-outside="closeDropdown" class="relative w-fit font-sans">
    <button 
    @click="open = !open" 
    class="flex justify-between rounded-full w-44 p-1 bg-primary transition-colors duration-200 ease-in-out hover:bg-tertiary hover:text-cyan-300 text-lg text-white mx-2 my-2 px-2"
    :class="{'bg-tertiary text-cyan-300': open}"
    >
      <span class=" w-24 ">
        {{ selectedLanguage }}
      </span>
      <Icon class="mt-1" :name="selectedIcon" /> 
      <Icon class="ml-1 size-7 transition-transform duration-500 ease-in-out" :class="{'rotate-180': open}" name="mdi:chevron-up" />
    </button>
    <transition name="fade">
      <div v-if="open" class="absolute z-10 ml-2 mt-4 w-44 rounded-md shadow-lg bg-secondary">
        <div class="py-1">
          <button @click="selectLanguage('English', 'flag:gb-4x3')" class= "block w-full text-left px-4 py-2 text-sm text-white hover:bg-tertiary hover:text-cyan-300">
            English <Icon name="flag:gb-4x3" />
          </button>
          <button @click="selectLanguage('Lithuanian', 'flag:lt-4x3')" class="block w-full text-left px-4 py-2 text-sm text-white hover:bg-tertiary hover:text-cyan-300">
            Lithuanian <Icon name="flag:lt-4x3" />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const open = ref(false)
const selectedLanguage = ref('English')
const selectedIcon = ref('flag:gb-4x3')

const selectLanguage = (language, icon) => {
  selectedLanguage.value = language
  selectedIcon.value = icon
  open.value = false
}

const openDropdown = () => {
  open.value = true
}

const closeDropdown = () => {
  open.value = false
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

.transition-transform {
  transition: transform 0.5s;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>