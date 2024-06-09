<template>   
  <div class="row sub-header">
    <h1>Usuarios Conductores</h1>
  </div>
  <div class="row users-drivers-layout">
    <DatatableUsersDrivers/>
  </div>
</template>

<script>
import DatatableUsersDrivers from '@/components/datatables/DatatableUsersDrivers.vue'

export default {
  components: {
    DatatableUsersDrivers
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

.users-drivers-layout {
  margin: 0;
  padding: 0;
}

</style>
