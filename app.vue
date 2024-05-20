<template>
  <div>
    <Head>
      <Title>Energy of Ukraine</Title>
    </Head>
    <v-app>
    <v-layout style="flex-direction: column;">
    <navigation></navigation>

    <v-main>
      <div class="container">
        <NuxtPage />
      </div>
    </v-main>
    <v-footer>
      
    <v-row justify="center" no-gutters>
      <v-divider />
      <v-col class="text-center mt-4" cols="12">
        <strong>Energy of Ukraine 2024</strong>
        <p>Patryk Niedźwiedziński & Miłosz Wojdak</p>
      </v-col>
    </v-row>
  </v-footer>
    </v-layout>
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

@media print {
  main {
    --v-layout-left: 0 !important;
  }
}

main {
  margin: 2em 1em;
}

iframe {
  max-width: 100vw;
  height: 57vw;
  max-height: 422px;
}

.container {
  text-align: justify;
  margin: 0 auto;
  max-width: 750px;
  display: flex; 
  align-items: center; 
  flex-direction: column;
}

figure img {
  width: 100%;
}
</style>
