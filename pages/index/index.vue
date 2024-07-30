<template>
  <div class="bg-primary size-full flex flex-col text-white">
    <div class="flex flex-col items-center">
        <header class="sticky top-0 z-10">
          <Nav class="mt-12" @scroll="scrollToSection"></Nav>
        </header>
        <main class="w-6/12 flex flex-col items-center">
        <TitleDescription class="mt-16"></TitleDescription>
        <!-- About -->
        <div ref="aboutSection" id="about" class="flex flex-col items-center">
          <h1 class="mt-16 text-4xl font-semibold" >{{ $t('about.title') }}</h1>
          <p class="mt-10 text-xl">
            {{greeting}},
            {{ $t('about.description.first') }} <br><br> 
            {{ $t('about.description.second') }} <br><br> 
            {{ $t('about.description.third') }} <br><br> 
            {{ $t('about.description.fourth') }} </p>
            <div class="mt-16 h-16 border-l-2 border-fourth"></div>
        </div>
        <!-- Skills -->
        <h1 class="mt-16 text-4xl font-semibold" >{{$t('skills.title')}}</h1>
        <MarqueeSkills :skillsArray="skills" class="mt-10"/>
        <!-- Projects -->
        <div ref="projectsSection" id="projects" class="flex flex-col items-center">
          <h1 class="mt-16 text-4xl font-semibold" >{{$t('projects.title')}}</h1>
          <ItemCard 
          class="mt-6" 
          v-for="project in projects" 
          :key="project" 
          :title="project.title" 
          :description="project.description"
          :tags="project.tags"
          :animate="true"
          :clickable="true"
          />
        </div>
        <div class="mt-16 h-16 border-l-2 border-fourth"></div>
        <!-- Experience -->
        <div ref="experienceSection" id="experience" class="flex flex-col items-center mt-16">
          <h1  class="text-4xl font-semibold" >{{$t('experience.title')}}</h1>
          <TimelineExpierence class="mt-10" :experience="experience"/>
        </div>
        <!-- Contact -->
        <div id="contact" class="mt-28 mb-28">
          <FormContact ref="contactSection" class="mb-10"  />
        </div>
        </main>
    </div>
  </div>
</template>

<script setup>
import AnimateOnScroll from 'primevue/animateonscroll';

const { locale, getLocaleCookie, t } = useI18n()
const greeting = ref("");

const aboutSection = ref(null);
const experienceSection = ref(null);
const projectsSection = ref(null);
const contactSection = ref(null);


const scrollToSection = (section) => {
  switch (section) {
    case 'about':
      aboutSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
      break;
    case 'experience':
      experienceSection.value.scrollIntoView({behavior: 'smooth', block: 'center' });
      break;
    case 'projects':
      projectsSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
      break;
    case 'contact':
      contactSection.value.$el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      break;
    default:
      break;
  }
}

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



const experience = ref([
  {
    title: t('experience.college.title'),
    location: t('experience.college.location'),
    description: t('experience.college.description'),
    date: t('experience.college.date'),
    img: "/static/logo/kvk.png"
 },
  {
    title: t('experience.turiba.title'),
    location: t('experience.turiba.location'),
    description: t('experience.turiba.description'),
    date: t('experience.turiba.date'),
    img: "/static/logo/tu.png"
  },
])

const projects = ref([
  {
    title: t('projects.jobPortal.title'),
    description: t('projects.jobPortal.description'),
    tags: ["JavaScript", "Vue.js", "Node.js", "MongoDB"]
  },
  {
    title: t('projects.smartHome.title'),
    description: t('projects.smartHome.description'),
  },
  {
    title: t('projects.recipeApp.title'),
    description: t('projects.recipeApp.description'),
  },
  {
    title: t('projects.scrolle.title'),
    description: t('projects.scrolle.description'),
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

