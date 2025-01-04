<template>
    <div>
        <h2>My Posts</h2>
        <form @submit.prevent="createPost">
            <div>
                <label for="title">Title</label>
                <input type="text" v-model="title" required />
            </div>
            <div>
                <label for="body">Body</label>
                <textarea v-model="body" required></textarea>
            </div>
            <button type="submit">Create Post</button>
        </form>

        <div v-if="posts.length">
            <h3>Existing Posts</h3>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h4>{{ post.title }}</h4>
                    <p>{{ post.body }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const title = ref('');
const body = ref('');
const posts = ref([]);

const createPost = async () => {
    try {
        const response = await $fetch('http://127.0.0.1:8000/api/add-post', {
            method: 'POST',
            body: JSON.stringify({
                title: title.value,
                body: body.value,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        title.value = '';
        body.value = '';
        fetchPosts(); // Refresh the list of posts after creating a new one
    } catch (error) {
        console.error('Failed to create post', error);
        alert('Failed to create post');
    }
};

const fetchPosts = async () => {
    try {
        const response = await $fetch('http://127.0.0.1:8000/api/posts', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        posts.value = response;
    } catch (error) {
        console.error('Failed to fetch posts', error);
    }
};

onMounted(() => {
    fetchPosts();
});
</script>
