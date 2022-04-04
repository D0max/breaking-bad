<template>
  <div>
    <v-row>
      <v-card
              width="380"
              class="pa-4 ma-6 card-list_episodes"
              elevation="5"
              v-for="episode in series"
              :key="episode.episode_id"
              @click="() => selectEpisode(episode)"
      >
        <v-card-title>{{episode.title}}</v-card-title>
        <v-card-subtitle>{{episode.air_date}}</v-card-subtitle>
        <v-card-text>
          <span
                  v-for="character in episode.characters"
                  :key="character"
          >
            {{character}},
          </span>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>

  export default {
    name: 'ListEpisodes',
    props: [
      'series',
      'selectEpisode'
    ]
  }

</script>

<style>
  .card-list_episodes {
    cursor: pointer;
  }
</style>
