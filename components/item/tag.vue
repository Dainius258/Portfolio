<template>
    <div class="w-fit bg-tertiary rounded-lg flex items-center">
        <span class="px-2 py-1 font-semibold">{{name}}</span>
    </div>
</template>

<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

</script>