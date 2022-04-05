<template>
  <v-row class="ma-8">
    <v-card
            elevation="5"
            class="ma-4 pa-2 card-list_characters"
            v-for="item in characters"
            :to="`/characters/${item.char_id}`"
            :key="item.char_id"
            width="20%"
    >
      <v-img height="350" :src="item.img"/>
      <v-card-title>{{item.name}}</v-card-title>
      <v-card-subtitle>{{item.nickname}}</v-card-subtitle>
    </v-card>
    <v-progress-circular
            v-if="characters === []"
            :size="50"
            color="primary"
            indeterminate
    ></v-progress-circular>
  </v-row>

</template>

<script>
  export default {
    name: 'ListCharacters',
    props: ['characters']
  }
</script>

<style>
  .card-list_characters {
    cursor: pointer;
  }
</style>
