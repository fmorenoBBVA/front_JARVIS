<template>   
  <Spinner v-if="false" class="spinner"/>
  <div class="row facturacion-layout">
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'

import Spinner from '@/components/Spinner.vue'


export default {
  components: {
    Spinner,
  },
  computed : {
  
  },
  data() {
    return {

    };
  },
  created() {
   this.$store.commit('setGlobalTittleSubHeader', "Administración");
  },
  methods: {
  
  }
}

</script>

<style lang="scss">

@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';



</style>