<template>   
    <div class="row sub-header">
      <h1>Licencias</h1>
    </div>
    <div class="row licenses-layout">
      <DatatableLicenses/>
    </div>
  </template>
  
  <script>
  import DatatableLicenses from '@/components/datatables/DatatableLicenses.vue'
  
  export default {
    components: {
      DatatableLicenses
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
  
  .licenses-layout {
    margin: 0;
    padding: 0;
  }
  
  </style>