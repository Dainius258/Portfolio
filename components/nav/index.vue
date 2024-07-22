<template>
    <div class="bg-secondary size-fit rounded-full">
        <div class="py-2 px-2 flex">
            <NavButton :text="'Home'" />
            <NavButton :text="'About'"/>
            <NavButton :text="'Experience'"/>
            <NavButton :text="'Projects'"/>
            <NavButton :text="'Hobby projects'"/>
            <NavButton :text="'Contact'"/>
            <NavLangSwitcher/>
            <NavColorMode class="mr-2"/>
        </div>
    </div>
</template>

<script setup>
</script>