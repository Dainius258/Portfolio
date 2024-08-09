<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    title: 'Dainius Juška',
    meta: [
    { name: 'description', content: 'Full-stack developer portfolio.' },
    { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    bodyAttrs: {
      class: 'Portfolio'
    },
  })
</script>