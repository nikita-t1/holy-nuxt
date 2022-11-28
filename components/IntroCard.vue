<template>
    <div class="flex bg-indigo-100 max-w-screen-xl justify-between mx-auto py-10 px-10 w-full">

        <div class="video-wrapper">
            <video autoplay loop muted playsinline>
                <source src="assets/software-developer-working-on-code-screen-close-up.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <!-- This will be positioned on top of our video background -->
            <div class="header space-y-4">
                <span class="bg-slate-50 text-blue-800 text-xs px-2.5 py-0.5 rounded">Badge</span>
                <h1>Introduction ...</h1>
                <div class="space-x-4">
                    <button class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-5 py-2.5" type="button">
                        <NuxtLink class="font-bold" to="/locked">Primary</NuxtLink>
                    </button>
                    <button class="text-white outline-blue-500 outline outline-2 hover:bg-blue-500 rounded-md text-sm px-5 py-2" type="button">
                        <NuxtLink class="font-bold" to="/locked">Secondary</NuxtLink>
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

h1 {
    @apply font-bold text-xl
}

video {
    @apply object-cover absolute h-full w-full
}

.header {
    @apply relative text-white shadow m-6
}

.video-wrapper {
    @apply relative overflow-hidden flex items-end aspect-video h-[28rem] w-full rounded-2xl
}

/*.video-wrapper {*/
/*    width: 800px;*/
/*    height: 200px;*/
/*}*/


</style>
