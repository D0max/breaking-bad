<template>
  <v-row dense>
    <v-card
            elevation="6"
            v-for="item in seasons"
            class="card-list_seasons pa-2 ma-4"
            :key="item.id"
            v-on:click="() => pushInSeason(item.id)"
    >
      <v-img
        height="250"
        width="200"
        :src='require(`@/assets/${item.image}`)'
      />
      {{item.title}}
    </v-card>
  </v-row>
</template>

<script>
  export default {
    name: 'ListSeason',
    props: ['seasons'],
    methods: {
      pushInSeason(id) {
        this.$router.push({path: `/seasons/${id}`})
      }
    }
  }

</script>

<style>
  .card-list_seasons {
    cursor: pointer;
  }
</style>
