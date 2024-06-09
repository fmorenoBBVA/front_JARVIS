<template>   
  <section>
    <jarvis />
    <Spinner v-if="false" class="spinner"/>
    <div class="row home-layout">
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'

import Spinner from '../components/Spinner.vue'
import Jarvis from '../components/jarvis/organisms/Jarvis.vue'

export default {
  components: {
    Spinner,
    Jarvis,
  },
  computed : {
  
  },
  created() {
    this.$store.commit('setGlobalTittleSubHeader', "Home");
   
  }
}

</script>

<style lang="scss">

@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';



</style>