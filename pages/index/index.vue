<template>
  <div class="bg-primary size-full flex flex-col">
    <div class="flex flex-col items-center">
        <Nav class="mt-5"></Nav>
        <main class=" w-5/12">
        <Hero class="mt-5"></Hero>
        </main>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>

