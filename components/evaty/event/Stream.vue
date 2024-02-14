<template>
  <div>
    <Swiper
        :modules="[Navigation]"
        navigation
        grab-cursor
        :space-between="24"
        :slides-per-view="1"
        :lazy-preload-prev-next="1"
        :breakpoints="{ 576: {slidesPerView: 2, spaceBetween: 24}, 992: { slidesPerView: 3, spaceBetween: 24 } }"
        class="swiper-overflow">

      <template v-if="pending">
        <SwiperSlide v-for="n in 5">
          <evaty-event-card-skeleton></evaty-event-card-skeleton>
        </SwiperSlide>
      </template>
      <template v-else>
        <SwiperSlide v-for="event in stream?.content">
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
        </SwiperSlide>
      </template>

    </Swiper>
  </div>
</template>

<script setup lang="ts">
import {EvatyEventCard, EvatyEventCardAuthor, EvatyEventCardSkeleton} from "evaty-component-lib";
import {Navigation} from "swiper/modules";

let page = ref(0);
const dayjs = useDayjs();
const props = defineProps({
  path: {
    type: String,
    required: true
  }
})

const { pending, data: stream } = useFetch('https://api.evaty.net/api/' + props.path + '?page=' + page.value, {
  lazy: true,
  server: false
})
</script>

<style scoped>

</style>