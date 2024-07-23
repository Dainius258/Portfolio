<template>
  <div class="bg-primary size-full flex flex-col text-white">
    <div class="flex flex-col items-center">
        <Nav class="mt-6"></Nav>
        <main class="w-5/12 flex flex-col items-center">
        <TitleDescription class="mt-10"></TitleDescription>
        <div class=" my-10 h-16 border-l-2 border-fourth"></div>
        <h1 class="mt-2 text-4xl" >About me</h1>
        <p class="mt-5 text-xl">Good evening, I am a passionate full-stack developer who is looking to hone his skills and develop intuitive, beautiful and most importantly secure applications. Currently I am studying in my third year at Klaipėdos valstybinė kolegija / Higher education institution. 
          <br> <br> I learned a lot during study years by doing multiple projects. I did not hold back to take on completely new things by myself or with my colleagues and I developed projects using Node, Express, Android Studio, Docker and so on. 
          <br> <br> Developed in an agile environment and I know basics of it and so the importance of communication, teamwork and taking the initiative to succesfully deliver a result.
          <br> <br> In my leisure time I enjoy playing video games, fishing, watching videos on youtube and sometimes learning new things such as video editing, Blender, Unreal Engine or modding games in general. 
          </p>
          <div class=" my-10 h-16 border-l-2 border-fourth"></div>
        <h1 class="mt-2 text-4xl" >My skills</h1>
        <MarqueeSkills :skillsArray="skills" class="mt-5"/>
        </main>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const skills = ref([
    "JavaScript",
    "Java",
    "Kotlin",
    "Android Studio",
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "Blender",
])
</script>

