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
    }
  },
  actions: {
    fetchDeathsEpisodes: ({ commit }) =>{
      axios.get(`/deaths/`)
        .then((response) => {
          commit('SET_DEATHS', response.data)
        })
    }
  }
}
