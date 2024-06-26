<template>
  <h1>Produkcja</h1>
  <p>Podczas gdy większość państw europejskich zmaga się z rosnącym zapotrzebowaniem na energię elektryczną oraz niedoborem energii, Ukraina od lat redukuje wytwarzanie.</p>
  <figure>
    <img src="~/public/production-1.svg">
    <figcaption>Źródło: IEA</figcaption>
  </figure>

  <h2>Miks energetyczny</h2>
  <iframe
    width="750"
    height="422"
    src="https://lookerstudio.google.com/embed/reporting/c4860f19-73c9-43a8-8cea-387961117a8b/page/p_tu3a66y9gd"
    frameborder="0"
    style="border:0"
    allowfullscreen
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
  />

  <p>
    Ukraina posiada zróżnicowany miks energetyczny.
    Posiada wiele konwencjonalnych jednostek wytwórczych zasilanych węglem kamiennym lub gazem (TPP - <i>Thermal Power Plant</i>).
    Oprócz elektrowni zasilanych paliwami kopalnymi, Ukraina posiada również elektrociepłownie, służące do zasilania miast w ciepło (CHP - <i>Combined Heat Power Plant</i>).
    Energetyka jądrowa była rozwijana na terenie Ukrainy jeszcze w czasach przynależności do Związku Radzieckiego (NPP - <i>Nuclear Power Plant</i>).
    Bezemisyjnym źródłem mocy jest również energetyka wodna, która w Ukrainie stanowi ponad 10% zainstalowanej mocy w elektrowniach wodnych (HPP - <i>Hydro Power Plant</i>) oraz elektrowniach szczytowo-pompowych (PSHPP - <i>Pumped Storage Hydro Power Plant</i>).
    Ostatnie lata to też rozwój odnawialnych źródeł energii, wykorzystując energię wiatru (WPP - <i>Wind Power Plant</i>) oraz fotowoltaikę (SPP - <i>Solar Power Plant</i>).
  </p>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Skrót
        </th>
        <th class="text-left">
          Pełna nazwa
        </th>
        <th class="text-left">
          Tłumaczenie
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="abb in abbr"
        :key="abb.abbr"
      >
        <td>{{ abb.abbr }}</td>
        <td>{{ abb.meaning }}</td>
        <td>{{ abb.polski }}</td>
      </tr>
    </tbody>
  </v-table>
  <br>
  <p>Zmiany mocy zainstalowanej w latach 2010-2022:</p>
  <iframe
    width="750"
    height="422"
    src="https://lookerstudio.google.com/embed/reporting/c4860f19-73c9-43a8-8cea-387961117a8b/page/LLMzD"
    frameborder="0"
    style="border:0"
    allowfullscreen
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
  />
  <p>Powyższy podział zrobiony jest według rodzaju zakładu. Patrząc mniej szczegółowo, tak przedstawia się podział mocy zainstalowanej [MW] według udziału energii pierwotnej.</p>
  <iframe
    width="750"
    height="422"
    src="https://lookerstudio.google.com/embed/reporting/cd3a9360-bd15-4533-830a-4bc7fe9e0bbe/page/p_65yvdkz9gd"
    frameborder="0"
    style="border:0"
    allowfullscreen
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
  />

  <h2 id="map">
    Położenie jednostek wytwórczych
  </h2>
  <p>Elektrownie są rozproszone na terenie całego państwa, choć można wyróżnić strefy przemysłowe, gdzie zagęszczenie jednostek wytwórczych jest większe.</p>
  <figure>
    <iframe
      width="750"
      height="422"
      src="https://lookerstudio.google.com/embed/reporting/cd3a9360-bd15-4533-830a-4bc7fe9e0bbe/page/wrGtD"
      frameborder="0"
      style="border:0"
      allowfullscreen
      sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    />
    <figcaption>Źródło: Global Power Plant Database, 2021</figcaption>
  </figure>

  <h2>Produkcja ciepła</h2>
  <figure>
    <img src="~/public/heat-generation.svg">
    <figcaption>Źródło: IEA</figcaption>
  </figure>
</template>

<script>
export default {
  data() {
    return {
      abbr: [
        { abbr: 'TPP', meaning: 'Thermal Power Plant', polski: 'Elektrownia konwencjonalna' },
        { abbr: 'CHP', meaning: 'Combined Heat Power Plant', polski: 'Elektrociepłownia' },
        { abbr: 'NPP', meaning: 'Nuclear Power Plant', polski: 'Elektrownia jądrowa' },
        { abbr: 'HPP', meaning: 'Hydro Power Plant', polski: 'Elektrownia wodna' },
        { abbr: 'PSHPP', meaning: 'Pumped Storage Hydro Power Plant', polski: 'Elektrownia szczytowo-pompowa' },
        { abbr: 'WPP', meaning: 'Wind Power Plant', polski: 'Elektrownia wiatrowa' },
        { abbr: 'SPP', meaning: 'Solar Power Plant', polski: 'Elektrownia słoneczna' },

      ],
    }
  },
}
</script>
