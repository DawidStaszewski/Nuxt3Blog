<script setup lang="ts">
function useFetch(arg0: string): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error("Function not implemented.");
}
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const post = ref(null);

onMounted(async () => {
    try {
        const { data } = await useFetch(`/api/posts/${route.params.id}`);
        post.value = data.value;
    } catch (error) {
        console.error("Błąd ładowania posta:", error);
    }
});
</script>

<template>
    <div>
        <h1>Post ID: {{ route.params.id }}</h1>
        <div v-if="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
        <div v-else>
            <p>Ładowanie posta...</p>
        </div>
    </div>
</template>

<style scoped></style>
