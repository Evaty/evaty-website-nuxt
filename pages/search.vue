<template>
  <section class="container pb-50 mt-100">
    <div class="pb-100">
      <h1>{{$t('page.search.for')}} {{ route.query.search }}</h1>
    </div>
    <div v-if="!pending">
      <div v-if="suggestions.content.length <= 0">
        <div class="d-flex align-items-center gap-3 my-150 flex-column">
          <div>{{ $t('page.search.empty') }}</div>
          <div>
            <nuxt-link to="/">
              <evaty-button>{{ $t('page.search.back') }}</evaty-button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 pb-30" v-for="event in suggestions.content" :key="event.id">
        <evaty-search-result-card :src="event.media.url">
          <template #title>{{event.name}}</template>
          <template #category>{{$t(event.category.label)}}</template>
          <template #date v-if="event.nextDate">
                      <span
                          :class="{
                          'evaty-color-text-primary-500': true,
                          'evaty-color-text-success-500': isToday(new Date(event.nextDate.startTime))
                        }"
                      >{{
                          isToday(new Date(event.nextDate.startTime))
                              ? 'Heute'
                              : dayjs(event.nextDate.startTime).format('DD. MMMM YYYY')
                        }}
                      </span>
            <template
                v-if="
                          !isFullDay(
                            new Date(event.nextDate.startTime),
                            new Date(event.nextDate.endTime)
                          )
                        "
            >
              <span class="evaty-text-muted">•</span>
              <span class="evaty-text-muted"
              >{{ dayjs(event.nextDate.startTime).format('HH:mm') }} bis
                          {{ dayjs(event.nextDate.endTime).format('HH:mm') }}</span
              >
            </template>
          </template>
        </evaty-search-result-card>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12 col-sm-6 col-lg-4 pb-30" v-for="n in 6">
        <EvatyEventCardSkeleton></EvatyEventCardSkeleton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {EvatySearchResultCard, EvatyEventCardSkeleton, EvatyButton} from "evaty-component-lib";

const dayjs = useDayjs()
const route = useRoute();
const {
  data: suggestions,
  pending
} = useFetch('https://api.evaty.net/api/v1/event/search/?query=' + route.query.search + "&page=" + getPage(), {lazy: true})

function getPage(): number {
  return route.query.page ? parseInt(route.query.search) : 0;
}
</script>

<style scoped>

</style>