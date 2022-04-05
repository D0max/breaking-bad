<template>
    <CharacterCard
            :data="getCharacterById"
            :responsibleDeaths="getResponsibleDeaths(getCharacterById[0].name)"
            :quoters="getQuotesAuthor"
    />
</template>

<script>
  import CharacterCard from "../components/CharacterCard"
  import {mapGetters} from 'vuex'
  export default {
    name: 'CharactersById',
    components: {
      CharacterCard
    },
    mounted() {
        this.$store.dispatch('fetchCharacterById', this.$route.params.id)
        this.$store.dispatch('fetchDeathsEpisodes')
    },
    computed: {
      ...mapGetters(['getCharacterById', 'getResponsibleDeaths', 'getQuotesAuthor'])
    }
  }
</script>
