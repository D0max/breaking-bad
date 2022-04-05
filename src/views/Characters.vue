<template>
  <div>
    <h1>Characters</h1>
    <ListCharacters :characters="getCharacters" />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import ListCharacters from "../components/ListCharacters";
  export default {
    name: 'Characters',
    components: {
      ListCharacters
    },
    mounted(){
      if (!this.getCharacters.length) {
        this.$store.dispatch('fetchCharacters')
      }
    },
    computed: {
      ...mapGetters(['getCharacters'])
    }
  }
</script>
