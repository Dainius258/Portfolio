<template>
    <div class="flex flex-col items-center p-2 w-fit rounded-3xl bg-secondary">
        <h1 class="text-4xl font-semibold">Contact me</h1>
        <form class="p-2 flex flex-col items-center w-full h-fit">
        <h2 class="text-center text-white">Please contact me directly at dainiuss258@gmail.com or through this form</h2>
        <input class=" bg-sky-950 focus:ring-2 focus:ring-fourth focus:outline-none m-2 p-2 rounded-lg w-full h-1/4" type="email" placeholder="Email" />
        <textarea class="bg-sky-950 resize-none focus:ring-2 focus:ring-fourth focus:outline-none m-2 p-2 rounded-lg w-full h-48" placeholder="Message"></textarea>
        <div class="flex flex-row justify-start w-full">
            <button class="bg-tertiary px-4 py-1 text-white rounded-2xl text-xl transition-colors duration-300 hover:bg-fourth">Send</button>
        </div>
        </form>
    </div>
</template>

<script setup> 

</script>