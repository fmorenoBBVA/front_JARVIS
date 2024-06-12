import * as ApiService from '../../services/ApiService.js'

const chatModule = {
    namespaced: true,
    state: {
        chat: {

        }
    },
    getters: {

    },
    mutations: {

    },
    actions: {
      async getResponseChat ({ commit }, queryParams) {
        return ApiService.editEntity('/responseChat', queryParams)
          .then(response => {
            console.log(response)
            return response
          })
          .catch(err => {
            console.log("err")
            console.log(err)
            return err
          })
            
      }, 
    }
}

export default chatModule;
