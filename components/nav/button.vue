<template>
    <button class="rounded-full transition-colors duration-200 ease-in-out hover:bg-fourth hover:text-gray-200 text-lg text-white mx-2 my-2 px-4">{{text}}</button>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>