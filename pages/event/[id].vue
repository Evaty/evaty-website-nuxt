<template>
  <div class="act-event mt-100" v-if="!pending">
    <section class="container container pb-100">
      <evaty-gallery :images="event.media.map(entry => entry.url)" teleport=".content-wrapper"></evaty-gallery>
    </section>

    <section class="event-information container pb-80">
      <div class="row">
        <div class="col-12">
          <h1>{{ event.name }}</h1>
        </div>
        <div class="col-12 category-label">
          <p>{{ $t(event.category.label) }}</p>
        </div>
        <div class="col-12">
          <div class="event-description" v-html="event.description"></div>
        </div>
      </div>
      <div class="row information-lists">
        <div class="col-md-6 col-12" v-if="event.eventHighlights?.length > 0">
          <h2 class="list-headline">Highlights</h2>
          <div class="row list">
            <div
                class="list-item col-6 pb-20"
                v-for="highlight in event.eventHighlights"
                :key="highlight.key"
            >
              <div class="list-item-head">
                <i :class="`fa-regular fa-${highlight.icon} list-icon`"></i>
                {{ highlight.label.text }}
              </div>
              <div class="list-item-body">{{ highlight.explanation.text }}</div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12" v-if="event.eventPlanningReliability?.length > 0">
          <h2 class="list-headline">Planungssicherheit</h2>
          <div class="row list">
            <div
                class="list-item col-6 pb-20"
                v-for="plan in event.eventPlanningReliability"
                :key="plan.key"
            >
              <div class="list-item-head">
                <i :class="`fa-regular fa-${plan.icon} list-icon`"></i> {{ plan.label.text }}
              </div>
              <div class="list-item-body">{{ plan.explanation.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <evaty-event-lineup :id="id"/>

    <section class="container tickets pb-100" v-if="event.dates.length > 0">
      <div class="row">
        <div class="col-12">
          <h2>Wann findet es statt?</h2>
        </div>

        <div class="col-12" v-for="(date, n) in event.dates" :key="n">
          <evaty-card>
            <div class="d-flex justify-content-between align-items-center flex-md-row flex-column">
              <div class="left d-flex gap-5 align-items-center flex-md-row flex-column">
                <div class="date-container text-center">
                  <div class="upper h1">
                    <template v-if="isSameDay(new Date(date.startTime), new Date(date.endTime))">
                      {{ new Date(date.startTime).toDateString() }}
                    </template>
                    <template v-else>
                      {{ dayjs(date.startTime).format('DD') }}-{{
                        dayjs(date.endTime).format('DD')
                      }}
                    </template>
                  </div>
                  <div class="down month">
                    {{ dayjs(date.startTime).format('MMMM YYYY') }}
                  </div>
                </div>
                <div class="info-container">
                  <div class="upper h3 fw-semibold name">{{ event.name }}</div>
                  <div class="down loc-label">{{ event.locationMeta.label }}</div>
                </div>
              </div>

              <template v-if="date.ticketCollection !== null">
                <!-- TODO Add TicketCollection Support-->
                <h1>TODO: TICKET COLLECTION</h1>
                <!--
                <div class="right">
                <div class="upper text-center price-container" v-if="date.ticketCollerction.ticketEntities[0]">
                  {% if ticket.price is defined %}
                  ab {{ (ticket.price + (ticket.price*ticket.vat))*100|number_format(2, '.', ',') }}€
                  {% endif %}
                  {#                                                ab @money(($ticket->price + ($ticket->price*$ticket->vat))*100, "EUR") #}
                </div>
                <div class="down">
                  <a href="/tickets/{{ date.ticketCollection.id }}"
                     class="btn-primary btn buy-tickets-btn">Tickets</a>
                </div>
              </div>
              -->
              </template>
              <template v-else-if="date.ticketLink !== null">
                <div class="right">
                  <div class="upper text-center price-container" v-if="date.ticketPriceFrom">
                    ab {{ date.ticketPriceFrom }}€
                  </div>
                  <div class="down">
                    <nuxt-link :to="date.ticketLink" target="_blank">
                      <evaty-button>Tickets</evaty-button>
                    </nuxt-link>
                  </div>
                </div>
              </template>
            </div>
          </evaty-card>

          <!--          <div class="evaty-card date-card {% if not loop.last %} mb-20 {% endif %}">-->
          <!--            <div-->
          <!--                class="card-inner d-flex justify-content-between align-items-center flex-md-row flex-column"-->
          <!--            >-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </section>

    <section class="container map pb-100">
      <div class="row">
        <div class="col-12">
          <h2>Wo findet es statt?</h2>
        </div>
        <div class="col-12">
          <div class="position-relative" style="width: 100%; height: 500px;">
            <mapbox-map
                :map-id="`${id}-map`"
                style="width: 100%; height: 500px;"
                :options="{
                  style: 'mapbox://styles/mapbox/streets-v12', // style URL
                  center: [event.location.lng, event.location.lat], // starting position
                  zoom: 11 // starting zoom
                }"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container map pb-100">
      <div class="row">
        <div class="col-12">
          <h2>Wer veranstaltet?</h2>
        </div>

        <template v-for="host in event.hosts" :key="host.id">
          <div class="col-12 pb-20">
            <div class="row">
              <div class="col-2">
                <img
                    :src="`https://api.evaty.net/api/v2/media/${host.userProfile.avatarMediaId}/image/`"
                    alt=""
                    class="event-profile-picture"
                />
              </div>
              <div class="col-auto host-info">
                <div class="display-name">
                  {{ host.userProfile.displayName || host.username }}

                  <div class="user-badges" v-if="host.userProfile.badges !== null">
                    <template v-for="badge in getFilteredBadges(host)" :key="badge.name">
                      <i
                          :class="`fa-light fa-${badge.icon}`"
                          :style="{ color: badge.badgeColor }"
                      ></i>
                    </template>
                  </div>
                </div>
                <div class="bio" v-html="host.userProfile.bio"></div>
                <div class="user-link" v-if="host.userProfile.link">
                  <a :href="host.userProfile.link"
                  ><i class="fa-light fa-link"></i> {{ host.userProfile.link }}</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 {% if not loop.last %}pb-30{% endif %}">
            <div class="user-badges" v-if="host.userProfile.badges !== null">
              <div
                  class="user-badge"
                  v-for="badge in getReversedFilteredBadges(host)"
                  :key="badge.name"
              >
                <i :class="`fa-light fa-${badge.icon}`" :style="{ color: badge.badgeColor }"></i>
                <span>{{ $t(badge.name) }}</span>
              </div>
            </div>
            <template v-if="host.userProfile.description">
              {{ host.userProfile.description }}
            </template>
          </div>
        </template>
      </div>
    </section>
  </div>
  <div v-else class="loading">
    <i class="fa-regular fa-spinner-third fa-spin"></i>
    Loading
  </div>
</template>

<script setup>
import {EvatyGallery, EvatyButton, EvatyCard} from "evaty-component-lib";
import {useDayjs} from "#dayjs";
import {useHead} from "@unhead/vue";

const {id} = useRoute().params;
const dayjs = useDayjs();

const uri = 'https://api.evaty.net/api/v1/event/' + id;
const {data: event, pending} = await useLazyFetch(uri, {key: id});

useHead({
  title: event.value?.name
})

function getFilteredBadges(host) {
  return host.userProfile.badges?.filter(
      (badge) => badge.name === 'general.badges.verified' || badge.name === 'general.badges.artist'
  )
}

function getReversedFilteredBadges(host) {
  if (host.userProfile.badges) {
    return host.userProfile.badges?.filter(
        (badge) => badge.name !== 'general.badges.verified' && badge.name !== 'general.badges.artist'
    )
  }
  return []
}

</script>
<style scoped>
.loading {
  height: calc(100vh - 79px);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
}
</style>