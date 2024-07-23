<template>
    <div class="w-full rounded-xl bg-secondary p-2">
        <h1 class="font-semibold text-3xl">{{title}}</h1>
        <p class="mt-1">{{description}}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

</script>