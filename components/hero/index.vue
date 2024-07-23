<template>
    <div class="text-white">
        <div class="flex flex-row">
            <h1 class=" font-bold text-5xl">Dainius Juška</h1>
            <button class=" bg-secondary transition-colors duration-200 ease-in-out rounded-full ml-2 hover:bg-tertiary">
                <Icon name="mdi:github" class="transition-colors duration-200 ease-in-out mx-2 mt-2 bg-white  hover:bg-cyan-300" size="38" />
            </button>
        </div>
        <p class="text-3xl">A third year computer science student and a full-stack developer from Lithuania with a strong focus on back-end development. </p>
        <div class="flex flex-col items-center">
            <h1 class="mt-2 text-4xl" >My skills</h1>
            <HeroMarqueeSkills class="mt-2"/>
            <hr class="border-none border-t border-black w-96">
            <div class=" my-6 h-96 border-l-2 border-fourth"></div>
        </div>
        <div style="height:1000px;">
        </div>
    </div>
</template>

<script setup>

</script>
