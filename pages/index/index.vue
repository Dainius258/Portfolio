<template>
  <div class="bg-primary size-full flex flex-col text-white">
    <div class="flex flex-col items-center">
        <Nav class="mt-6"></Nav>
        <main class="w-5/12 flex flex-col items-center">
        <TitleDescription class="mt-10"></TitleDescription>
        <div class=" my-10 h-16 border-l-2 border-fourth"></div>
        <h1 class="mt-2 text-4xl" >{{ $t('about.title') }}</h1>
        <p class="mt-5 text-xl">
          {{greeting}},
          {{ $t('about.description.first') }} <br><br> 
          {{ $t('about.description.second') }} <br><br> 
          {{ $t('about.description.third') }} <br><br> 
          {{ $t('about.description.fourth') }} </p>
          <div class=" my-10 h-16 border-l-2 border-fourth"></div>
        <h1 class="mt-2 text-4xl" >{{$t('skills.title')}}</h1>
        <MarqueeSkills :skillsArray="skills" class="mt-5"/>
        <h1 class="mt-10 text-4xl" >{{$t('projects.title')}}</h1>
        <Card class="mt-5" v-for="project in projects" :key="project" :title="project.title" :description="project.description"/>
        </main>
    </div>
  </div>
</template>

<script setup>

const { locale, getLocaleCookie } = useI18n()
const greeting = ref("");


onMounted(() => {
  if (typeof window !== 'undefined') {
    const hour = new Date().getHours()
    if (hour < 12) {
      greeting.value = getLocaleCookie() === 'lt-LT' ? 'Labas rytas' : 'Good morning'
    } else if (hour < 18) {
      greeting.value = getLocaleCookie() === 'lt-LT' ? 'Laba diena' : 'Good afternoon'
    } else {
      greeting.value = getLocaleCookie() === 'lt-LT' ? 'Labas vakaras' : 'Good evening'
    }
  }
})

const projects = ref([
    {
        title: "Project 1",
        description: "This is a project description"
    },
    {
        title: "Project 2",
        description: "This is a project description"
    },
    {
        title: "Project 3",
        description: "This is a project description"
    },
    {
        title: "Project 4",
        description: "This is a project description"
    },
    {
        title: "Project 5",
        description: "This is a project description"
    },
])

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

