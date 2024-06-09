<template>   
  <div class="row sub-header">
    <h1>Flota de coches</h1>
  </div>
  <div class="row usersManaged-layout">
    <DatatableCarsDetail />
  </div>
</template>

<script>
import DatatableCarsDetail from '@/components/datatables/DatatableCarsDetail.vue'

export default {
  components: {
    DatatableCarsDetail
  },
  computed: {
    
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
   
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';

.usersManaged-layout {
  margin: 0;
  padding: 0;
}
</style>
