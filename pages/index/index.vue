<template>
  <div class="bg-primary size-full flex flex-col text-white">
    <div class="flex flex-col items-center">
        <div class="sticky top-0 z-10">
          <Nav class="mt-6" @scroll="scrollToSection"></Nav>
        </div>
        <main class="w-6/12 flex flex-col items-center">
        <TitleDescription class="mt-10"></TitleDescription>
        <!-- About -->
        <div ref="aboutSection" id="about" class="flex flex-col items-center">
          <h1 class="mt-10 text-4xl" >{{ $t('about.title') }}</h1>
          <p class="mt-5 text-xl">
            {{greeting}},
            {{ $t('about.description.first') }} <br><br> 
            {{ $t('about.description.second') }} <br><br> 
            {{ $t('about.description.third') }} <br><br> 
            {{ $t('about.description.fourth') }} </p>
            <div class=" my-10 h-16 border-l-2 border-fourth"></div>
        </div>
        <!-- Skills -->
        <h1 class="mt-2 text-4xl" >{{$t('skills.title')}}</h1>
        <MarqueeSkills :skillsArray="skills" class="mt-5"/>
        <!-- Projects -->
        <div ref="projectsSection" id="projects" class="flex flex-col items-center">
          <h1 class="mt-10 text-4xl" >{{$t('projects.title')}}</h1>
          <ItemCard 
          class="mt-5" 
          v-for="project in projects" 
          :key="project" 
          :title="project.title" 
          :description="project.description"
          :tags="project.tags"
          :animate="true"
          :clickable="true"
          />
        </div>
        <div class="mt-10 h-16 border-l-2 border-fourth"></div>
        <!-- Experience -->
        <div ref="experienceSection" id="experience" class="flex flex-col items-center  mb-10">
          <h1  class="mt-10 text-4xl" >{{$t('experience.title')}}</h1>
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

const { locale, getLocaleCookie } = useI18n()
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
    title: "Informatics Student",
    location: "Klaipėdos valstybinė kolegija / Higher Education Institution | Klaipėda, Lithuania",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc.",
    date: "2022 - Present",
    img: "/static/logo/kvk.png"
 },
  {
    title: "Full-stack Intern",
    location: "Turiba University | Ryga, Latvia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2024 May - 2024 July",
    img: "/static/logo/tu.png"
  },
])

const projects = ref([
  {
    title: "Job Listings Portal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc.",
    tags: ["JavaScript", "Vue.js", "Node.js", "MongoDB"]
  },
  {
    title: "Smart Home System Selection Quiz",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc."
  },
  {
    title: "Recipe Mobile Application",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nunc lacinia lorem, nec lacinia nunc mi in velit. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc. Nulla facilisi. Sed id nunc auctor, lacinia nunc nec, lacinia nunc."
  },
  {
    title: "Scrolle Learning Management System",
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

