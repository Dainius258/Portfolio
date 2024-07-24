<template>
  <div class="bg-primary size-full flex flex-col text-white">
    <div class="flex flex-col items-center">
        <div class="sticky top-0 z-10">
          <Nav class="mt-6"></Nav>
        </div>
        <main class="w-6/12 flex flex-col items-center">
        <TitleDescription class="mt-10"></TitleDescription>
        <!-- <div class=" my-10 h-16 border-l-2 border-fourth"></div> -->
        <h1 class="mt-10 text-4xl" >{{ $t('about.title') }}</h1>
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
        <ItemCard 
        v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-scaleout' }" 
        class="mt-5" 
        v-for="project in projects" 
        :key="project" 
        :title="project.title" 
        :description="project.description"
        :tags="project.tags"
        />
        <div class=" my-10 h-16 border-l-2 border-fourth"></div>
        </main>
    </div>
  </div>
</template>

<script setup>
import AnimateOnScroll from 'primevue/animateonscroll';

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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc.",
    tags: ["JavaScript", "Vue.js", "Node.js", "MongoDB"]
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc."
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc."
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc."
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc."
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

<style scoped>
@keyframes scalein {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scalein {
  animation-name: scalein;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.animate-scaleout {
  animation-name: scalein;
  animation-direction: reverse;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
</style>

