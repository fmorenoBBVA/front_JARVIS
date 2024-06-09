<template>
    <transition name="button-fade">
        <section class="jarvis-button" v-if="visible">
            <div class="dialog-container" @click="hideDialog">
                <Dialog v-show="showDialog && randomMessage" :text="randomMessage" />
            </div>
            <Button @click="handleClick" @mouseover="handleHover">
                <img src="@/assets/jarvis/bot.png" alt="Jarvis" />
            </Button>
        </section>
    </transition>
</template>

<script>
import Button from '@/components/jarvis/atoms/Button.vue'
import Dialog from '@/components/jarvis/atoms/Dialog.vue'
export default {
    name: 'JarvisButton',
    components: {
        Button,
        Dialog
    },
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    },
    emits: ['showChat'],
    data() {
        return {
            showDialog: false,
            messages: [
                "¿Te puedo ayuda?",
                "¿Y si usamos la IA?",
                "¿Seguro que no necesitas ayuda?",
                "¿Quieres que te ayude?",
                "¿Necesitas ayuda?",
                "¿Probamos con la IA?"              
            ],
            randomMessage: ''
        }
    },
    created() {
        this.updateMessage();
    },
    methods: {
        hideDialog() {
            this.showDialog = false;
            setTimeout(() => {
                this.randomMessage = '';
            }, 100);
        },
        handleClick() {
            this.hideDialog();
            this.$emit('showChat');
        },
        handleHover() {
            this.selectRandomMessage();
        },
        updateMessage() {
            const today = new Date().toDateString();
            let visitsPerDay = localStorage.getItem('visitsPerDay');
            if (!visitsPerDay || JSON.parse(visitsPerDay).date !== today) {
                visitsPerDay = { date: today, count: 0 };
            } else {
                visitsPerDay = JSON.parse(visitsPerDay);
            }
            visitsPerDay.count++;
            if (this.randomMessage) {
                this.hideDialog();
            }
            // if count is more than 0 and its a multiple of 3, show a random message
            if (visitsPerDay.count > 0 && visitsPerDay.count % 3 === 0) {
                this.selectRandomMessage();
            }
            localStorage.setItem('visitsPerDay', JSON.stringify(visitsPerDay));
        },
        selectRandomMessage() {
            this.showDialog = true;
            if (!this.randomMessage) {
                const index = Math.floor(Math.random() * this.messages.length);
                this.randomMessage = this.messages[index];
            }
        }
    }
}
</script>

<style lang="scss">
.button-fade-enter-active, .button-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.button-fade-enter, .button-fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.jarvis-button {
    position: fixed;
    top: 35%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    right: 0;

    .dialog-container {
        width: 100%; 
        min-height: 100px; 
        display: flex;
        align-items: flex-end;
    }

    button {
        transition: all 0.7s;
        position: relative;
        transform: rotate(349deg);
        right: -50px;
        img {
            height: 70px;
        }
        &:hover {
            transform: rotate(360deg);
            right: 0;
        }
    }
}
</style>