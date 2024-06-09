import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';


import './assets/styles/main.css';
import './assets/scss/app.scss';
import 'primevue/resources/themes/lara-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';
import ColumnGroup from 'primevue/columngroup';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Dialog from 'primevue/dialog';

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(ConfirmationService);

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Toast', Toast);
app.component('ConfirmDialog', ConfirmDialog);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Dialog', Dialog);

app.use(router);
app.use(store);

console.log("HOST: "+ window.location.hostname)
app.mount('#app');