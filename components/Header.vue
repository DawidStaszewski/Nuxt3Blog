<script setup lang="ts">

</script>

<template>
    <header>
        <div>
            <NuxtLink to=""><img src="~/assets/img/image (42).png" width="200rem" height="200rem" alt=""></NuxtLink>
        </div>
        <div>
            <NuxtLink to="/">Blog</NuxtLink>
        </div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/test">Test</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/Account/profile">Profile</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>

            </ul>
        </nav>

    </header>

</template>



<style scoped>
header {
    min-height: 200px;
    background: #77c98b;
}
</style>