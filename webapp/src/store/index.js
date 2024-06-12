import { createStore } from 'vuex'
import * as ApiService from '../services/ApiService.js'

import toastConfirmDialogModule from '@/modules/toastConfirmDialog'
import chatModule from '@/modules/chat'



// Create a new store instance.
const store = createStore({
  modules: {
    toastConfirmDialogModule,
    chatModule
  },
  state () {
    return {
      globalUser: {},
      globalNavBar: false,
      globalUsersManaged: [],
      globalUsersManagedSelected: {},
      globalTittleSubHeader: ""
    }
  },
  mutations: {
    setLoading (state, loading) {
      state.loading = loading;
    },
    setGlobalUser (state, newUser) {
      state.globalUser = newUser
    },
    setGlobalNavBar (state, newNavBar) {
      state.globalNavBar = newNavBar
    },
    setGlobalUsersManagedSelected (state, newUsersManagedSelected) {
      state.globalUsersManagedSelected = newUsersManagedSelected
    },
    setGlobalUsersManaged (state, newUsersManaged) {
      state.globalUsersManaged = newUsersManaged
    },
    setGlobalTittleSubHeader (state, newTittleSubHeader) {
      state.globalTittleSubHeader = newTittleSubHeader
    },
    setToast (state, data) {
      data.toast.add({ severity: data.severity, summary: data.summary, detail: data.detail, life: data.life });
    }
  },
  actions: {
    async getUsersManaged ({ commit }, queryParams) {
      commit('setLoading', true)
      await ApiService.getEntities('/users_managed', queryParams)
        .then(response => {
          commit('setGlobalUsersManaged', response.data)
        })
        .catch(err => {
          commit('setGlobalUsersManaged', [])
          console.log(err)
        })
        commit('setLoading', false)
    }
  }
})

export default store