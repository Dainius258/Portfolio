<template>
    <button class="rounded-full transition-colors duration-200 ease-in-out hover:bg-tertiary hover:text-cyan-300  size text-lg text-white mx-2 my-2 px-4">{{text}}</button>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>