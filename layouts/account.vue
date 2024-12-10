<template>
    <div class="Main">
        <Header />
        <div class="Content">
            <slot />
        </div>

        <nav>
            <ul>
                <li><a href="">Update Profile</a></li>
                <li><a href="">View Profile</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Main {

    background: #c97777;
}
</style>
