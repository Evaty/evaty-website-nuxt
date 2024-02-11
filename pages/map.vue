<template>
  <div class="map-wrapper position-relative">
    <MapboxMap map-id="map" @load="onMapLoad" :options="{zoom:7, center: mapOptions.center, language: $t('moment-locale')}">
      <mapbox-default-marker v-for="event in suggestionEvents"
                             :key="event.id"
                             :marker-id="event.id"
                             :lnglat="[event.location.lng, event.location.lat]">
        <template #marker>
          <div class="map-marker">
            {{
              isToday(new Date(event.dates[0].startTime)) ? 'Heute' : dayjs(event.dates[0].startTime).format('DD.MM.YYYY')
            }}
          </div>
        </template>
        <mapbox-default-popup :popup-id="event.id"
                              :options="{offset: 10, anchor: 'top', closeOnClick: false, closeOnMove: false}"
                              :lnglat="[event.location.lng, event.location.lat]">
          <nuxt-link :to="'/event/' + event.id">
            <evaty-event-result :event="event"></evaty-event-result>
          </nuxt-link>
        </mapbox-default-popup>
      </mapbox-default-marker>

      <MapboxNavigationControl></MapboxNavigationControl>
      <MapboxGeolocateControl></MapboxGeolocateControl>
    </MapboxMap>
  </div>
</template>
<script setup lang="ts">
import distance from '@turf/distance'
import type {EventEntity} from "~/types/event-entity/event-entity";
const dayjs = useDayjs();

const router = useRouter();
const route = useRoute();
const mapRef = useMapboxRef("map");
const suggestionEvents = ref<EventEntity[]>([]);
const loadingState = ref(false);
const pageable = ref({currentPage: 0, totalPages: 0});
let mapOptions = ref({
  center: [0, 0],
  zoom: 0
})

function onMapLoad() {
  registerMapEvents();
  fetchEventSuggestions(mapRef.value?.getCenter().lng, mapRef.value?.getCenter().lat, false);
}

function determineInitialMapPosition() {
  const {lng, lat} = route.query;
  mapOptions.value.center = lng && lat ? [parseFloat(lng), parseFloat(lat)] : [10.4541194, 51.1758057];
  mapOptions.value.zoom = lng && lat ? 8 : 5;
}

async function fetchEventSuggestions(lng: number, lat: number, merge: boolean) {
  loadingState.value = true;
  console.log(0)
  try {
    console.log(1)
    const data = await fetchSuggestionData(lng, lat, pageable.value.currentPage + 1);
    let events = [...suggestionEvents.value, ...data];
    let uniqEvents = [...new Map(events.map(item =>
        [item['id'], item])).values()]
    if (uniqEvents.length !== suggestionEvents.value.length) {
      suggestionEvents.value = uniqEvents;
      events.forEach(item => {
        useMapboxPopup(item.id, (popup) => {
          popup.remove();
        })
      })
    }
    await router.push({path: '/map', replace: true, query: {lng, lat}});
  } finally {
    loadingState.value = false;
  }
}

async function fetchSuggestionData(lng: number, lat: number, page: number = 0): Promise<EventEntity[]> {
  return new Promise((resolve, reject) => {
    if (mapRef.value == null) return reject();
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
    $fetch("https://api.evaty.net/api/v2/event/search/?" + query.toString())
        .then((data) => {
          const body = data.body;
          console.log(body)
          pageable.value.totalPages = body.totalPages;
          pageable.value.currentPage = body.pageable.pageNumber;
          resolve(body.content);
        });
  })
}

function registerMapEvents() {
  mapRef.value?.on('moveend', (event) => {
    const center = event.target.getCenter()
    fetchEventSuggestions(center.lng, center.lat, false)
  })
}

determineInitialMapPosition();
</script>
<style lang="scss">
.map-wrapper {
  height: calc(100vh - 79px);
  width: 100%;
  overflow: hidden;

  #map {
    //height: 100%;
    //width: 100%;
  }

  .map-marker {
    background-color: var(--evaty-color-container);
    padding: 5px 10px;
    border-radius: 20px;

    display: inline-flex;
    gap: 5px;

    font-size: 14px;
    font-weight: 700;
    font-family: var(--evaty-font-family);
    cursor: pointer;
  }

  .mapboxgl-popup-close-button {
    z-index: 10;
    top: 5px;
    right: 5px;
    background-color: var(--evaty-color-container);
    color: var(--evaty-color-text);
    border-radius: 20px;
    font-size: 25px;
    width: 30px;
    height: 30px;
    opacity: .9;
  }
}

/*
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

      .mapboxgl-ctrl-geocoder--input {
        border-radius: 7px;
      }

      @media screen and (prefers-color-scheme: dark) {
        background: transparent;
        .mapboxgl-ctrl-geocoder--input {
          background-color: var(--evaty-color-container);
          color: var(--evaty-color-text);
          border-radius: 7px;
        }
        .mapboxgl-ctrl-geocoder--button {
          background: transparent;
        }
        .suggestions {
          background-color: var(--evaty-color-container);

          > li > a {
            color: var(--evaty-color-text);

            &:hover {
              background-color: var(--evaty-color-background);
            }

          }

          > .active > a {
            background-color: var(--evaty-color-background);
          }
        }
      }
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
  //width: 77%;
  height: calc(100vh - 79px);
  position: relative;
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
}*/
</style>
<style>
.mapboxgl-popup {
  .mapboxgl-popup-tip {
    display: none;
  }

  .mapboxgl-popup-content {
    padding: 0;
    margin-top: 10px;
    background: none;
    min-width: 350px;
  }
}
</style>