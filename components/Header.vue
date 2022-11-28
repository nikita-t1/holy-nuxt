<template>
    <div class="flex bg-indigo-100 max-w-screen-xl justify-between mx-auto h-16 px-2 w-full">
        <div class="self-center font-semibold">(Insert Title here)</div>
        <div v-if="user" class="self-center">
            <button @click="logout" class="outline outline-2 outline-amber-400 rounded-xl py-1 px-4">
                {{user.email}}
            </button>
        </div>
        <div class="self-center">
            <div class="hidden overflow-hidden grow md:block">
                <div
                    class="flex flex-col gap-5 mb-5 md:mb-0 mt-5 md:flex-row md:items-center md:justify-end sm:mt-0 md:pl-5">
                    <NuxtLink class="navElement" to="/">Home</NuxtLink>
                    <NuxtLink class="navElement" to="/about">About</NuxtLink>
                        <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-5 py-2.5">
                            <NuxtLink class="font-bold" to="/locked">{{lockStatus}}</NuxtLink>
                        </button>

                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

const router = useRouter()
const client = useSupabaseClient()
const user = useSupabaseUser()
const lockStatus = ref("Locked")

watchEffect(() => {
    if (user.value) {
        lockStatus.value = "Unlocked"
    } else {
        lockStatus.value = "Locked"
    }
})
</script>

<style scoped>

.navElement:not([aria-current="page"]) {
    @apply font-bold block py-2 pr-4 pl-3 dark:text-gray-400 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;
}

.navElement[aria-current="page"] {
    @apply font-bold block py-2 pr-4 pl-3 text-white rounded md:bg-transparent text-blue-500 md:p-0 dark:text-white
}
</style>
