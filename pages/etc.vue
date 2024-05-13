<template>
    <h1>Wymogi zaliczeniowe</h1>
    <v-form @submit.prevent="submitForm">
        <v-text-field v-model="form.imie" label="Imię" required></v-text-field>
        <v-text-field v-model="form.drugieimie" label="Drugie imię" required></v-text-field>
        <v-text-field v-model="form.nazwisko" label="Nazwisko" required></v-text-field>
        <v-text-field v-model="form.email" label="E-mail" type="email" required></v-text-field>
        <v-date-picker v-model="form.dataUr" label="Data urodzenia" required></v-date-picker>
        <v-checkbox v-model="form.zgoda" label="Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z RODO." required></v-checkbox>
        <v-textarea v-model="form.doswiadczenie" label="Opowiedz nam o sobie"></v-textarea>
        <v-container>
            <v-btn style="margin-right: 10px" @click="clearForm">Wyczyść</v-btn>
            <v-btn color="primary" type="submit">Zapisz się</v-btn>
        </v-container>
    </v-form>

    <v-card>
        <v-card-title class="headline">
            Przelicznik TWh na PJ
        </v-card-title>
        <v-card-text>
            <v-text-field v-model="twh" label="TWh" type="number" required></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-alert v-if="result !== null" :value="true" type="success" outlined>
            {{ twh }} TWh to {{ result }} PJ
            </v-alert>
        </v-card-text>
    </v-card>

    <br>
    <v-card>
    <v-card-title class="headline">Zegar</v-card-title>
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <v-icon size="48">mdi-clock-outline</v-icon>
          <p class="display-1">{{ currentTime }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    mounted() {
        this.updateTime();
        setInterval(() => {
            this.updateTime();
        }, 1000);
    },
    data: () => ({
      form: {
        imie: '',
        nazwisko: '',
        email: '',
        dataUr: null,
        zgoda: false,
        doswiadczenie: ''
      },
      twh: null,
      currentTime: null,
    }),
    methods: {
        clearForm() {
            this.form = {
                imie: '',
                nazwisko: '',
                email: '',
                dataUr: null,
                zgoda: false,
                doswiadczenie: ''
            }
        },
        submitForm() {
            alert("Przesłano formularz")
        },
        updateTime() {
            const now = new Date();
            const hours = this.formatTimeUnit(now.getHours());
            const minutes = this.formatTimeUnit(now.getMinutes());
            const seconds = this.formatTimeUnit(now.getSeconds());
            this.currentTime = `${hours}:${minutes}:${seconds}`;
        },
        formatTimeUnit(unit) {
            return unit < 10 ? '0' + unit : unit;
        }
    },
    computed: {
        result() {
            const twhToPJ = 3.6;
            return this.twh * twhToPJ;
        }
    }
}
</script>

<style>
form {
    display: grid;
}
</style>