<template>
    <div class="text-white w-full">
        <!-- Name with links -->
        <div class="flex flex-row">
            <h1 class=" font-bold text-5xl">Dainius Juška</h1>
            <button class=" bg-secondary transition-colors duration-200 ease-in-out rounded-full ml-2 hover:bg-tertiary">
                <Icon name="mdi:github" class="transition-colors duration-200 ease-in-out mx-2 mt-2 bg-white  hover:bg-cyan-300" size="38" />
            </button>
        </div>
        <!-- Description -->
        <p class="mt-4 text-3xl">{{$t('name.description')}}</p>
    </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
