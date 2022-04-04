import Vue from 'vue'
import Vuex from 'vuex'
import episodes from "./modules/episodes";
import seasons from "./modules/seasons";
import deaths from "./modules/deaths";
import characters from "./modules/characters";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    episodes,
    seasons,
    deaths,
    characters
  }
})
