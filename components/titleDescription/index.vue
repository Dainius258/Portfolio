<template>
    <div class="text-white w-full">
        <!-- Name with links -->
        <div class="flex flex-row flex-wrap">
            <NuxtLink to="https://www.linkedin.com/in/dainius-ju%C5%A1ka-9b5769320/" target="_blank">
            <h1 class=" font-bold text-5xl transition-colors duration-200 ease-in-out mr-2 hover:text-fourth">Dainius Juška</h1>
            </NuxtLink>
            <div class="hidden sm:flex flex-row">
                <NuxtLink to="https://www.linkedin.com/in/dainius-ju%C5%A1ka-9b5769320/" target="_blank">
                <button class=" bg-secondary size-fit transition-colors duration-200 ease-in-out rounded-full hover:bg-tertiary">
                    <Icon name="mdi:linkedin" class="transition-colors duration-200 ease-in-out mx-2 mt-2 bg-white  hover:bg-cyan-300" size="38" />
                </button>
                </NuxtLink>
                <NuxtLink to="https://github.com/Dainius258" target="_blank">
                <button class=" bg-secondary transition-colors duration-200 size-fit ease-in-out rounded-full ml-2 hover:bg-tertiary">
                    <Icon name="mdi:github" class="transition-colors duration-200 ease-in-out mx-2 mt-2 bg-white  hover:bg-cyan-300" size="38" />
                </button>
                </NuxtLink>
            </div>
        </div>
        <!-- Description -->
        <p class="mt-4 text-3xl">{{$t('name.description')}}</p>
    </div>
</template>

<script setup>
const { locale } = useI18n()

const goToLink = (link) => {
    window.location.href = link;
}

</script>
