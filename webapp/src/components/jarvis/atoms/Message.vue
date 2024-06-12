<template>
    <div class="jarvis-message" :class="{ 'jarvis-message--user': message.isUser, 'jarvis-message--notuser': !message.isUser, 'big': !small }">
        <div class="jarvis-message-item" >
            <jarvis-profile v-if="!message.isUser && !small" />
            <div class="jarvis-message-text">
                <p v-html="message.text" />
                <ul v-if="message.links?.length > 0" class="item-list">
                    <li v-for="(link, index) in message.links" :key="index">
                        <a :href="link.url" target="_blank">{{ link.text }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="message.buttons?.length > 0" class="jarvis-message-buttons">
            <Button v-for="(button, index) in message.buttons" :key="index" @click="sendMessage(button.value)" class="item-button">
                {{ button.text }}
            </Button>
        </div>
        <div v-if="message.image" class="jarvis-message-iamge">
            <img :src="message.image" alt="chat image" />
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
import JarvisProfile from './JarvisProfile.vue';
export default {
    name: 'Message',
    components: {
        Button,
        JarvisProfile
    },
    emits: ['send-message'],
    props: {
        message: {
            type: Object,
            required: true
        },
        small: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        sendMessage(value) {
            this.$emit('send-message', value);
        }
    }
}
</script>

<style lang="scss">
.jarvis-message {
    margin: 5px 10px;
    display: flex;
    flex-direction: column;

    a {
        color: #062954;
        font-weight: bold;
        text-decoration: underline;
    }
    &--notuser {
        .jarvis-message-text {
            background-color: #DFDFDF;
            &.big {
                margin-left: 5px;
            }
        }

    }
    &--user {
        justify-content: flex-end;
        flex-direction: initial;
        .jarvis-message-text {
            background-color: #C8E8FF;

            p {
                margin: 0;
            }
        }
    }
    .jarvis-message-item {
        width: fit-content;
        font-family: Inter;
        max-width: 85%;
        display: flex;
        gap: 5px;
        
        .jarvis-message-text {
            padding: 5px 10px;
            border-radius: 10px;
            font-weight: bold;
            word-wrap: break-word;
            color: #062954;
            
            p {
                margin: 0;
            }
            .item-list {
                margin: 0;
                li {
                    margin: 5px 0;
                    a {
                        color: #062954;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                }
            }
        }

    }
    .jarvis-message-buttons {
        display: flex;
        gap: 5px;
        margin-top: 5px;
        .item-button {
            background-color: #f1f1f1;
            color: #062954;
            border: none;
            border-radius: 10px;
            padding: 5px 10px;
            cursor: pointer;
            &:hover, &:focus, &:active {
                color: #f1f1f1;
                background-color: #062954;
            }
        }
    }
    .jarvis-message-iamge {
        margin-top: 5px;
        position: relative;
        img {
            max-width: 90%;
            max-height: 250px;
            width: auto;
            height: auto;
        }
    }
}

</style>