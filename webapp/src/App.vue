<script>

import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'

import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import SpinnerGlobal from '@/components/SpinnerGlobal.vue'

import getAuthFirebase from './firebase'
// Importa el enrutador
import router from './router'; // Ajusta la ruta de importación según tu estructura de directorios

export default {
  components: {
    SpinnerGlobal,
    Header,
    Footer
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    
  },
  created() {
    this.fetchGlobalUser();
  },
  methods: {
    async fetchGlobalUser() {
      try {
        //const globalUser = await getAuthFirebase();
	const globalUser = {emailVerified : true};
        this.$store.commit('setGlobalUser', globalUser);
        if(globalUser.emailVerified) {
 //         this.$store.dispatch('getUsersManaged');
          router.push('/');
        }
        this.loading = false;
      } catch (error) {
        console.error('Error al obtener usuario global:', error);
      }
    }
  }
}

</script>

<template>
  <SpinnerGlobal v-if="loading" class="spinner"/>
  <Header/>
  <main>
    <router-view />
  </main>
  <Footer/>
</template>

<style lang="scss">
@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';

</style>
