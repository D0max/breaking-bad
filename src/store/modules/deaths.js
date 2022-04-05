import axios from "../../api/axios";

export default {
  state: {
    deathsLists: [],
    deaths: [],
    countDeaths: 0,
  },
  mutations: {
    SET_DEATHS(state, data) {
      state.deathsLists = data
    }
  },
  getters: {
    getCountDeaths: (state) => (s, e) => {
      const deathsList = state.deathsLists.filter(({season, episode}) => {
        return parseInt(s) === season && parseInt(e) === episode
      })
      return {
        deathsList,
        count: deathsList.length
      }
    },
    getResponsibleDeaths: (state) => (name) => {
      return state.deathsLists.filter(({responsible}) => responsible === name)
    }
  },
  actions: {
    fetchDeathsEpisodes: ({ commit, rootState }) =>{
      rootState.loading = true
      axios.get(`/deaths/`)
        .then((response) => {
          commit('SET_DEATHS', response.data)
          rootState.loading = false
        })
    }
  }
}
