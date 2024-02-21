<script setup lang="ts">
import {EvatyEventCard, EvatyEventCardSkeleton, EvatyEventCardAuthor} from "evaty-component-lib";

const { t } = useI18n()
const {data: category, pending} = await useFetch('https://api.evaty.net/api/v1/event/category/MARKET/FLEAMARKET/?page=0')
const dayjs = useDayjs();

useHead({
  title: t("categorys.market.fleamarket"),
  bodyAttrs: {
    class: "act-category"
  }
})
</script>

<template>

  <section class="container category-header d-flex justify-content-center flex-column mb-100">
    <div class="category-header-headline pb-10">
      <h1 class="mb-0">{{ t("categorys.market.fleamarket") }}</h1>
    </div>
    <div class="category-header-description pb-20">
      {{ t("categorys.market.descriptions.fleamarket") }}
    </div>
    <div class="category-header-count d-flex align-items-center gap-2" v-if="!pending">
      <i class="fa-regular fa-party-horn"></i>
      <div class="category-header-count-inner">
        {{ t("general.events", category.totalElements)}}
      </div>
    </div>
    <img src="@/assets/images/categorys/header-images/fleamarket-header.png" alt=""/>
  </section>

  <section class="container pb-150" v-if="!pending">
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
  <section class="container" v-else>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="n in 9" :key="'skeleton'-n">
        <EvatyEventCardSkeleton></EvatyEventCardSkeleton>
      </div>
    </div>
  </section>
</template>