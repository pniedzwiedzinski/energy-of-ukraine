<template>
  <div>
    <v-app>
      <v-card>
    <v-layout>
    <navigation></navigation>

    <v-main style="">
      <div class="container">
        <NuxtPage />
      </div>
    </v-main>
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
  min-height: 100vh; 
}

iframe {
  max-width: 100vw;
}

.container {
  margin: 0 auto;
  max-width: 1100px;
  display: flex; 
  align-items: center; 
  flex-direction: column;
}
</style>
