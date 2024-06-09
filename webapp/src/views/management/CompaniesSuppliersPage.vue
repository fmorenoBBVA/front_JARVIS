<template>   
  <div class="row sub-header">
    <h1>Proveedores - Empresas</h1>
  </div>
  <div class="row companiesSuppliers-layout">
    <DatatableCompaniesSuppliers/>
  </div>
</template>

<script>
import DatatableCompaniesSuppliers from '@/components/datatables/DatatableCompaniesSuppliers.vue'

export default {
  components: {
    DatatableCompaniesSuppliers
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

.companiesSuppliers-layout {
  margin: 0;
  padding: 0;
}

</style>
