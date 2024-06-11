<template>
    <section class="jarvis-chat__body" :class="{'small': small, 'loading': loading}">
        <div class="conversation" v-if="messages.length > 0" >
            <Message v-for="(message, index) in messages" :key="index" :message="message" :small="small" @send-message="sendMessage" />
        </div>
        <div class="welcome"  v-else>
            <div class="hi">
                <jarvis-profile v-if="!small"/>
                <p>¡Hola, soy Jarvis!</p>
                <p>¿En qué puedo ayudarte?</p>
            </div>
            <div class="suggestions">
                <div class="suggestion" v-for="(item, index) in filterSuggestions" :key="index" @click="sendSuggestion(item.text)">
                    <img :src="item.icon" alt="Jarvis" class="icon" />
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Trophy from '@/assets/jarvis/trophy.svg'
import Code from '@/assets/jarvis/code.svg'
import School from '@/assets/jarvis/school.svg'
import Lightbulb from '@/assets/jarvis/lightbulb.svg'
import Message from '../atoms/Message.vue'
import JarvisProfile from '../atoms/JarvisProfile.vue'

export default {
    name: 'ChatBody',
    components: {
        Message,
        JarvisProfile
    },
    data() {
        return {
            suggestions: [
                { icon: Trophy, text: 'Seguir mejorando' },
                { icon: Code, text: 'Ayuda sobre código' },
                { icon: School, text: 'Nuevo aprendizaje' },
                { icon: Lightbulb, text: 'Qué camino seguir' },
            ]
        }
    },
    emits: ['send-suggestion', 'send-message'],
    props: {
        size: {
            type: String,
            required: true
        },
        messages: {
            type: Array,
            required: false
        },
        isMobile: {
            type: Boolean,
            required: false
        },
        loading: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        filterSuggestions() {
            const randomSuggestions = this.suggestions.sort(() => Math.random() - 0.5);
            return this.small ? randomSuggestions.slice(0, 2) : randomSuggestions;
        },
        small() {
            return this.size === 'small' || this.isMobile;
        }
    },
    methods: {
        sendSuggestion(message) {
            this.$emit('send-suggestion', message);
        },
        sendMessage(message) {
            console.log(message)
            this.$emit('send-message', message);
        },
        scrollToBottom() {
            const conversation = this.$refs.conversation;
            if (conversation) {
                conversation.scrollTop = conversation.scrollHeight;
            }
        }
    },
    updated() {
        this.scrollToBottom();
    }
}
</script>

<style lang="scss">
.jarvis-chat__body {
    position: absolute;
    z-index: -1;
    top: 46px;
    right: 0;
    bottom: 50px;
    left: 0;
    display: flex;
    flex-direction: column-reverse;
    font-size: 15px;

    &.loading {
        bottom: 100px;
    }
    .conversation {
        display: flex;
        flex-direction: column-reverse;
        overflow-y: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }

    }
    &.small {
        top: 66px;
    }
    .welcome {
        height: 100%;
        .hi {
            text-align: center;
            margin-top: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            p {
                margin: 0;
                color: #062954;
            }
        }
        .suggestions {
            display: flex;
            justify-content: space-around;
            padding: 10px;
            gap: 10px;
            flex-direction: row;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            .suggestion {
                display: flex;
                align-items: center;
                gap: 10px;
                width: 50%;
                padding: 10px;
                border-radius: 10px;
                min-height: 90px;
                min-width: 130px;
                overflow-wrap: break-word;
                white-space: normal;
                background-color: #f0f0f0;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover {
                    background-color: #e0e0e0;
                }
                .icon {
                    width: 15px;
                    aspect-ratio: 1/1;
                }
                
                p {
                    margin: 0;
                    word-break: break-word; 
                }
            }
        }
    }
}
</style>