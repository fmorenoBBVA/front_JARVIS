<template>
  <Toast />
  <ConfirmDialog group="headless">
    <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="p-dialog p-component p-confirm-dialog">
          <div class="p-dialog-header">
          <h2>{{title}}</h2>
          <h3 style="color:#464646">'{{titleData}}'</h3>
          </div>
          <div class="p-dialog-content">
          <i class="pi pi-info-circle" style="font-size: 2.5rem"></i>
          <p>&nbsp;&nbsp;&nbsp;{{subtitle}}</p>
          </div>
          <div class="p-dialog-footer">
            <Button label="Si" @click="acceptCallback" severity="help" />
            <Button label="No" @click="rejectCallback" severity="help" outlined />
          </div>
        </div>
    </template>
  </ConfirmDialog>
</template>

<script>

import { mapState } from 'vuex'
export default {
  components: {

  },
  computed : {
    ...mapState('toastConfirmDialogModule', ['title', 'titleData', 'subtitle']),
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
<style>
.p-dialog {
  background: #ffffff;
}

.p-dialog-header {
  display:block;
  padding: 0px 30px;
}

.p-dialog-content {
  padding: 0px;
  align-items: center;
  justify-content: center;
}

.p-dialog .p-dialog-footer {
  display: block;
  width: 100%;
  text-align: center;

  button {
    width: 100px;
    margin: 15px;
  }
}

</style>