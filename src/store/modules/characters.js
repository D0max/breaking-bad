import axios from '../../api/axios'

export default {
  state: {
    characters: [],
    character: []
  },
  mutations: {
    SET_CHARACTERS(state, payload) {
      state.characters = payload
    },
    SET_CHARACTER_BY_ID(state, payload) {
      state.character = payload
    }
  },
  getters: {
    getCharactersEpisodes:(state) => (character) => {
      return state.characters.filter(({name}) => character.includes(name))
    },
    getCharacters: (state) => {
      return state.characters
    },
    getCharacterById: (state) => {
      return state.character
    }
  },
  actions: {
    fetchCharacters: ({ commit, rootState }) => {
      rootState.loading = true
      axios.get(`/characters/`)
        .then((response) => {
          commit('SET_CHARACTERS', response.data)
          rootState.loading = false
        })
    },
    fetchCharacterById: ({commit, rootState}, id) => {
      rootState.loading = true
      axios.get(`/characters/${id}`)
        .then(response => {
          commit('SET_CHARACTER_BY_ID', response.data)
          rootState.loading = false
        })
    }
  }
}
