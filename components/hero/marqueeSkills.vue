<template>
    <div class="flex flex-row justify-center w-full">
        <NuxtMarquee  :autoFill="true" :gradient="true" :gradientColor="'#142850'">
            <HeroItemSkill class="ml-2" v-for="(skill, index) in skills" :key="index" :name="skill"/>
        </NuxtMarquee>
    </div>
</template>

<script setup>

const skills = ref([
    "JavaScript",
    "Java",
    "Python",
])

</script>

<style scoped>

</style>