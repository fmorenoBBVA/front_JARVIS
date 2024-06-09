<template>
    <Dropdown 
      :options="this.$store.state.globalUsersManaged" 
      filter optionLabel="users_managed_name" 
      v-model="this.$store.state.globalUsersManagedSelected" 
      placeholder="Selecciona gestionado" 
      class="select-usersManaged w-full md:w-14rem"
      @change="closeShowDialogUsersManaged"
    >
      <template #value="slotProps">
          <div v-if="slotProps.value" class="flex align-items-center">
              <div>{{ slotProps.value.users_managed_name }}</div>
          </div>
          <span v-else>
              {{ slotProps.placeholder }}
          </span>
      </template>
      <template #option="slotProps">
          <div class="flex align-items-center">
              <div>{{ slotProps.option.users_managed_name }}</div>
          </div>
      </template>
    </Dropdown>
</template>

<script>

export default {
  components: {

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
    closeShowDialogUsersManaged() {
      this.$emit('closeShowDialogUsersManaged');
    }
  }
}

</script>

<style lang="scss">

@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';

.select-usersManaged {
  min-width: 250px;
  height: 48px;
}

</style>