<template>
    <div class="bg-secondary size-fit flex flex-row rounded-full justify-between p-1 border-4 shadow-lg border-primary">
        <div class="flex flex-row justify-center">
            <NavButton :text="$t('nav.home')" />
            <NavButton :text="$t('nav.about')"/>
            <NavButton :text="$t('nav.expierence')"/>
            <NavButton :text="$t('nav.projects')"/>
            <NavButton :text="$t('nav.contact')"/>
        </div>
        <div class="flex flex-row ml-4">
            <NavLangSwitcher/>
            <NavColorMode class="mr-2"/>
        </div>
    </div>
</template>

<script setup>
const { locale } = useI18n()
</script>