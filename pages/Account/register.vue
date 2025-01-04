<template>
    <div class="register">
        <h1>Register</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input v-model="form.name" type="text" id="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input v-model="form.email" type="email" id="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input v-model="form.password" type="password" id="password" required />
            </div>
            <div>
                <label for="password_confirmation">Confirm Password:</label>
                <input v-model="form.password_confirmation" type="password" id="password_confirmation" required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
        };
    },
    methods: {
        async submitForm() {
            if (this.form.password !== this.form.password_confirmation) {
                alert("Passwords do not match.");
                return;
            }

            try {
                const response = await fetch("http://127.0.0.1:8000/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.form),
                });

                if (!response.ok) {
                    throw new Error("Error registering user");
                }

                const data = await response.json();
                console.log("User registered:", data);
                this.$router.push("/Account/login"); // Przekierowanie na stronę logowania po rejestracji
            } catch (error) {
                console.error("Error registering user:", error);
            }
        },
    },
};
</script>

<style scoped>
.register {
    max-width: 600px;
    margin: 0 auto;
}
</style>
