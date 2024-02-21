<template>
  <evaty-event-card :src="event.media[0]?.url" :href="`/event/${event.id}`">
    <template #category>{{ $t(event.category.label) }}</template>
    <template #title>{{ event.name }}</template>
    <template #description>{{ event.smallDescription }}</template>
    <template #date>{{ dayjs(event.dates[0].startTime).format('DD.MM.YYYY') }}</template>
    <template #author>
      <evaty-event-card-author
          :src="`https://api.evaty.net/api/v2/media/${event.hosts[0].userProfile?.avatarMediaId}/image/`">
        <span v-if="event.hosts[0]?.userProfile.displayName">{{ event.hosts[0].userProfile.displayName }}</span>
        <span v-else> {{ event.hosts[0].username }}</span>
      </evaty-event-card-author>
    </template>
  </evaty-event-card>
</template>
<script setup lang="ts">
import {EvatyEventCard, EvatyEventCardAuthor} from "evaty-component-lib";
import type {EventEntity} from "~/types/event-entity/event-entity";

const dayjs = useDayjs();
const props = defineProps<{
  event: EventEntity
}>()
</script>