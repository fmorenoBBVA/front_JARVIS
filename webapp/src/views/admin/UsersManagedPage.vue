<template>   
  <div class="row sub-header">
    <h1>Gestionados</h1>
  </div>
  <div class="row usersManaged-layout">
    <DatatableUsersManaged/>
  </div>
</template>

<script>
import DatatableUsersManaged from '@/components/datatables/DatatableUsersManaged.vue'

export default {
  components: {
    DatatableUsersManaged
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

.usersManaged-layout {
  margin: 0;
  padding: 0;
}

</style>