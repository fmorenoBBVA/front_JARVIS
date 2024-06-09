const homeModule = {
    namespaced: true,
    state: {
        home: {
          loggedIn: false,
          data: null
        }
    },
    getters: {
        home(state){
            return state.home
        }
    },
    mutations: {
        set_home(state, data) {
            state.home.data = data;
        }
    }
}

export default homeModule;
