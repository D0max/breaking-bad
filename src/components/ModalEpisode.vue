<template>
  <v-card class="pa-5">
    <v-row>
      <v-card
              width="150"
              elevation="6"
              class="ma-4 pa-2 align-content-center"
              v-for="item in this.characters"
              :key="item.name"
      >
        <v-img height="150" :src="item.img" />
        {{item.name}}
      </v-card>
    </v-row>
    <div class="ma-4">
      Number of kills: {{this.kills.count}}
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "ModalEpisode",
    props: ['characters', 'kills']
  }
</script>
