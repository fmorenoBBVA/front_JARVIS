<template>
    <footer class="jarvis-chat__footer">
        <div class="jarvis-chat__input">
            <form >
                <input type="text" placeholder="Mensaje" v-model="transcript" @keypress="preventEnter" @keypress.enter="sendMessage"/>
                <Button class="jarvis-chat__icon" @click="callRecognizing(true)" v-if="!isRecognizing">
                    <img src="@/assets/jarvis/microphone.svg" alt="micro" />
                </Button>
                <Button v-else @click="callRecognizing(true)" class="jarvis-chat__icon">
                    <img src="@/assets/jarvis/loading.gif" alt="loading" />
                </Button>
            </form>
        </div>
    </footer>
</template>

<script>
import Button from '../atoms/Button.vue'
export default {
    name: 'ChatFooter',
    components: {
        Button
    },
    data() {
        return {
            recognition: null,
            transcript: '',
            isRecognizing: false
        }
    },
    emits: ['send-message'],
    methods: {
        callRecognizing(value) {
            if (value && this.recognition && !this.isRecognizing) {
                this.transcript = '';
                this.isRecognizing = true;
                this.recognition.start();
            } else {
                this.isRecognizing = false;
                this.recognition.stop();
            }
        },
        preventEnter(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        },
        sendMessage() {
            if (this.transcript) {
                this.$emit('send-message', this.transcript.trim());
                this.transcript = '';
            }
        }
    },
    mounted() {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'es-ES'; // Configura el idioma a español

            this.recognition.onresult = (event) => {
                this.transcript = event.results[0][0].transcript;
            };

            this.recognition.onerror = (event) => {
                console.error(event);
            };

            this.recognition.onend = () => {
                this.isRecognizing = false;
            };
        } else {
                console.warn('webkitSpeechRecognition no está disponible en este navegador.');
        }
    }
}
</script>

<style lang="scss">
.jarvis-chat__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    right: 0;
    left: 0;
    padding: 10px;
    font-size: 15px;
    .jarvis-chat__input {
        width: 100%;
        position: relative;
        input {
            color: #062954;
            width: 100%;
            padding: 10px;
            border: 1px solid #062954;
            border-radius: 20px;
            outline: none;
            padding-right: 35px;

            &::placeholder {
                color: #062954;
                font-weight: bold;
                opacity: 0.5;
            }
        }
        .jarvis-chat__icon {
            margin-left: 10px;
            position: absolute;
            right: 10px;
            top: 11px;

            img {
                height: 20px;
                aspect-ratio: 1/1;
            }
        }
    }
}
</style>