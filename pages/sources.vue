<template>
    <h1>Źródła i bibliografia</h1>
    <ul>
        <li v-for="source in sources" :key="id">
            <a :href="source.url">{{ source.name }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            sources: [
                {
                    "name": "UKRENERGO Annual Reports 2010-2018",
                    "url": "https://web.archive.org/web/20190730204841/https://ua.energy/activity/reporting/annual-reports/",
                },
                {
                    "name": "Global Power Plant Database, 2021",
                    "url": "https://datasets.wri.org/dataset/globalpowerplantdatabase",
                }
            ]
        }
    }
}
</script>