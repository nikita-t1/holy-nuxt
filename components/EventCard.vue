<template>
    <div
        class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight ">
            {{formatDate(props.pray.date)}}
        </h5>
        <div class=" table">
            <p>Assembly on Site</p>
            <p v-if="props.pray.onSite">✅</p>
            <p v-else>❌</p>
        </div>
        <div class="table">
            <p>Livestream</p>
            <p v-if="props.pray.stream">✅</p>
            <p v-else>❌</p>
        </div>
        <div class="table">
            <span class="font-semibold">Opening: </span>
            <p>{{formatTime(props.pray.date)}}</p>
        </div>
        <div class="table ">
            <span class="font-semibold">Reaper: </span>
            <p>{{props.pray.reaper}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

import {Pray} from "~/types/pray";

const props = defineProps<{
    pray: Pray,
}>()

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}
function formatDate(dateString: Date) {
    const date = new Date(dateString)
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}

function formatTime(dateString: Date) {
    const date = new Date(dateString)
    return [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
    ].join(':');
}

</script>

<style scoped>

.table {
    @apply flex justify-between space-x-2
}


</style>
