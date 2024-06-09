const toastConfirmDialogModule = {
namespaced: true,
  state: () => ({ 
    title: "",
    titleData: "",
    subtitle: ""
  }),
  getters: {
  },
  actions: {

  },
  mutations: {
    setToastConfirmDialog (state, data) {
        state.title = data.title;
        state.titleData = data.titleData;
        state.subtitle = data.subtitle;
    }
  }
}

export default toastConfirmDialogModule