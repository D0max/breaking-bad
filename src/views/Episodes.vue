<template>
  <div class="about">
    <h1>{{this.getSeason[this.$route.params.id - 1].title}}</h1>
    <ListEpisodes
            :series="this.getSeasonEpisode(this.$route.params.id)"
            :selectEpisode="(e) => selectEpisode(e)"
    />
    <v-dialog
            v-model="episodeSelect"
            width="800"
    >
      <ModalEpisode
              v-if="episodeSelect !== undefined"
              :kills="this.getCountDeaths(this.episodeSelect.season, this.episodeSelect.episode)"
              :characters="this.getCharactersEpisodes(this.episodeSelect.characters)"
      />

    </v-dialog>
  </div>
</template>

<script>
  import ListEpisodes from "../components/ListEpisodes";
  import ModalEpisode from "../components/ModalEpisode";
  import {mapGetters} from "vuex";

  export default {
    name: 'Episodes',
    components: {
      ListEpisodes,
      ModalEpisode
    },
    data() {
      return {
        episodeSelect: undefined
      }
    },
    created() {
      this.$store.dispatch('fetchEpisodes')
      this.$store.dispatch('fetchCharacters')
      this.$store.dispatch('fetchDeathsEpisodes')
    },
    methods: {
      selectEpisode(episode) {
        this.$data.episodeSelect = episode
      }
    },
    computed: {
      ...mapGetters(['getSeasonEpisode', 'getSeason', 'getCharactersEpisodes', 'getCountDeaths'])
    }
  }
</script>
