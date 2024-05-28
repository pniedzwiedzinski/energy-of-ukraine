<template>
  <v-container fluid>
    <v-row
      class="ma-12"
      align="center"
      justify="center"
    >
      <h1>Wymogi zaliczeniowe</h1>
      <p>Na tej stronie znajdują się pozostałe wymogi strony na zaliczenie.</p>
    </v-row>

    <ukraine-flag />

    <h2>Zapisz się</h2>
    <v-form @submit.prevent="submitForm">
      <v-col align="center">
        <v-text-field
          v-model="form.imie"
          label="Imię"
          :rules="rules"
          required
        />
        <v-text-field
          v-model="form.drugieimie"
          label="Drugie imię"
          :rules="rules"
          required
        />
        <v-text-field
          v-model="form.nazwisko"
          label="Nazwisko"
          :rules="rules"
          required
        />
        <v-text-field
          v-model="form.email"
          label="E-mail"
          type="email"
          :rules="rules"
          required
        />
        <label for="dataUr">Data urodzenia</label>
        <v-date-picker
          v-model="form.dataUr"
          name="dataUr"
          label="Data urodzenia"
        />
        <v-checkbox
          v-model="form.zgoda"
          label="Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z RODO."
          :rules="rules"
          required
        />
        <v-textarea
          v-model="form.doswiadczenie"
          label="Opowiedz nam o sobie"
        />
        <v-container>
          <v-btn
            style="margin-right: 10px"
            @click="clearForm"
          >
            Wyczyść
          </v-btn>
          <v-btn
            color="primary"
            type="submit"
          >
            Zapisz się
          </v-btn>
        </v-container>
      </v-col>
    </v-form>

    <br>
    <v-card>
      <v-card-title class="headline">
        Zegar
      </v-card-title>
      <v-card-text>
        <v-row justify="center">
          <v-col
            cols="12"
            class="text-center"
          >
            <v-icon size="48">
              mdi-clock-outline
            </v-icon>
            <p class="display-1">
              {{ currentTime }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import UkraineFlag from '~/components/UkraineFlag.vue'

export default {
  components: {
    UkraineFlag,
  },
  data: () => ({
    form: {
      imie: '',
      nazwisko: '',
      email: '',
      dataUr: null,
      zgoda: false,
      doswiadczenie: '',
    },
    currentTime: null,
    rules: [
      (value) => {
        if (value) return true

        return 'Uzupełnij to pole'
      },
    ],
  }),
  mounted() {
    this.updateTime()
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    clearForm() {
      this.form = {
        imie: '',
        nazwisko: '',
        email: '',
        dataUr: null,
        zgoda: false,
        doswiadczenie: '',
      }
    },
    validateForm() {
      const requiredFields = ['imie', 'nazwisko', 'email', 'zgoda']
      for (const field of requiredFields) {
        if (!this.form[field]) {
          console.log(field)
          return false
        }
      }
      return true
    },
    submitForm() {
      if (this.validateForm()) {
        alert(`Przesłano formularz: ${JSON.stringify(this.form)}`)
      }
    },
    updateTime() {
      const now = new Date()
      const hours = this.formatTimeUnit(now.getHours())
      const minutes = this.formatTimeUnit(now.getMinutes())
      const seconds = this.formatTimeUnit(now.getSeconds())
      this.currentTime = `${hours}:${minutes}:${seconds}`
    },
    formatTimeUnit(unit) {
      return unit < 10 ? '0' + unit : unit
    },
  },
}
</script>

<style>
form {
    display: grid;
}
</style>
