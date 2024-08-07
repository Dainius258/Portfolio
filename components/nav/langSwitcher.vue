<template>
    <div v-outside="closeDropdown" class="relative w-fit font-sans">
    <button 
    @click="toggleDropwdown" 
    class="flex justify-between rounded-full w-fit p-1 bg-primary transition-colors duration-200 ease-in-out hover:bg-fourth hover:text-cyan-300 text-lg text-white mx-2 my-2 px-2"
    :class="{' bg-cyan-500 text-cyan-300': open}"
    >
      <Icon class="mt-1 ml-1" :name="selectedIcon" /> 
      <Icon class="size-7 transition-transform duration-500 ease-in-out" :class="{'rotate-180': open}" name="mdi:chevron-up" />
    </button>
    <!-- Dropdown -->
    <transition name="fade">
      <div v-if="open" class="absolute -translate-x-24 z-10 md:-translate-x-0 mt-4 w-44 rounded-md shadow-lg border-2 border-primary bg-sky-800 ">
        <div class="py-1">
          <button @click="selectLanguage('English', 'flag:gb-4x3')" class= "block w-full text-left px-4 py-2 text-sm text-white hover:bg-fourth ">
            {{ $t('nav.english') }} <Icon name="flag:gb-4x3" />
          </button>
          <button @click="selectLanguage('Lithuanian', 'flag:lt-4x3')" class="block w-full text-left px-4 py-2 text-sm text-white hover:bg-fourth ">
            {{ $t('nav.lithuanian') }} <Icon name="flag:lt-4x3" />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const open = ref(false)
const { locale, setLocale, getLocaleCookie } = useI18n()
const selectedLanguage = ref(getLocaleCookie() === 'lt-LT' ? 'Lithuanian' : 'English')
const selectedIcon = ref(selectedLanguage.value === 'Lithuanian' ? 'flag:lt-4x3' : 'flag:gb-4x3')


const selectLanguage = (language, icon) => {
  selectedLanguage.value = language
  selectedIcon.value = icon
  open.value = false
  switch (language) {
    case 'English':
      setLocale('en-US');
      break
    case 'Lithuanian':
      setLocale('lt-LT');
      break
  }
}

const toggleDropwdown = () => {
  open.value = !open.value
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