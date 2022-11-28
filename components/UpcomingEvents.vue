<template>
    <div class="flex flex-col bg-indigo-100 max-w-screen-xl justify-between mx-auto px-2 w-full">
        <h1 class="p-6 pl-0 font-bold text-3xl">
            Upcoming Events
        </h1>
        <div class="flex justify-evenly flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0">
            <div v-for="prayer in pray" class="grow w-full md:w-2/3 lg:w-full self-center">
                <EventCard :pray="prayer"/>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {Pray} from "~/types/pray";

const client = useSupabaseClient()
const {data: pray} = await useAsyncData('pray', async () => {
    const { data } = await client.from<Pray>('pray')
        .select()
        .gte('date',(new Date()).toISOString())
        .order('date', {ascending: true})
        .limit(3)
    return data
})
</script>

<style scoped>

</style>
