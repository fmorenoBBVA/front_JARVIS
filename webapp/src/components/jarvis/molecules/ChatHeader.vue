<template>
    <div class="chat-header" :class="size">
        <Button @click="handleRedimension" class="redimension">
            <img src="@/assets/jarvis/open_in_full.svg" alt="close" v-if="isSmall" />
            <img src="@/assets/jarvis/close_fullscreen.svg" alt="close" v-else />
        </Button>
        <Button @click="handleRefresh" class="refresh">
            <img src="@/assets/jarvis/refresh.svg" alt="refresh" />
        </Button>
        <Button @click="handleClose" class="close">
            <img src="@/assets/jarvis/close.svg" alt="close" />
        </Button>
        <h1>{{ title }}</h1>
        <jarvis-profile v-if="isSmall" />
    </div>
</template>

<script>
import Button from '../atoms/Button.vue'
import JarvisProfile from '../atoms/JarvisProfile.vue'
export default {
    name: 'ChatHeader',
    components: {
        Button,
        JarvisProfile
    },
    props: {
        title: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        }
    },
    emits: ['close', 'redimension', 'refresh'],
    computed: {
        isSmall() {
            return this.size === 'small';
        }
    },
    methods: {
        handleClose() {
            this.$emit('close');
        },
        handleRedimension() {
            this.$emit('redimension');
        },
        handleRefresh() {
            this.$emit('refresh');
        }
    }

}
</script>

<style lang="scss">
.chat-header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #062954;
    flex-direction: column;

    .close, .redimension, .refresh {
        position: absolute;
        height: 15px;
        aspect-ratio: 1/1;
        img {
            aspect-ratio: 1/1;
            width: 15px;
        }
    }
    .close {
        right: 10px;
        top: 10px;
    }
    .redimension {
        left: 10px;
        top: 10px;
    }
    .refresh {
        left: 30px;
        top: 10px;
    }
    h1 {
        color: white;
        font-size: 14px;
        margin: 0;
    }
    &.small {
        h1 {
            padding: 10px 0 30px 0;

        }
    }

    &.big {
        h1 {
            padding: 10px 0 10px 0;
        }
    }
    .jarvis-icon {
        position: absolute;
        bottom: -20px;
    }
}
</style>