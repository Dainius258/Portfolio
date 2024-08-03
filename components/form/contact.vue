<template>
    <div class="flex flex-col items-center p-2 w-fit rounded-3xl bg-secondary">
        <h1 class="text-4xl font-semibold">{{t('contactForm.title')}}</h1>
        <form class="p-2 flex flex-col items-center w-full h-fit">
        <h2 class="text-center text-white">{{t('contactForm.subtitle.first')}} dainiuss258@gmail.com {{t('contactForm.subtitle.second')}}</h2>
        <input class=" bg-sky-950 focus:ring-2 focus:ring-fourth focus:outline-none m-2 p-2 rounded-lg w-full h-1/4" type="email" :placeholder="t('contactForm.email')" />
        <textarea class="bg-sky-950 resize-none focus:ring-2 focus:ring-fourth focus:outline-none m-2 p-2 rounded-lg w-full h-48" :placeholder="t('contactForm.message')"></textarea>
        <div class="flex flex-row justify-start w-full">
            <button class="bg-tertiary px-4 py-1 text-white rounded-2xl text-xl transition-colors duration-300 hover:bg-fourth">{{t("contactForm.send")}}</button>
        </div>
        </form>
    </div>
</template>

<script setup> 
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>