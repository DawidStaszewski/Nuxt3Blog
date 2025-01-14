<template>
    <div class="w-full min-h-screen flex flex-col bg-gray-500">
        <Header />

        <main class="flex-1 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="w-full text-3xl font-bold text-white text-center mb-6">
                default
            </div>
            <slot />
        </main>
    </div>
</template>

<style scoped></style>
