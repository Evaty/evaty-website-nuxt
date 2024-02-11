<template>
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
</template>
<script lang="ts" setup>
import {EvatySearchResultCard} from "evaty-component-lib";
import type {EventEntity} from "~/types/event-entity/event-entity";

const dayjs = useDayjs();
const props = defineProps<{
  event: EventEntity
}>();
</script>