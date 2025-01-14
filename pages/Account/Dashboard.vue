<template>
    <div class="w-full max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-8">
        <!-- Nagłówek -->
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">My Posts</h2>

        <!-- Formularz tworzenia postów -->
        <form @submit.prevent="createPost" class="space-y-6 w-full">
            <div class="w-full">
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" id="title" v-model="title" required
                    class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter post title" />
            </div>
            <div class="w-full">
                <label for="body" class="block text-sm font-medium text-gray-700">Body</label>
                <textarea id="body" v-model="body" required rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your post..."></textarea>
            </div>
            <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Create Post
            </button>
        </form>

        <!-- Lista postów -->
        <div v-if="posts.length" class="mt-12">
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">Existing Posts</h3>
            <ul class="space-y-6">
                <li v-for="post in posts" :key="post.id"
                    class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 class="text-xl font-bold text-gray-800">{{ post.title }}</h4>
                    <p class="text-gray-600 mt-2">{{ post.body }}</p>
                </li>
            </ul>
        </div>
        <p v-else class="text-gray-500 text-center mt-8">No posts found. Create your first post!</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const title = ref(''); // Pole dla tytułu nowego posta
const body = ref(''); // Pole dla treści nowego posta
const posts = ref([]); // Lista postów

// Tworzenie nowego posta
const createPost = async () => {
    try {
        const token = localStorage.getItem('jwtToken'); // Pobierz token JWT z localStorage
        if (!token) {
            alert('You must be logged in to create a post.');
            return;
        }

        const response = await $fetch('http://127.0.0.1:8000/api/add-post', {
            method: 'POST',
            body: { title: title.value, body: body.value }, // Automatyczne mapowanie JSON w Nuxt 3
            headers: {
                'Authorization': `Bearer ${token}`, // Przekazanie tokenu JWT
            },
        });

        // Reset pól po utworzeniu posta
        title.value = '';
        body.value = '';
        alert('Post created successfully!');
        fetchPosts(); // Odśwież listę postów
    } catch (error) {
        console.error('Failed to create post', error);
        alert('Failed to create post. Please try again.');
    }
};

// Pobieranie postów użytkownika
const fetchPosts = async () => {
    try {
        const token = localStorage.getItem('jwtToken'); // Pobierz token JWT z localStorage
        if (!token) {
            alert('You must be logged in to view posts.');
            return;
        }

        const response = await $fetch('http://127.0.0.1:8000/api/user/posts', {
            headers: {
                'Authorization': `Bearer ${token}`, // Przekazanie tokenu JWT
            },
        });

        posts.value = response; // Zapisz posty w stanie
    } catch (error) {
        console.error('Failed to fetch user posts', error);
        alert('Failed to fetch posts. Please try again.');
    }
};

// Pobranie postów przy załadowaniu komponentu
onMounted(() => {
    fetchPosts();
});
</script>

<style scoped>
/* Stylizacja formularza i postów */
</style>
