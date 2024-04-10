<template>
  <div>
    <v-app>
      <v-card>
    <v-layout>
    <navigation></navigation>

    <v-main style="height: 100vh; min-height: 500px;"></v-main>
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
</style>
