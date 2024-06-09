<template>
  <div class="row sub-header">
    <h1>Facturación</h1>
    <GlobalSelectedUsersManaged 
      @closeShowDialogUsersManaged="closeShowDialogUsersManaged"
    />
  </div>
  <div class="row billing-layout">
    <div class="card">
      <TabView v-model:activeIndex="active">
          <TabPanel header="Gastos">
            <DatatableBillingExpenses />
          </TabPanel>
          <TabPanel header="Gastos recurrentes">
            <DatatableBillingExpensesRecu />
          </TabPanel>
          <TabPanel header="Ingresos">
            <DatatableBillingIncome />
          </TabPanel>
      </TabView>
    </div>
  </div>
  <Dialog 
    :visible="showDialogUsersManaged" modal 
    header="Por favor selecciona un gestionado:" 
    :style="{ width: '400px !important', height: '250px', padding: '20px' }" 
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" 
    :closable="false"
  > 
    <div style="text-align: center;margin: 30px;">
      <GlobalSelectedUsersManaged
        @closeShowDialogUsersManaged="closeShowDialogUsersManaged"
      />
    </div>
  </Dialog>
</template>

<script>
import { mapActions } from 'vuex'

import GlobalSelectedUsersManaged from '@/components/GlobalSelectedUsersManaged.vue';
import DatatableBillingExpenses from '@/components/datatables/DatatableBillingExpenses.vue';
import DatatableBillingExpensesRecu from '@/components/datatables/DatatableBillingExpensesRecu.vue';
import DatatableBillingIncome from '@/components/datatables/DatatableBillingIncome.vue';

export default {
  components: {
    GlobalSelectedUsersManaged,
    DatatableBillingExpenses,
    DatatableBillingExpensesRecu,
    DatatableBillingIncome
  },
  computed : {
    
  },
  data() {
    return {
      showDialogUsersManaged: false
    };
  },
  created() {
    this.getTypologies();
    this.getCompaniesSuppliers();
    if (!this.$store.state.globalUsersManagedSelected.users_managed_id) {
      this.showDialogUsersManaged = true;
    } else {
      this.getBillingExpenses();
      this.getBillingExpensesRecu();
      this.getBillingIncome();
    }
  },
  methods: {
    ...mapActions('typologiesModule', ['getTypologies']),
    ...mapActions('companiesSuppliersModule', ['getCompaniesSuppliers']),
    ...mapActions('billingExpensesModule', ['getBillingExpenses']),
    ...mapActions('billingExpensesRecuModule', ['getBillingExpensesRecu']),
    ...mapActions('billingIncomeModule', ['getBillingIncome']),
    closeShowDialogUsersManaged(){
      this.getBillingExpenses();
      this.getBillingExpensesRecu();
      this.getBillingIncome();
      this.showDialogUsersManaged = false;
    }
  }
}

</script>

<style lang="scss">

@import '@/assets/scss/utils.scss';
@import '@/assets/scss/variables.scss';

.billing-layout {
  margin:0;
  padding:0;
}

</style>