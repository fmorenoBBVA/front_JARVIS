<template>   
  <div class="row sub-header">
    <h1>Tipologías</h1>
  </div>
  <div class="row typologies-layout">
    <DatatableTypologies/>
  </div>
</template>

<script>
import DatatableTypologies from '@/components/datatables/DatatableTypologies.vue'

export default {
  components: {
    DatatableTypologies
  },
  computed : {
    
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

.typologies-layout {
  margin: 0;
  padding: 0;
}

</style>