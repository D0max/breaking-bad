<template>
  <v-row no-gutters>
    <v-col
            md="4"
            offset-md="4"
    >
      <v-card elevation="8"
              class="pa-2"
      >
        <v-img width="200px" :src="data[0].img"/>
        <v-card-title>{{data[0].name}}</v-card-title>
        <v-card-subtitle>
          <div>{{data[0].nickname}}</div>
          <p>Real Character name:
            <span>{{data[0].portrayed}}</span>
          </p>
        </v-card-subtitle>
        <v-card-text>
          <div>
            Occupations:
            <span>{{data[0].occupation.join(', ')}}</span>
          </div>
          <div>
            Seasons:
            <span>{{data[0].appearance.join(', ')}}</span>
          </div>
          <div>
            <p>Killed: <span
                    v-for="kill in responsibleDeaths"
                    :key="kill.death_id"
                    class="ma-1"
            >{{kill.death}}</span>
            </p>
          </div>
          <div>
            <ul>Quotes: <li
                    v-for="q in quoters"
                    :key="q.quote_id"
                    class="ma-1"
            >{{q.quote}}</li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'CharacterCard',
    props: ['data', 'responsibleDeaths', 'quoters'],
    mounted() {
      this.$store.dispatch('fetchCharactersQuotes', this.data[0].name)
    }
  }
</script>

