<template>
    <div class=" max-w-screen-xl mx-auto text-center ">
        <p class="font-bold text-xl p-6 ">Unlocked</p>
    </div>
</template>

<script lang="ts" setup>
import { Pray } from '~/types/pray'

definePageMeta({
    middleware: 'auth'
})
const user = useSupabaseUser()
const client = useSupabaseClient()

const {data: pray} = await useAsyncData('pray', async () => {
    const { data } = await client.from<Pray>('pray').select()
    return data
})

</script>

<style scoped>

</style>
