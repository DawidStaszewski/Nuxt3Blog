<template>
    <header class="flex items-center justify-between bg-gray-400 shadow-md px-6 h-20 w-full">
        <nav class="flex items-center justify-between flex-grow">
            <NuxtLink to="/" class="mr-4 flex-shrink-0">
                <img src="@/assets/img/image (42).png" alt="Logo" class="custom-class w-[30px] h-[30px]" />
            </NuxtLink>

            <NuxtLink to="/" class="text-white font-medium hover:bg-white hover:text-gray-500 px-4 py-2 rounded">
                Home
            </NuxtLink>
            <NuxtLink to="/Account/Dashboard"
                class="text-white font-medium hover:bg-white hover:text-gray-500 px-4 py-2 rounded">
                Dashboard
            </NuxtLink>
            <NuxtLink to="/test" class="text-white font-medium hover:bg-white hover:text-gray-500 px-4 py-2 rounded">
                Test
            </NuxtLink>

            <!-- Profile link -->
            <NuxtLink v-if="isLoggedIn" to="/Account/profile"
                class="text-white font-medium hover:bg-white hover:text-gray-500 px-4 py-2 rounded">
                Profile
            </NuxtLink>

            <!-- Register and Login -->
            <NuxtLink v-if="!isLoggedIn" to="/Account/register"
                class="text-white font-medium hover:bg-white hover:text-gray-500 px-4 py-2 rounded">
                Register
            </NuxtLink>
            <NuxtLink v-if="!isLoggedIn" to="/Account/login"
                class="text-white font-medium hover:bg-white hover:text-gray-500 px-4 py-2 rounded">
                Login
            </NuxtLink>

            <!-- Logout -->
            <button v-if="isLoggedIn"
                class="bg-red-500 text-white font-bold px-6 py-2 rounded hover:bg-red-700 transition flex-shrink-0"
                @click="logout">
                Logout
            </button>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { navigateTo } from 'nuxt/app';

const isLoggedIn = ref(false);

onMounted(() => {
    if (process.client) {
        const token = localStorage.getItem('jwtToken');
        isLoggedIn.value = !!token;
    }
});

watchEffect(() => {
    if (process.client) {
        const token = localStorage.getItem('jwtToken');
        isLoggedIn.value = !!token;
    }
});

const logout = () => {
    if (process.client) {
        localStorage.removeItem('jwtToken');
        isLoggedIn.value = false;
        navigateTo('/Account/login');
    }
};
</script>

<style scoped>
header {
    min-height: 30px;
    background: #1f1f1f;
}

.custom-class {
    max-width: 30px;
    max-height: 30px;
}
</style>
