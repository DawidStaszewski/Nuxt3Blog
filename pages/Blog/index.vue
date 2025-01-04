<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);

onMounted(async () => {
    try {
        const { data } = await useFetch("/api/posts");
        posts.value = data.value;
    } catch (error) {
        console.error("Błąd ładowania postów:", error);
    }
});
</script>

<template>
    <div>
        <h1>Lista postów</h1>
        <div v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <NuxtLink :to="`/blog/${post.id}`">Czytaj więcej</NuxtLink>
        </div>
    </div>
</template>
