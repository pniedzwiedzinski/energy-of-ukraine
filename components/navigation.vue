<template>

      <v-navigation-drawer
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn-icons-png.flaticon.com/256/197/197572.png"
            subtitle=""
            title="Energy of Ukraine"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-generator-stationary" title="Produkcja" value="generation"></v-list-item>
          <v-list-item prepend-icon="mdi-connection" title="Zużycie" value="consumption"></v-list-item>
          <v-list-item prepend-icon="mdi-transmission-tower-export" title="Import/Eksport" value="transfer"></v-list-item>
          <v-list-item prepend-icon="mdi-currency-eur" title="Ceny" value="prices"></v-list-item>
          <v-list-item prepend-icon="mdi-barrel" title="Zasoby" value="sources"></v-list-item>
          <v-list-item prepend-icon="mdi-leaf-circle" title="Środowisko" value="climate"></v-list-item>
          
        </v-list>

        <template v-slot:append>
        <v-divider></v-divider>
          <div class="pa-2">
            <v-btn 
            :icon="arrow"
            variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </div>
        </template>
      </v-navigation-drawer>

</template>

<script>
export default {
    props: {
        rail: false
    },
    computed: {
        arrow() {
            return this.rail ? "mdi-chevron-left" : "mdi-chevron-right"
        }
    }
}
</script>