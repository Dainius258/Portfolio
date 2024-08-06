<template>
    <div class="flex flex-col items-center justify-center w-full">
        <NuxtMarquee v-if="isMarquee && isDesktop"  :autoFill="true" :gradient="true" :gradientColor="'#142850'">
            <ItemTag class="ml-2" v-for="(skill, index) in skillsArray" :key="index" :name="skill"/>
        </NuxtMarquee>
        <div v-else class="flex flex-row flex-wrap justify-center w-full">
            <ItemTag class="ml-2 mt-2" v-for="(skill, index) in skillsArray" :key="index" :name="skill"/>
        </div>
    </div>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'

const isDesktop = useMediaQuery('(min-width: 1024px)')

const props = defineProps({
    skillsArray: {
        type: Array,
        required: true
    },
    isMarquee: {
        type: Boolean,
        default: true
    }
})

</script>

<style scoped>

</style>