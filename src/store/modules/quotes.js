import axios from '../../api/axios'
export default {
  state: {
    quotesAuthor: []
  },
  mutations: {
    SET_QUOTES_AUTHOR: (state, payload) => {
      return state.quotesAuthor = payload
    }
  },
  getters: {
    getQuotesAuthor: (state) => {
      return state.quotesAuthor
    }
  },
  actions: {
    fetchCharactersQuotes: ({commit, rootState}, name) => {
      rootState.loading = true
      axios.get(`/quote?author=${name}`)
          .then(response => {
            commit('SET_QUOTES_AUTHOR', response.data)
            rootState.loading = false
          })
      }
  }
}
