<template>
  <div>
    <v-app>
      <v-card>
    <v-layout>
    <navigation></navigation>

    <v-main style=""><RouterView/></v-main>
    </v-layout>
  </v-card>
    </v-app>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue';

export default {
  name: "app",
  components: {Navigation}
}
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
}

main {
  margin-top: 2em;
  height: 100vh; 
  min-height: 500px; 
  display: flex; 
  align-items: center; 
  flex-direction: column;
}
</style>
