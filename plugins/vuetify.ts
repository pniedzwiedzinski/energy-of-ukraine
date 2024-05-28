import '@mdi/font/css/materialdesignicons.css'
import '@fontsource/open-sans'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VFab } from 'vuetify/labs/VFab'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components: {
      VFab,
    },
  })
  app.vueApp.use(vuetify)
})
