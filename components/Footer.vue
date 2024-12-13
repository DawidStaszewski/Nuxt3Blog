<script setup lang="ts">

</script>

<template>
    <header class="flex  ">
        <div>
            <NuxtLink to=""><img src="~/assets/img/image (42).png" width="200rem" height="200rem" alt=""></NuxtLink>
        </div>


        <div class="flex justify-evenly  w-full">
            <div>
                <NuxtLink to="/">Home</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/blog">Blog</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/test">Test</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/Account/profile">Profile</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/about">About</NuxtLink>
            </div>
        </div>



    </header>

</template>



<style scoped>
header {
    min-height: 200px;
    background: #77c98b;
}
</style>