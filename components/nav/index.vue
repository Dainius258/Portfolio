<template>
    <div class="bg-secondary size-fit rounded-full">
        <div class="py-2 px-2 flex">
            <NavButton :text="$t('nav.home')" />
            <NavButton :text="$t('nav.about')"/>
            <NavButton :text="$t('nav.expierence')"/>
            <NavButton :text="$t('nav.projects')"/>
            <NavButton :text="$t('nav.hobby_projects')"/>
            <NavButton :text="$t('nav.contact')"/>
            <NavLangSwitcher/>
            <NavColorMode class="mr-2"/>
        </div>
    </div>
</template>

<script setup>
const { locale } = useI18n()
</script>