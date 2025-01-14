<template>
    <div class="w-full register max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>

        <!-- Formularz rejestracji -->
        <form @submit.prevent="submitForm" class="space-y-4 w-full">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input v-model="form.name" type="text" id="name" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name" />
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="form.email" type="email" id="email" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email" />
            </div>

            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input v-model="form.password" type="password" id="password" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password" />
            </div>

            <div>
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm
                    Password</label>
                <input v-model="form.password_confirmation" type="password" id="password_confirmation" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Confirm your password" />
            </div>

            <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Register
            </button>
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
