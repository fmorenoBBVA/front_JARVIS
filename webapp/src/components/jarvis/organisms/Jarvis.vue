<template>
  <section>
    <jarvis-button @show-chat="changeChat(true)" :visible="!chatVisible" />
    <chat :visible="chatVisible" @close="changeChat(false)"/>
  </section>
</template>

<script>
import JarvisButton from '@/components/jarvis/molecules/JarvisButton.vue'
import Chat from '@/components/jarvis/organisms/Chat.vue'
export default {
    name: 'Jarvis',
    components: {
        JarvisButton,
        Chat
    },
    data() {
        return {
            chatVisible: false,
        };
    },
    methods: {
        changeChat(value) {
            this.chatVisible = value;
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
* {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
}

</style>