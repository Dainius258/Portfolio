<template>
  <div class="bg-primary size-full flex flex-col text-white">
    <div class="flex flex-col items-center">
        <Nav class="mt-5"></Nav>
        <main class="w-5/12 flex flex-col items-center">
        <TitleDescription class="mt-10"></TitleDescription>
        <h1 class="mt-2 text-4xl" >My skills</h1>
        <MarqueeSkills :skillsArray="skills" class="mt-2"/>
        <div class=" my-6 h-96 border-l-2 border-fourth"></div>
        </main>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const skills = ref([
    "JavaScript",
    "Java",
    "Python",
])
</script>

