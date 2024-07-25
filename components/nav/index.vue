<template>
    <div class="bg-secondary size-fit flex flex-row rounded-full justify-between p-1 border-4 shadow-lg border-primary">
        <div class="flex flex-row justify-center">
            <NavButton @click="emitScrollEvent('about')"  :text="$t('nav.about')"/>
            <NavButton @click="emitScrollEvent('projects')" :text="$t('nav.projects')"/>
            <NavButton @click="emitScrollEvent('experience')" :text="$t('nav.expierence')"/>
            <NavButton @click="emitScrollEvent('contact')" :text="$t('nav.contact')"/>
        </div>
        <div class="flex flex-row ml-4">
            <NavLangSwitcher/>
            <NavColorMode class="mr-2"/>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['scroll'])

const emitScrollEvent = (section) => {
    emit('scroll', section)
}

const { locale } = useI18n()
</script>