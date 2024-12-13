<template>
    <div class="min-h-screen flex flex-col bg-purple-500 px-20">
        <Header />
        <!-- <div class="text-3xl font-bold underline">GDZIE JA JESTEM?=default.vue</div> -->
        <main class="flex-1 flex  justify-center text-center">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Możesz dodać dodatkowe style, jeśli będą potrzebne */
</style>
