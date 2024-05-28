<template>
    <h1>Zasoby</h1>
    <p>Ukraina jest obszarem bogatym w zasoby naturalne. Na jej terenie wydobywany jest węgiel, ropa, gaz ziemny, a także paliwo jądrowe. 
        Wydobycie węgla w ostatnich latach spadło, co pokrywa się ze zwiększonym importem.</p>
    <figure>
        <img src="~/public/fuels-production.svg">
        <figcaption>Źródło: IEA</figcaption>
    </figure>
    <h2>Import/Eksport Paliw</h2>
    <figure>
        <img src="~/public/fuel-import.svg">
    </figure>
    <figure>
        <img src="~/public/fuel-export.svg">
        <figcaption>Źródło: IEA</figcaption>
    </figure>

    <h2>Rezerwy Paliw</h2>
    <figure>
        <img src="~/public/fuel-reserves.svg">
        <figcaption>Źródło: ukrstat.gov.ua</figcaption>
    </figure>
    <h3>Jak długo starczy rezerwa?</h3>
    <p>
        Możemy oszacować na jak długo starczy rezerwa, przyjmując wartość opałową węgla jak 25 kJ/kg i łączną sprawność wytwarzania i przesyłu energii elektrycznej jako 22 %.
        Dzienne zużycie energii elektrycznej na skalę całego kraju to ok. 0,3 TWh, zatem:
    </p>
        <figure>
            <img src="~/public/equation.png">
        </figure>
    <p>W polsce dzienne zapotrzebowanie energię wynosi ok. 0.5 TWh [<a href="https://energetykon.pl/dobowe-zuzycie-energii-elektrycznej-w-polsce-analiza-rocznego-zapotrzebowania-i-trendy-dzienne/">energetykon.pl</a>]</p>
    <calculator />

    <h2>Potencjał OZE</h2>
    <p>Południe Ukrainy to rejony, na których występuje duże nasłonecznienie, dlatego w tym rejonie inwestuje się w farmy fotowoltaiczne (można to zobaczyć na mapie elektrowni w <NuxtLink to="generation#map">Produkcja</NuxtLink>).</p>
    <figure>
        <v-carousel height="100%">
            <v-carousel-item src="~/public/ukraine-solar-map.jpg" />
            <v-carousel-item src="~/public/poland-solar-map.jpg" />
        </v-carousel>
        <figcaption>Źródło: <a href="https://globalsolaratlas.info/download/ukraine">Global Solar Atlas</a></figcaption>
    </figure>
    <figure>
        <v-carousel height="100%">
            <v-carousel-item src="~/public/ukraine-wind-map.jpg" />
            <v-carousel-item src="~/public/poland-wind-map.jpg" />
        </v-carousel>
        <figcaption>Źródło: <a href="https://globalwindatlas.info/en/area/Ukraine?download=print">Global Wind Atlas</a></figcaption>
    </figure>
</template>

<script>
import calculator from '~/components/calculator.vue';
export default {
    components: {
        calculator
    }
}
</script>

<style>
figure {
    width: 100%;
    max-height: 100vw;
}
</style>