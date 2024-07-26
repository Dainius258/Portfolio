<template>
    <div class="bg-secondary size-fit flex flex-row rounded-full justify-between p-1 border-4 shadow-lg border-primary">
        <div class="flex flex-row justify-center">
            <NavButton 
                @click="emitScrollEvent('about')"  
                :text="$t('nav.about')"
                :class="{ 'bg-tertiary': currentSection === 'about' }"
            />
            <NavButton 
                @click="emitScrollEvent('projects')" 
                :text="$t('nav.projects')"
                :class="{ 'bg-tertiary': currentSection === 'projects' }"
            />
            <NavButton 
                @click="emitScrollEvent('experience')" 
                :text="$t('nav.experience')"
                :class="{ 'bg-tertiary': currentSection === 'experience' }"
            />
            <NavButton 
                @click="emitScrollEvent('contact')" 
                :text="$t('nav.contact')"
                :class="{ 'bg-tertiary': currentSection === 'contact' }"
            />
        </div>
        <div class="flex flex-row ml-4">
            <NavLangSwitcher/>
            <NavColorMode class="mr-2"/>
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