<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
    try {
        const response = await $fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        localStorage.setItem('token', response.token);
        router.push('/Account/dashboard'); // Redirect to dashboard after login
    } catch (error) {
        console.error('Login failed', error);
        alert('Login failed');
    }
};
</script>
