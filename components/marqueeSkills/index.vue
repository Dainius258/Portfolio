<template>
    <div class="flex flex-row justify-center w-full">
        <NuxtMarquee  :autoFill="true" :gradient="true" :gradientColor="'#142850'">
            <ItemTag class="ml-2" v-for="(skill, index) in skillsArray" :key="index" :name="skill"/>
        </NuxtMarquee>
    </div>
</template>

<script setup>

const props = defineProps({
    skillsArray: {
        type: Array,
        required: true
    }
})

</script>

<style scoped>

</style>