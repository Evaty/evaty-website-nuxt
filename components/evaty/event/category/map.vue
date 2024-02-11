<script setup lang="ts">
import type {EventEntity} from "~/types/event-entity/event-entity";
import {EvatySearchResultCard} from "evaty-component-lib";

const dayjs = useDayjs();
const props = defineProps<{
  stream: EventEntity[]
}>()

function selectEventFromMap(id: string) {
  const element = document.getElementById(id);
  if (element == null) return;
  element.scrollTo();
  element.style.boxShadow = "0px 0px 10px red";
}
</script>
<template>
  <div>
    <mapbox-map map-id="adventure-map"
                style="width: 100%; height: 400px; border-radius: var(--evaty-border-radius, 7px)"
                :options="{
                          style: 'mapbox://styles/mapbox/streets-v12',
                          center: [5.9691769, 51.0968637],
                          zoom: 4
                        }"
    >
      <mapbox-default-marker
          v-for="event in stream"
          @click="selectEventFromMap(event.id)"
          style="cursor: pointer"
          :lnglat="[event.location.lng, event.location.lat]"
          :marker-id="event.id">
        <mapbox-default-popup>
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
        </mapbox-default-popup>
      </mapbox-default-marker>
    </mapbox-map>
  </div>
</template>
<style>
.mapboxgl-popup {
  .mapboxgl-popup-tip {
    display: none;
  }
  .mapboxgl-popup-content {
    padding: 0;
    margin-top: 10px;
    background: none;
    min-width: 400px;
  }
}
</style>