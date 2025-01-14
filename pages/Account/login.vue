<template>
    <div class="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">Login</h2>

        <form @submit.prevent="login" class="space-y-4">
            <!-- Email -->
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" v-model="email" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email" />
            </div>

            <!-- Password -->
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" v-model="password" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password" />
            </div>

            <!-- Submit Button -->
            <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Login
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { navigateTo } from 'nuxt/app';  // Używamy `navigateTo` do przekierowania w Nuxt 3

const email = ref('');
const password = ref('');

const login = async () => {
    try {
        const response = await $fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value,
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (response.token) {
            console.log('Token JWT:', response.token); // Debug
            localStorage.setItem('jwtToken', response.token);
            navigateTo('/Account/dashboard');
        } else {
            alert('Login failed: No token received');
        }
    } catch (error) {
        console.error('Login failed', error);

        if (error.response && error.response._data && error.response._data.message) {
            alert(`Login failed: ${error.response._data.message}`);
        } else {
            alert('Login failed: Unknown error');
        }
    }
};
</script>

<style scoped>
div {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

button {
    cursor: pointer;
}
</style>
