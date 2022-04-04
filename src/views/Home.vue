<template>
  <div class="home">
    <h1>Seasons</h1>
    <ListSeason v-bind:seasons='getSeason'/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListSeason from '@/components/ListSeason.vue'
import {mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {
    ListSeason
  },
  computed: {
    ...mapGetters(['getSeason'])
  },
}
</script>
