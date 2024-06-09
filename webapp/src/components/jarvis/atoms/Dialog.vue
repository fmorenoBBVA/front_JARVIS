<template>
    <transition name="fade">
        <div class="dialog">
        {{ text }}
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.dialog {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    padding: 10px 22px;
    margin: 0 5px;
    max-width: 230px;
}
</style>