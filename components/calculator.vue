<template>
    <v-card>
        <v-card-title class="headline">
            Na jak długo starczy rezerwa?
        </v-card-title>
        <v-card-text>
            <v-text-field v-model="fuel" label="Zasoby paliwa [tysiące ton]" type="number" required></v-text-field>
            <v-text-field v-model="calorificValue" label="Kaloryczność paliwa [kJ/kg]" type="number" required></v-text-field>
            <v-text-field v-model="efficiency" label="Sprawność procesu [%]" type="number" required></v-text-field>
            <v-text-field v-model="use" label="Dzienne zapotrzebowanie [TWh]" type="number" required></v-text-field>
            <v-divider class="my-4"></v-divider>
            <v-alert :value="true" :type="result ? ('info') : 'error' " outlined>
             Rezerwa starczy na {{ result }} dni
            </v-alert>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            fuel: 1500,
            calorificValue: 25,
            efficiency: 22,
            use: 0.3
        }
    },
    computed: {
        result() {
            if(!this.fuel || !this.calorificValue || !this.efficiency || !this.use) {
                return null
            }
            return Math.floor((this.fuel * this.calorificValue * this.efficiency/100)/(3600*this.use))
        }
    }
}
</script>