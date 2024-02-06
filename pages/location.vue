<template>
  <div class="container-fluid d-flex position-relative">
    <div id="side">
      <div id="geocoder-container">
        <mapbox-custom-geocoder
            :options="{
              countries: 'de,nl,be,fr,lu,at,ch,cz,pl',
              types: 'region,place,locality,neighborhood',
            }"
            v-model="geocoderResult"
        />
      </div>
      <div class="search-results">
        <TransitionGroup name="list">
          <div v-for="event in suggestionEvents" :key="event.id">
            <evaty-search-result-card :src="event.media[0]?.url">
              <template #title>{{ event.name }}</template>

              <template
                  #price
                  v-if="event.dates.length > 0 && event.dates[0].ticketPriceFrom !== null"
              >{{ event.dates[0].ticketPriceFrom }} €
              </template>

              <template #category>
                {{ $t(event.category?.label) }}
              </template>
              <template #date v-if="event.dates.length > 0">
                  <span
                      :class="{
                      'evaty-color-text-primary-500': true,
                      'evaty-color-text-success-500': isToday(new Date(event.dates[0].startTime))
                    }"
                  >{{
                      isToday(new Date(event.dates[0].startTime))
                          ? 'Heute'
                          : dayjs(event.dates[0].startTime).format('DD. MMMM YYYY')
                    }}
                  </span>
                <template
                    v-if="
                      !isFullDay(
                        new Date(event.dates[0].startTime),
                        new Date(event.dates[0].endTime)
                      )
                    "
                >
                  <span class="evaty-text-muted">•</span>
                  <span class="evaty-text-muted"
                  >{{ dayjs(event.dates[0].startTime).format('HH:mm') }} bis
                      {{ dayjs(event.dates[0].endTime).format('HH:mm') }}</span
                  >
                </template>
              </template>
            </evaty-search-result-card>
          </div>
        </TransitionGroup>
      </div>
    </div>
    <mapbox-map
        :map-id="mapId"
        :options="{
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [10.4541194, 51.1758057],
          zoom: 5
        }"

    >
    </mapbox-map>
  </div>
</template>
<script setup lang="ts">
import {EvatySearchResultCard} from "evaty-component-lib";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import {onMounted, type Ref} from "vue";
import {watch} from "vue";
import distance from '@turf/distance'
import type {EventEntity} from "~/types/event-entity/event-entity";
import mapboxgl from "mapbox-gl";

const mapId = "location-search";
const mapRef = useMapboxRef(mapId);
const dayjs = useDayjs();
const router = useRouter();
let geocoderResult: Ref<MapboxGeocoder.Result | null> = ref(null)
let suggestionEvents: Ref<EventEntity[]> = ref([])

async function fetchEventSuggestions(lng: number, lat: number) {
  if (mapRef.value == null) return;

  const radius = Math.round(
      distance(mapRef.value.getCenter().toArray(), mapRef.value.getBounds().getSouthWest().toArray(), {
        units: 'kilometers'
      })
  )
  const query = new URLSearchParams({
    lng: lng.toString(),
    lat: lat.toString(),
    page: '0',
    distance: radius.toString()
  })
  const {data: suggestions} = await useFetch("https://api.evaty.net/api/v2/event/search/?" + query.toString(), {
    transform: (response: any) => {
      return response.body.content;
    }
  });
  suggestionEvents.value = suggestions.value;
  await router.push({path: '/location', replace: true, query: {lng: lng, lat: lat}})
  addMarkers()
}

function registerMapEvents() {
  mapRef.value?.on('moveend', (event) => {
    const center = event.target.getCenter()
    fetchEventSuggestions(center.lng, center.lat)
  })

}
function addMarkers(): void {
  for (const event of suggestionEvents.value) {
    if (document.getElementById(`marker-${event.id}`) == null) {
      let el = document.createElement('div')
      el.id = `marker-${event.id}`
      el.className = 'marker'
      new mapboxgl.Marker(el, { offset: [0, -0] })
          .setLngLat([event.location.lng, event.location.lat])
          .addTo(mapRef.value)
    }
  }
}

watch(geocoderResult, async (result) => {
  if (result == null) return;
  if (mapRef.value == null) return;

  let zoom = result.place_type.includes('place')
      ? 12
      : result.place_type.includes('locality')
          ? 13
          : result.place_type.includes('region')
              ? 8
              : 5
  mapRef.value.flyTo({center: [result.center[0], result.center[1]], zoom: zoom})
})

onMounted(() => {
  registerMapEvents();
})
</script>
<style lang="scss">
.container-fluid {
  padding: 0;
}

#side {
  width: 23%;
  max-height: calc(100vh - 79px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  #geocoder-container {
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 20px;
    border-bottom: 2px solid var(--evaty-color-gray-light-200);
    background: var(--evaty-color-background);

    .mapboxgl-ctrl-geocoder {
      min-width: 100%;
    }
  }

  .search-results {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.mapboxgl-map {
  position: inherit;
  width: 77%;
  height: calc(100vh - 79px);
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.marker {
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-image: url('@/assets/images/location.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>