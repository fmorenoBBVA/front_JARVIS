<template>
    <transition name="chat-fade">
        <section class="jarvis-chat" :class="size" v-if="visible">
            <chat-header :title="title" :size="size" @close="handleClose" @redimension="handleRedimension" @refresh="handleRefresh" />
            <chat-body :size="size" :messages="messages" @send-suggestion="handleMessage" />
            <chat-footer @send-message="handleMessage" />
        </section>
    </transition>
</template>

<script>
import ChatHeader from '../molecules/ChatHeader.vue'
import ChatBody from '../molecules/ChatBody.vue'
import ChatFooter from '../molecules/ChatFooter.vue'
export default {
    name: 'Chat',
    components: {
        ChatHeader,
        ChatBody,
        ChatFooter
    },
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
           title: 'JARVIS',
           size: 'small',
           messages: []
        }
    },
    emits: ['close'],
    methods: {
        handleClose() {
            this.$emit('close');
        },
        handleRedimension() {
            this.size = this.size === 'small' ? 'big' : 'small';
        },
        handleRefresh() {
            this.messages = [];
        },
        handleMessage(message) {
            this.messages.push({ text: message, isUser: true });
            this.callResponse(message);
        },
        callResponse(message) {

            setTimeout(() => {
                this.messages.push({ text: 'Hola, soy Jarvis', isUser: false });
            }, 1000);
        }
    }
}   
</script>

<style lang="scss">
.chat-fade-enter-active, .chat-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.chat-fade-enter, .chat-fade-leave-to {
  opacity: 0;
}
.jarvis-chat {
    position: fixed;
    bottom: 15px;
    right: 5px;
    width: 300px;
    z-index: 1001;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.3);
    padding: 10px 22px;
    margin: 0 5px;
    max-width: 300px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;

    &.big {
        height: 70vh;
        width: 600px;
        max-width: 600px;
    }
}
</style>