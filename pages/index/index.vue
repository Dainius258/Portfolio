<template>
<div class="bg-primary flex flex-col justify-center items-center">
  <header class="sticky top-0 z-10 slide-in-top">
          <Nav class="hidden sm:flex md:mt-6" @scroll="scrollToSection"></Nav>
          <NavMobile class="sm:hidden" @scroll="scrollToSection"></NavMobile>
  </header>
    <div class="bg-primary size-full flex flex-col text-white items-center overflow-x-hidden">
        <main class="lg:w-8/12 w-10/12 flex flex-col items-center">
        <ModalProject :project="selectedProject" @close-modal="showProjectModal=false" v-show="showProjectModal"/>
        <TitleDescription class="mt-16 appear"></TitleDescription>
        <!-- About -->
        <div ref="aboutSection" id="about" class="flex flex-col items-center appear" :class="{'text-transparent': greeting === ''}">
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
        <Skills :isMarquee="true" :skillsArray="skills" class="mt-10"/>
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
          @click="openProjectModal(project.title)"
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
const { locale, getLocaleCookie, t } = useI18n()
const greeting = ref("");

const aboutSection = ref(null);
const experienceSection = ref(null);
const projectsSection = ref(null);
const contactSection = ref(null);
const initialLoad = ref(true);

const showProjectModal = ref(false);

const openProjectModal = (projectName) => {
  showProjectModal.value = true;
  selectedProject.value = projects.value.find(project => project.title === projectName);
}


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
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Passport.js"],
    links: {
      website: ["https://vb.kvk.lt/permalink/f/4v720s/ELABAPDB201510033"]
    },
    images: [
      { itemImageSrc: "/static/images/jobPortal/jobPortal1.png", alt: "Job Portal"},
      { itemImageSrc: "/static/images/jobPortal/jobPortal2.png", alt: "Job Portal"},
    ]
  },
  {
    title: t('projects.smartHome.title'),
    description: t('projects.smartHome.description'),
    detailedDescription: t('projects.smartHome.detailedDescription'),
    tags: ["Android Studio", "Kotlin", "Trello", "Confluence", "Figma"],
    links: {
      github: ["https://github.com/Dainius258/ismaniu-namu-sistemos-pasirinkimas"],
    },
    images: [
      { itemImageSrc: "/static/images/smartHome/smarthome1.jpg", alt: "Smart Home"},
      { itemImageSrc: "/static/images/smartHome/smarthome2.jpg", alt: "Smart Home"},
      { itemImageSrc: "/static/images/smartHome/smarthome3.jpg", alt: "Smart Home"},
      { itemImageSrc: "/static/images/smartHome/smarthome4.jpg", alt: "Smart Home"},
    ]
  },
  {
    title: t('projects.recipeApp.title'),
    description: t('projects.recipeApp.description'),
    detailedDescription: t('projects.recipeApp.detailedDescription'),
    tags: ["Android Studio", "Kotlin", "Node.js", "Express.js", "PostgreSQL", "JWT", "Figma"],
    links: {
      github: ["https://github.com/Dainius258/recipe-app", "https://github.com/Dainius258/recipe-app-api"],
    },
    images: [
      { itemImageSrc: "/static/images/recipeApp/recipeapp1.png", alt: "Recipe App"},
      { itemImageSrc: "/static/images/recipeApp/recipeapp2.png", alt: "Recipe App"},
      { itemImageSrc: "/static/images/recipeApp/recipeapp3.png", alt: "Recipe App"},
      { itemImageSrc: "/static/images/recipeApp/recipeapp4.png", alt: "Recipe App"},
      { itemImageSrc: "/static/images/recipeApp/recipeapp5.png", alt: "Recipe App"},
      { itemImageSrc: "/static/images/recipeApp/recipeapp6.png", alt: "Recipe App"},
      { itemImageSrc: "/static/images/recipeApp/recipeapp7.png", alt: "Recipe App"},
      { itemImageSrc: "/static/images/recipeApp/recipeapp8.png", alt: "Recipe App"},
    ]
  },
  {
    title: t('projects.scrolle.title'),
    description: t('projects.scrolle.description'),
    detailedDescription: t('projects.scrolle.detailedDescription'),
    tags: ["Nuxt", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "Traefik", "Figma", "Trello", "Google Cloud Run"],
    links: {
      github: ["https://github.com/RemiPR/Scrolle-Erasmus-Internship"],
    },
      images: [
    { itemImageSrc: "/static/images/scrolle/scrolle1.png", alt: "Scrolle"},
    { itemImageSrc: "/static/images/scrolle/scrolle2.png", alt: "Scrolle"},
    { itemImageSrc: "/static/images/scrolle/scrolle3.png", alt: "Scrolle"},
    { itemImageSrc: "/static/images/scrolle/scrolle4.png", alt: "Scrolle"},
  ]
  },
])

const selectedProject = ref(projects.value[0]);

const skills = ref([
    "Java",
    "Kotlin",
    "Android Studio",
    "Vue.js",
    "Nuxt.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "Figma",
    "Tailwind CSS",
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

@keyframes slide-in-top {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.appear {
  animation: appear 1s ease-out forwards;
}
.slide-in-top {
  animation: slide-in-top 0.5s ease-out forwards;
}

</style>

