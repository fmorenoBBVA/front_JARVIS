<template>
    <div class="jarvis-message">
        <jarvis-profile v-if="!message.isUser && size === 'big'" />
        <div class="jarvis-message-item" :class="{ 'jarvis-message-item--user': message.isUser, 'jarvis-message-item--notuser': !message.isUser, 'big': size === 'big' }">
            <p>{{ message.text }}</p>
        </div>
    </div>
</template>

<script>
import JarvisProfile from './JarvisProfile.vue'
export default {
  components: { JarvisProfile },
    name: 'Message',
    props: {
        message: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.jarvis-message {
    margin: 5px 10px;
    display: flex;
    align-items: center;
    .jarvis-message-item {
        background-color: #DFDFDF;
        padding: 10px;
        border-radius: 10px;
        font-weight: bold;
        color: #062954;
        max-width: 70%;
        width: fit-content;
        word-wrap: break-word;
        font-family: Inter;
        p {
            margin: 0;
        }
        &--notuser {
            &.big {
                margin-left: 5px;
            }
        }
        &--user {
            background-color: #C8E8FF;
            margin-left: auto;
            p {
                text-align: right;
            }
        }

    }
}

</style>