<template>
  <SpinnerGlobal v-if="loading" class="spinner"/>
  <Header/>
  <main>
    <router-view />
  </main>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import SpinnerGlobal from '@/components/SpinnerGlobal.vue'

import router from './router';

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
  created() {
    this.fetchGlobalUser();
  },
  methods: {
    async fetchGlobalUser() {
      try {
        const globalUser = {emailVerified : true};
        this.$store.commit('setGlobalUser', globalUser);
        if(globalUser.emailVerified) {
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
<style lang="scss">
@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';

</style>
