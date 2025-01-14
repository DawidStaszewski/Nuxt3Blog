<template>
    <div class="create-post max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <h1 class="text-2xl font-bold text-gray-800 mb-6">Create a New Post</h1>
        <form @submit.prevent="submitPost" class="space-y-6">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title:</label>
                <input v-model="form.title" type="text" id="title"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the post title" required />
            </div>
            <div>
                <label for="body" class="block text-sm font-medium text-gray-700 mb-2">Body:</label>
                <textarea v-model="form.body" id="body" rows="6"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your post here..." required></textarea>
            </div>
            <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                title: "",
                body: "",
            },
        };
    },
    methods: {
        async submitPost() {
            try {
                const token = localStorage.getItem("token"); // Pobierz token JWT
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/add-post",
                    this.form,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("Post created:", response.data);
                this.$router.push("/"); // Przekierowanie po sukcesie
            } catch (error) {
                console.error("Error creating post:", error);
            }
        },
    },
};
</script>

<style scoped>
/* Nie ma potrzeby dodawania stylów, wszystko jest w Tailwind CSS */
</style>
