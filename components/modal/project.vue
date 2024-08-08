<template>
  <div @click="$emit('closeModal')" class="modal-overlay z-10">
    <div class="modal lg:h-5/6 lg:w-6/12 p-6 bg-secondary text-white flex flex-col" @click.stop>
      <div v-if="project">
        <!-- Header -->
        <div class="flex flex-row justify-between">
          <h1 class=" text-3xl font-semibold">{{ project.title }}</h1>
          <button @click="$emit('closeModal')" class="bg-tertiary h-fit w-fit px-4 py-1 text-white rounded-2xl text-2xl transition-colors duration-300 hover:bg-fourth">{{$t("projectModal.close")}}</button>
        </div>
        <!-- Images -->
        <div v-if="project.images" class="mt-10">
          <Swiper
           :modules="modules"
           :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
           :pagination="{ clickable: true }"
           :slides-per-view="1"
           :space-between="20"
           @swiper="setMainSwiper"
          >
          <SwiperSlide v-for="(image, index) in project.images" :key="index">
            <div class="flex justify-center">
              <img 
              :src="image.itemImageSrc"
              :alt="image.alt"
              :key="image.itemImageSrc"
              class="rounded-md max-w-full max-h-[400px] w-auto h-auto object-cover"
              />
            </div>
          </SwiperSlide>
                      <div class="swiper-button-prev" @click.stop></div>
                      <div class="swiper-button-next" @click.stop></div>
        </Swiper>

        </div>
        <!-- Description -->
        <div class="mt-10 text-left">
          <h1 class="text-2xl font-semibold">{{$t("projectModal.header.description")}}</h1>
          <p>{{ project.description }} {{project.detailedDescription ? project.detailedDescription : ''}}</p>
        </div>
        <!-- Tags -->
        <div class="mt-10 flex flex-col items-start text-start">
          <h1 class="text-2xl font-semibold ">{{$t("projectModal.header.technologies")}}</h1>
          <div class="flex flex-row flex-wrap">
            <ItemTag v-for="(tag, index) in project.tags" :key="index" :name="tag" class="mt-4 mr-2"/>
          </div>
        </div>
        <!-- Links -->
        <div v-if="project.links" class="mt-10 flex flex-col items-start">
          <h1 class="text-2xl font-semibold ">{{$t("projectModal.header.links")}}</h1>
            <div class="flex flex-col mt-2 w-full">
              <div v-if="project.links.github" >
                <NuxtLink v-for="link in project.links.github" :key="link" :to="link" target="_blank">
                  <div class="flex flex-row h-fit w-full items-center cursor-pointer hover:bg-fourth p-1 transition-colors duration-200 ease-in-out">
                  <Icon name="mdi:github" size="38" />
                  <p class="ml-2 text-left overflow-hidden">{{link}}</p>
                  </div>
                </NuxtLink>
              </div>
              <div v-if="project.links.website">
                <NuxtLink v-for="link in project.links.website" :key="link" :to="link" target="_blank">
                <div class="flex flex-row mt-2 h-fit w-full items-center cursor-pointer hover:bg-fourth p-1 transition-colors duration-200 ease-in-out">
                <Icon name="mdi:link" size="38" />
                <p class="ml-2 text-left overflow-hidden">{{link}}</p>
                </div>
                </NuxtLink>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { locale } = useI18n()
const modules = [Navigation, Pagination];
const mainSwiperInstance = ref(null);

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const setMainSwiper = (swiper) => {
  mainSwiperInstance.value = swiper;
};

const visible = ref(false);

</script>

<style lang="postcss" scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #0000007b;
}

.modal {
  text-align: center;
  margin-top: 2%;
  border-radius: 10px;
  overflow-y: auto; 
}

/* Custom scrollbar styles */
.modal::-webkit-scrollbar {
  width: 10px;
}

.modal::-webkit-scrollbar-track {
  background: #f1f1f100;
  margin-top:10px;
  margin-bottom:10px;
}

.modal::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #617fab;
}

.modal::-webkit-scrollbar-thumb:hover {
  background: #1893ac;
}

.swiper-button-prev,
.swiper-button-next {
  @apply text-white bg-tertiary bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out z-10;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  @apply bg-opacity-75;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-xl;
}

.swiper-button-prev {
  @apply left-5;
}

.swiper-button-next {
  @apply right-5;
}

</style>