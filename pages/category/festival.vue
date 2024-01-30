<script setup lang="ts">
import {EvatyEventCard, EvatyEventCardAuthor} from "evaty-component-lib";

const {data: category} = await useFetch('https://api.evaty.net/api/v1/event/category/FESTIVAL/?page=0')
const dayjs = useDayjs();
</script>

<template>

  <section class="container pb-150 header-image pt-100">
    <div class="row">
      <div class="col-12 pb-20">
        <h1>{{ $t("categorys.festival.label") }}</h1>
      </div>
      <div class="col-12 header-image-inner-card transparent">
        <div class="row">
          <div class="col-12" style="width: 100%; height: 400px;">
            <mapbox-map map-id="festival-map"
                        style="width: 100%; height: 400px; border-radius: var(--evaty-border-radius, 7px)"
                        :options="{
                          style: 'mapbox://styles/mapbox/streets-v12'
                        }"
            ></mapbox-map>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/categorys/header-images/festival-header.png" alt=""/>
  </section>

  <section class="container pb-150">
    <div class="row">
      <div class="col-12 justify-content-center" v-if="category.content.length <= 0">
        <h2 class="text-center">Hier gibt's leider noch nichts zu sehen</h2>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="event in category.content" :key="event.id">
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
      </div>
    </div>
  </section>
</template>