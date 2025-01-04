<template>
    <div class="min-h-screen flex flex-col bg-purple-500 px-20">
        <Header />
        <div class="text-3xl font-bold underline">GDZIE JA JESTEM?=default.vue</div>

        <main class="flex-1 flex  justify-center text-center">
            <slot />
        </main>
        <Footer />
    </div>
</template>





<style scoped>
/* Możesz dodać dodatkowe style, jeśli będą potrzebne */
</style>
<!-- <p v-if="user">Zalogowany użytkownik: {{ user.name }} (ID: {{ user.id }})</p>

<p v-else>Nie jesteś zalogowany</p>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user; // Pobieramy dane użytkownika ze stanu
        },
    },
    async created() {
        await this.$store.dispatch('fetchUser'); // Ładujemy dane użytkownika po załadowaniu strony
    },
};
</script> -->