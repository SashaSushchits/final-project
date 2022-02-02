<template>
  <div id="ymap">
    <yandex-map :coords="coords" zoom=7 :cluster-options="clusterOptions">
      <ymap-marker
        marker-id="1"
        :coords="coords"
        :balloon="{header: 'Первый'}"
        cluster-name="1"
      ></ymap-marker>
      <ymap-marker
        marker-id="2"
        :coords="coords2"
        :balloon="{header: 'Второй'}"
        cluster-name="2"
      ></ymap-marker>
      <ymap-marker
        marker-id="3"
        :coords="coords3"
        :balloon="{header: 'Третий'}"
        cluster-name="3"
      ></ymap-marker>
      <ymap-marker
        marker-id="4"
        :coords="coords4"
        :balloon="{header: 'Четвёртый'}"
        cluster-name="4"
      ></ymap-marker>
      <ymap-marker
        marker-id="5"
        :coords="coords5"
        :balloon="{header: 'Пятый'}"
        cluster-name="5"
      ></ymap-marker>
      <ymap-marker
        marker-id="6"
        :coords="coords6"
        :balloon="{header: 'Шестой'}"
        cluster-name="6"
      ></ymap-marker>
      <ymap-marker
        marker-id="7"
        :coords="coords7"
        :balloon="{header: 'Седьмой'}"
        cluster-name="7"
      ></ymap-marker>
      <ymap-marker
        marker-id="8"
        :coords="coords8"
        :balloon="{header: 'Восьмой'}"
        cluster-name="8"
      ></ymap-marker>
      <ymap-marker
        marker-id="9"
        :coords="coords9"
        :balloon="{header: 'Девятый'}"
        cluster-name="9"
      ></ymap-marker>
      <ymap-marker
        marker-id="10"
        :coords="coords10"
        :balloon="{header: 'Десятый'}"
        cluster-name="10"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  name: "MapPage",
  components: { yandexMap, ymapMarker },
    data: () => ({
    coords: [53.876497603550575, 27.517332325473294],
    coords2: [53.48960562739654, 26.757242446046327],
    coords3: [52.52184978599066, 31.00965703485328],
    coords4: [53.18984526481862, 29.223122285574988],
    coords5: [53.91368852300218, 30.336903377557753],
    coords6: [55.210735664301524, 30.195379060568705],
    coords7: [52.84272084326498, 27.54922038902332],
    coords8: [53.209282524959136, 26.003809451560972],
    coords9: [53.91400620708538, 25.35561626659876],
    coords10: [55.18196568281897, 27.717676177901726],
    zoom: 10,
    clusterOptions: {
      1: {
        clusterDisableClickZoom: true,
        clusterOpenBalloonOnClick: true,
        clusterBalloonLayout: [
          '<ul class=list>',
          '{% for geoObject in properties.geoObjects %}',
          '<li><a href=# class="list_item">{{ geoObject.properties.balloonContentHeader|raw }}</a></li>',
          '{% endfor %}',
          '</ul>',
        ].join(''),
      },
    },
  }),
}
</script>

<style scoped>
#ymap {
  width: 100%;
  height: 100vh;
}
.dark #ymap >>> .ymaps-2-1-79-ground-pane  {
    filter: grayscale(100%) invert(1);
    -webkit-filter: grayscale(100%) invert(1);

}

.ymap-container {
  height: 100%;
}
</style>>