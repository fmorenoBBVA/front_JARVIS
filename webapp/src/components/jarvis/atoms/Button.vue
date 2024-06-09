<template>
    <button class="button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    emits: ['click'],
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss">
    button {
        background-color: initial;
        border: none;
        padding: 0;
        cursor: pointer;
    }
</style>