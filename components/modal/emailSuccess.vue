<template>
  <div class="modal-overlay z-10">
    <div class="modal h-fit w-fit p-3 bg-secondary text-white flex flex-col">
      <div>
        <h6>Sample SampleSampleSampleSampleSampleSampleSampleSample</h6>
        <p>Sample</p>
      </div>
      <div class="flex justify-end">
        <button class="bg-tertiary px-4 py-1 text-white rounded-2xl text-sm transition-colors duration-300 hover:bg-fourth">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const visible = ref(false);

</script>

<style scoped>

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
  margin-top: 10%;
  border-radius: 20px;
}

</style>