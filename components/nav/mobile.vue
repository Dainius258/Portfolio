<template>
    <div class="bg-sky-800 w-screen h-16 items-center flex flex-row justify-end border-b-4 p-1 shadow-lg border-primary">
        <div class="flex flex-row w-full justify-between">
            <div class="flex flex-row ml-4">
                <NuxtLink to="https://www.linkedin.com/in/dainius-ju%C5%A1ka-9b5769320/" target="_blank">
                <button class=" bg-primary size-fit transition-colors duration-200 ease-in-out rounded-full hover:bg-tertiary">
                    <Icon name="mdi:linkedin" class="transition-colors duration-200 ease-in-out mx-2 mt-2 bg-white  hover:bg-cyan-300" size="38" />
                </button>
                </NuxtLink>
                <NuxtLink to="https://github.com/Dainius258" target="_blank">
                <button class=" bg-primary transition-colors duration-200 size-fit ease-in-out rounded-full ml-2 hover:bg-tertiary">
                    <Icon name="mdi:github" class="transition-colors duration-200 ease-in-out mx-2 mt-2 bg-white  hover:bg-cyan-300" size="38" />
                </button>
                </NuxtLink>
             <NavButton 
                class="bg-primary"
                @click="emitScrollEvent('contact')" 
                :text="$t('nav.contact')"
            />
            </div>
            <NavLangSwitcher/>
        </div>
    </div>
</template>

<script setup>
import { useScrollSpy } from '~/composables/useScrollSpy';

const emit = defineEmits(['scroll'])

const { currentSection } = useScrollSpy()

const emitScrollEvent = (section) => {
    emit('scroll', section)
    currentSection.value = section
}

const { locale } = useI18n()
</script>