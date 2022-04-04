import axios from '../../api/axios'

export default {
  state: {
    characters: []
  },
  mutations: {
    SET_CHARACTERS(state, data) {
      state.characters = data
    }
  },
  getters: {
    getCharactersEpisodes:(state) => (character) => {
      console.log(character);
      return state.characters.filter(({name}) => character.includes(name))
    }
  },
  actions: {
    fetchCharacters: ({ commit }) =>{
      axios.get(`/characters/`)
        .then((response) => {
          commit('SET_CHARACTERS', response.data)
        })
    }
  }
}
