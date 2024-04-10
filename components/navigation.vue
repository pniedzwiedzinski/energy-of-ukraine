<template>

      <v-navigation-drawer
        v-model="showSidebar"
        elevation="2"
        @click="showSidebar = false"
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
            <v-list-item v-for="entry in menu" :key="entry.value" :prepend-icon="`mdi-${entry.icon}`" :title="entry.title" :value="entry.value"></v-list-item>
        </v-list>

      </v-navigation-drawer>
      <div class="pa-2">
            <v-btn 
            :icon="arrow"
              @click.stop="showSidebar = !showSidebar"
            ></v-btn>
          </div>
</template>

<script>
export default {
    data() {
        return {
            showSidebar: true,
            menu: [
                {
                    "icon": "generator-stationary",
                    "title": "Produkcja",
                    "value": "generation",
                },
                {
                    "icon": "connection",
                    "title": "Zużycie",
                    "value": "consumption",
                },
                {
                    "icon": "transmission-tower-export",
                    "title": "Import/Eksport",
                    "value": "transfer",
                },
                {
                    "icon": "currency-eur",
                    "title": "Ceny",
                    "value": "prices",
                },
                {
                    "icon": "barrel",
                    "title": "Zasoby",
                    "value": "sources",
                },
                {
                    "icon": "leaf-circle",
                    "title": "Środowisko",
                    "value": "climate",
                },
            ]
        }
    },
    computed: {
        arrow() {
            return this.showSidebar ? "mdi-chevron-left" : "mdi-chevron-right"
        }
    }
}
</script>