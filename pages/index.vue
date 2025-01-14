<template>
    <main class="text-3xl flex flex-col items-center w-1/2 mx-auto">
        <h1 class="text-4xl font-bold mb-6">Ostatnie Posty</h1>
        <section class="w-full space-y-6">
            <!-- Wyświetlanie postów -->
            <article v-for="post in posts" :key="post.id" class="p-4 bg-white shadow-md rounded-md">
                <h2 class="text-2xl font-semibold text-gray-800">{{ post.title }}</h2>
                <p class="text-gray-600 mt-2">{{ post.body }}</p>
            </article>

            <!-- Komunikat, gdy brak postów -->
            <p v-if="!posts.length" class="text-lg text-gray-500 text-center">Brak postów do wyświetlenia.</p>
        </section>
    </main>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'PostList',
    setup() {
        const posts = ref([]);

        const fetchPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/getAllPosts');

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const allPosts = await response.json();

                // Ograniczenie liczby wyświetlanych postów do 5
                posts.value = allPosts.slice(0, 5);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        onMounted(() => {
            fetchPosts();
        });

        return {
            posts,
        };
    },
};
</script>

<style scoped>
main {
    padding: 1.5rem;
    background-color: #f9fafb;
    border-radius: 8px;
}
</style>
