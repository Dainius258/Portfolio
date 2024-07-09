<template>
  <div class="bg-primary size-full">
        <Nav></Nav>
    <h1 class="mt-40">Index page</h1>
    <p>{{ $t('test') }}</p>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>

