<template>
  <div class="bg-primary size-full flex justify-center">
        <Nav class="mt-5"></Nav>
    <p class="mt-40">{{ $t('test') }}</p>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>

