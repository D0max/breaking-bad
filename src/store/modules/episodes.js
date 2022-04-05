import axios from '../../api/axios'

export default {
  state: {
    episodes: [],
  },
  mutations: {
    SET_EPISODES: (state, data) => {
      state.episodes = data
    }
  },
  getters: {
    getSeasonEpisode: (state) => (id) => {
      return state.episodes.filter(({season}) => season.includes(id))
    }
  },
  actions: {
    fetchEpisodes: ({ commit, rootState }) =>{
      rootState.loading = true
      axios.get(`/episodes/`)
        .then((response) => {
          commit('SET_EPISODES', response.data)
          rootState.loading = false
        })
    }
  },
};
