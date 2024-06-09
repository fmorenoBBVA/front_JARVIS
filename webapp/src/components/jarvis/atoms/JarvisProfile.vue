<template>
        <div class="jarvis-icon">
            <img src="@/assets/jarvis/bot.png" alt="jarvis" />
        </div>
</template>

<script>
export default {
    name: 'JarvisProfile',
}
</script>

<style lang="scss">
    .jarvis-icon {
        background-color: white;
        border-radius: 50%;
        height: 47px;
        display: flex;
        aspect-ratio: 1 / 1;
        align-items: center;
        justify-content: center;
        border: 1px solid #062954;
        transition: all 0.3s ease-in-out;
        img {
            width: 50px;
        }
    }
</style>