<script setup lang="ts">
import type {EventEntity} from "~/types/event-entity/event-entity";
import type {MapboxMarkerObject} from "nuxt-mapbox";
import type {LngLatLike, MarkerOptions} from "mapbox-gl";
import {pop} from "@jridgewell/set-array";

const props = defineProps<{ event: EventEntity }>();
const nuxt  = useNuxtApp();

const dayjs = useDayjs();
const marker = ref(null)
const popup = ref(null)
const lnglat: LngLatLike = ref({lng: props.event.location.lng, lat: props.event.location.lat})
const popupRef = defineMapboxPopup(props.event.id, {lnglat: lnglat, offset: [0, 0]}, , useNuxtApp().$mapID);
const markerRef = defineMapboxMarker(props.event.id, {lnglat: lnglat.value}, marker, (marker) => {
  marker.setPopup(popupRef);
})

function definePopup() {
  popupRef.o
}
</script>
<template>
  <div class="map-marker" ref="marker" @click="">
    <span class="evaty-color-text">
      {{ isToday(new Date(event.dates[0].startTime)) ? 'Heute' : dayjs(event.dates[0].startTime).format('DD.MM.YYYY')}}
    </span>
  </div>
  <div class="map-popup" ref="popup">
    <evaty-event-result :event="event"></evaty-event-result>
  </div>
</template>


<style>
.map-marker {
  background-color: var(--evaty-color-container);
  padding: 5px 10px;
  border-radius: 20px;

  display: inline-flex;
  gap: 5px;

  font-size: 14px;
  font-weight: 700;
  font-family: var(--font-family);
  cursor: pointer;
}
</style>