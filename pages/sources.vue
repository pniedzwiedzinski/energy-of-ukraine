<template>
  <h1>Źródła i bibliografia</h1>
  <ul>
    <li
      v-for="source in sources"
      :key="id"
    >
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
          name: 'UKRENERGO Annual Reports 2010-2018',
          url: 'https://web.archive.org/web/20190730204841/https://ua.energy/activity/reporting/annual-reports/',
        },
        {
          name: 'Global Power Plant Database, 2021',
          url: 'https://datasets.wri.org/dataset/globalpowerplantdatabase',
        },
        {
          name: 'IEA World Energy Balances - free extract, 1990-2021',
          url: 'https://www.iea.org/data-and-statistics/data-product/world-energy-statistics-and-balances',
        },
        {
          name: 'Installed electricity production capacity by power plant types, National Power Company Ukrenergo, 2022',
          url: 'https://map.ua-energy.org/en/resources/c51a16bc-e990-40db-b790-63624d823daa/',
        },
        {
          name: 'Electricity prices by type of user [€/kWh] - Eurostat',
          url: 'https://ec.europa.eu/eurostat/databrowser/bookmark/5f9b89fe-3871-4d84-a764-b42a4dac9a16?lang=en',
        },
        {
          name: 'Ukrstat, Fuel reserves archive 2022',
          url: 'https://www.ukrstat.gov.ua/operativ/operativ2022/energ/zmp/arh_zmp2022_u.htm',
        },
        {
          name: 'Damage caused by the energy infrastructure of Ukraine due to the war, Kyiv School of Economics, 2022-2024',
          url: 'https://map.ua-energy.org/en/resources/9db4e104-22f3-4e9b-b9f6-0f1f3af49161/',
        },
        {
          name: 'Information on massive strikes on Ukraine\'s critical infrastructure, DiXi Group, 2022-2024',
          url: 'https://map.ua-energy.org/en/resources/12f3148d-841a-478d-b9ed-72bf0764b286/',
        },
      ],
    }
  },
}
</script>
