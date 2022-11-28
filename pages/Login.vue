<template>
    <div v-if="!showWaitForMailInfo" class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <h2>Authentication</h2>
            <form class="space-y-6" @submit.prevent="">
                <input name="remember" type="hidden" value="true">
                <div class="space-y-4">
                    <div class="text-start">
                        <label id="email-label" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
                        <input id="email" v-model="email"
                               placeholder="you@site.com"
                               required type="email">
                    </div>
                    <div class="text-start">
                        <label id="password-label"
                               class="block text-sm font-medium mb-2 dark:text-white">Password</label>
                        <input id="password" v-model="password"
                               placeholder="Password"
                               required type="password">
                    </div>
                </div>
                <div class="flex flex-row">
                    <button type="submit" id="btn-login" class=" mx-3" @click="login">
                        Login
                    </button>
                    <button type="submit" id="btn-register" class="mx-3" @click="register">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div v-else class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <h2>An E-Mail was send to your address to confirm your Sign Up</h2>
            <button type="submit" id="btn-resend-mail">
                Resend Email
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

import {Provider} from "@supabase/gotrue-js";

const email = ref("");
const password = ref("");
const showWaitForMailInfo = ref(false)


const user = useSupabaseUser()
const { auth } = useSupabaseClient()

watchEffect(() => {
    if (user.value) {
        navigateTo('/locked')
    }
})

function login(){
    auth.signIn({
        email: email.value,
        password: password.value
    })
}

async function register(){
    console.log("reg...")
    const {user, error} = await auth.signUp({
        email: email.value,
        password: password.value
    })
    console.error(error)
    console.log(user)
    showWaitForMailInfo.value = true
}

</script>


<style scoped>
h2 {
    @apply mt-6 text-center text-3xl font-bold tracking-tight dark:text-white text-gray-700
}

#email {
    @apply py-3 px-4 block w-full dark:text-white text-gray-700 bg-slate-100 border-gray-200 border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700
}

#email-label {
    @apply dark:text-white text-gray-700
}

#password {
    @apply py-3 px-4 block w-full dark:text-white text-gray-700 bg-slate-100 border-gray-200 border-2 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700
}

#password-label {
    @apply dark:text-white text-gray-700
}

#btn-resend-mail{
    @apply focus:outline-none bg-blue-100 relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
}

#btn-login {
    @apply relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
}
#btn-register {
    @apply relative flex w-full justify-center rounded-md border border-blue-500 py-2 px-4 text-sm font-medium text-black hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-white dark:text-white
}
</style>
