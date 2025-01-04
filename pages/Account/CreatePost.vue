<template>
    <div class="create-post">
        <h1>Create a New Post</h1>
        <form @submit.prevent="submitPost">
            <div>
                <label for="title">Title:</label>
                <input v-model="form.title" type="text" id="title" required />
            </div>
            <div>
                <label for="body">Body:</label>
                <textarea v-model="form.body" id="body" required></textarea>
            </div>
            <button type="submit">Submit</button>
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
.create-post {
    max-width: 600px;
    margin: 0 auto;
}
</style>
