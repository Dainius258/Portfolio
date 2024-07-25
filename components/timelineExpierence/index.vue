<template>
    <div class="container mx-auto">
    <div class="relative">
      <div class="absolute h-full w-0.5 bg-fourth left-1/2 transform -translate-x-1/2"></div>
      <div class="space-y-8">
        <div v-for="(item, index) in experience" :key="index" class="flex items-start relative">
         <div class="w-1/2" :class="{ 'order-1 mr-20  text-right': index % 2 === 0, 'order-2 ml-20': index % 2 !== 0 }">
            <ItemCard :title="item.title" :subtitle="item.location" :description="item.description"/>
          </div>
          <!-- Checkpoint -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white">
            <NuxtImg :src="item.img" />
          </div>
          <!-- Date -->
          <div class="w-1/2 mt-5" :class="{ 'order-2': index % 2 === 0, 'order-1 text-right': index % 2 !== 0 }">
          <p>{{item.date}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    experience: {
        type: Array,
        required: true
    }
})


</script>