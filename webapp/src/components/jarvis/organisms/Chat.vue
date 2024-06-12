<template>
    <transition name="chat-fade">
        <section class="jarvis-chat" :class="size" v-if="visible">
            <chat-header :title="title" :isMobile="isMobile" :size="size" @close="handleClose" @redimension="handleRedimension" @refresh="handleRefresh" />
            <chat-body :size="size" :isMobile="isMobile" :messages="messages" @send-suggestion="handleMessage" @send-message="handleMessage" :loading="loading" />
            <chat-footer @send-message="handleMessage" :loading="loading"/>
        </section>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'

import ChatHeader from '../molecules/ChatHeader.vue'
import ChatBody from '../molecules/ChatBody.vue'
import ChatFooter from '../molecules/ChatFooter.vue'

import MapImage from '@/assets/jarvis/map.png'
import NinjaImage from '@/assets/jarvis/ninja.png'
import DocumentImage from '@/assets/jarvis/document.png'
import PresentationImage from '@/assets/jarvis/presentation.png'
import ContactImage from '@/assets/jarvis/contact.png'

import MP3_02 from '@/assets/audios/02_Hola_Paco.mp3'
import MP3_03 from '@/assets/audios/03_Hay_muchas_opciones.mp3'
import MP3_04 from '@/assets/audios/04_Estos_cursos_ofrecen_diferentes_enfoques.mp3'
import MP3_05 from '@/assets/audios/05_Este_curso_tiene_una_duracion.mp3'
import MP3_06 from '@/assets/audios/06_Hay_varias_fechas_disponibles.mp3'
import MP3_07 from '@/assets/audios/07_Este_curso_se_imparte_de_forma_presencial.mp3'
import MP3_08 from '@/assets/audios/08_Ya_estas_inscrito.mp3'
import MP3_09 from '@/assets/audios/09_Ya_esta_creado_el_evento_en_tu_calendario.mp3'
import MP3_10 from '@/assets/audios/10_Ya_tienes_asignada_la_plaza_de_parking.mp3'
import MP3_11 from '@/assets/audios/11_Para_realizar_tu_liquidacion_de_gastos.mp3'
import MP3_12 from '@/assets/audios/12_Tienes_varias_opciones.mp3'
import MP3_13 from '@/assets/audios/13_Si_por_supuesto.mp3'
import MP3_14 from '@/assets/audios/14_Si_esta_es_la_presentacion.mp3'
import MP3_15 from '@/assets/audios/15_Te_puedo_ayudar.mp3'
import MP3_16 from '@/assets/audios/16_Puedes_preguntar_a_Miguel_Angel.mp3'
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
            loading: false,
            title: 'JARVIS',
            size: 'big',
            messages: [],
            sentMessagesCount: 0,
            demo_responses: [
                {text: "Hola, Paco. Veo que tienes conocimientos en frontend. Te recomendaría que te formases también en tecnologías de backend, por ejemplo Python.", isUser: false, multiple: true, audio: MP3_02},
                {text: "Hay muchas opciones, aquí tienes los enlaces:", isUser: false, multiple: true, audio: MP3_03, links: [
                    {text: "Charla Ninja: Python", url: "https://bbva-intranet.appspot.com/"},
                    {text: "MOOC Ninja: Python", url: "https://bbva-intranet.appspot.com/"},
                    {text: "Curso online en Coursera: Programación en Python", url: "https://bbva-intranet.appspot.com/"},
                    {text: "Curso presencial: Introducción a Python.", url: "https://bbva-intranet.appspot.com/"}
                ]},
                {text: "Estos cursos ofrecen diferentes enfoques y duraciones, elige el que mejor se adapte a tu disponibilidad.", isUser: false, multiple: false, audio: MP3_04},
                {text: "Este curso tiene una duración de 5 días, un total de 40 horas.", isUser: false, multiple: false, audio: MP3_05},
                {text: "Hay varias fechas disponibles. Las convocatorias que no coinciden con tus vacaciones solicitadas son estas:", isUser: false, multiple: false, audio: MP3_06, buttons: [
                    {text: "24/06 - 28/06", value: "Reservame para la fecha: 24/06 - 28/06"},
                    {text: "01/07 - 05-07", value: "Reservame para la fecha: 01/07 - 05-07"},
                    {text: "08/07 - 12/07", value: "Reservame para la fecha: 08/07 - 12/07"}
                ]},
                {text: "Este curso se imparte de forma presencial en el edificio Campus BBVA. Este es el itinerario desde tu ubicación actual.", isUser: false, multiple: false, image: MapImage, audio: MP3_07},
                {text: "Ya estás inscrito. ¿Quieres que agregue un evento a tu calendario?", isUser: false, multiple: false, audio: MP3_08},
                {text: "Ya está creado el evento en tu calendario.", isUser: false, multiple: false, audio: MP3_09},
                {text: "Ya tienes asignada la plaza de parking s1_002 en CAMPUS LA MORALEJA.<br>Fecha: 01/07 al 05/07 de 07:00h a 22:00h<br>Acceso: Calle Veredilla, 24", isUser: false, multiple: false, audio: MP3_10},
                {text: "Para realizar tu liquidación de gastos, puedes acceder a través de estos sitios web:<br><br>- Mi Espacio - Tu día a día - Mis gastos<br>- Menú principal - Herramientas - Liquidación de gastos de viaje<br><br>Recuerda cumplir con los importes máximos autorizados en la normativa. Consúltala <a href='https://bbva-intranet.appspot.com/'>aquí</a>.", isUser: false, multiple: true, audio: MP3_11},
                {text: "Una vez accedas a la aplicación SAP Concur, tendrás que crear un nuevo informe de gastos haciendo click en '+ Nuevo Informe'. A continuación debes incluir en el informe los gastos realizados, pudiendo seleccionar aquellos gastos disponibles, como son los movimientos de tarjeta corporativa o aquellos que hayas creado mediante captura con la app móvil o crear un gasto nuevo en el informe.\nDebes incluir en cada gasto el comprobante digitalizado, bien a través de la app o subiendo un comprobante que tengas previamente archivado. Si todo es correcto, envía el informe para su aprobación. <a href='https://bbva-intranet.appspot.com/'>SAP Concur</a>", isUser: false, multiple: false},
                {text: "Tienes varias opciones, pero según las valoraciones de los usuarios, te recomiendo esta charla Ninja.", isUser: false, multiple: false, image: NinjaImage, audio: MP3_12},
                {text: "Sí, por supuesto, aquí tienes el resumen de la transcripción del video.", isUser: false, multiple: false, image: DocumentImage, audio: MP3_13},
                {text: "Sí, esta es la presentación que he creado.", isUser: false, multiple: true, image: PresentationImage, audio: MP3_14},
                {text: "¿Te puedo ayudar en algo más?", isUser: false, multiple: false, audio: MP3_15},
                {text: "Puedes preguntar a Miguel Ángel Almena García. Tiene un nivel avanzado en Python y trabaja en tu misma oficina y departamento.", isUser: false, multiple: true, audio: MP3_16},
                {text: "Esta es su información de contacto.", isUser: false, multiple: false, image: ContactImage},
            ]
        }
    },
    emits: ['close'],
    computed: {
        isMobile() {
            return window.innerWidth <= 768;
        }
    },
    methods: {
        ...mapActions('chatModule', ['getResponseChat']),
        handleClose() {
            this.$emit('close');
        },
        handleRedimension() {
            this.size = this.size === 'small' ? 'big' : 'small';
        },
        handleRefresh() {
            this.messages = [];
            this.sentMessagesCount = 0;
        },
        handleMessage(message) {
            this.messages.unshift({ text: message, isUser: true });
            this.loading = true;
            this.callResponse(message);
        },
        async callResponse(message) {
            let response = {}
            if (import.meta.env.VITE_APP_DEMO === 'true') {
                response = this.demo_responses[this.sentMessagesCount];
                this.sentMessagesCount++;
                if (response) {
                    setTimeout(() => {
                        this.loading = false;
                        // play audio
                        if (response.audio) {
                            const audio = new Audio(response.audio);

                            this.messages.unshift(response);
                            audio.play().then(() => {
                                audio.addEventListener('ended', () => {
                                    if (response.multiple) this.callResponse();
                                });
                            }).catch(error => {
                                console.error('Error playing audio:', error);
                                // Proceed with other operations if audio playback fails
                                this.messages.unshift(response);
                                if (response.multiple) this.callResponse();
                            });
                        } else {
                            this.messages.unshift(response);
                            if (response.multiple) this.callResponse();
                        }
                    }, 1000);
                }
            } else {
                var dataRequest = {"message": message}
                var dataResponse = await this.getResponseChat(dataRequest)
                console.log(dataResponse)
                if (dataResponse.error) {
                  console.log("error")
                  response = { text: 'Error de servidor. En estos momentos no puedo ayudarte.. intentalo de nuevo más tarde.', isUser: false }
                }else{
                  console.log(dataResponse)
                  response = { text: dataResponse.data, isUser: false }
                }
                this.loading = false;
                this.messages.unshift(response);
            }
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

        @media (max-width: 768px) {
            height: 100dvh;
            width: 100%;
            max-width: 100%;
            border-radius: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
}
</style>