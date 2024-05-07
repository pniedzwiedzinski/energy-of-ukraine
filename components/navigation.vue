<template>

      <v-navigation-drawer
        elevation="2"
        v-model="showSidebar"
        class="d-print-none"
      >
        <v-list>
          <NuxtLink style="color: black; text-decoration: none" to="/">
            <v-list-item
            prepend-avatar="https://cdn-icons-png.flaticon.com/256/197/197572.png"
            subtitle=""
            title="Energy of Ukraine"
          ></v-list-item>
            </NuxtLink>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <NuxtLink style="color: black; text-decoration: none" v-for="entry in menu" :key="entry.value" :to="entry.value">
                <v-list-item :prepend-icon="`mdi-${entry.icon}`" :title="entry.title" :value="entry.value"></v-list-item>
                </NuxtLink>
        </v-list>

      </v-navigation-drawer>
      <div style="position: absolute" class="d-print-none">
      <v-fab
            :icon="arrow"
            class="ms-4 mb-4"
        location="top left"
        size="48"
        absolute
        app
        appear
              @click.stop="showSidebar = !showSidebar"
            ></v-fab>
        </div>
</template>

<script>
export default {
    data() {
        return {
            showSidebar: null,
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
                    "icon": "barrel",
                    "title": "Zasoby",
                    "value": "resources",
                },
                {
                    "icon": "currency-eur",
                    "title": "Ceny",
                    "value": "prices",
                },
                {
                    "icon": "tank",
                    "title": "Wojna",
                    "value": "war",
                },
                {
                    "icon": "book-open-page-variant",
                    "title": "Bibliografia i źródła",
                    "value": "sources"
                },
                {
                    "icon": "information",
                    "title": "O tej stronie",
                    "value": "/",
                },
            ]
        }
    },
    computed: {
        arrow() {
            return this.showSidebar ? "mdi-close" : "mdi-menu"
        }
    }
}
</script>