<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/" class="white--text ma-4">Episodes</router-link>
      <router-link to="/characters" class="white--text">Characters</router-link>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
      <Loader :loading="this.$store.state.loading"/>
    </v-main>
  </v-app>
</template>

<script>
  import Loader from "./components/Loader";

export default {
  name: 'App',
  components: {
    Loader
  }
};
</script>
