<template>
  <div class="act-user mt-100" v-if="!pending">
    <section class="container map pb-100">
      <div class="row">
          <div class="col-12 pb-20">
            <div class="row">
              <div class="col-2">
                <img
                    :src="`https://api.evaty.net/api/v2/media/${user.profileImage.id}/image/`"
                    alt=""
                    class="event-profile-picture"
                />
              </div>
              <div class="col-auto host-info">
                <div class="display-name">
                  {{ user.displayName || user.username }}

                  <div class="user-badges" v-if="user.badges !== null">
                    <template v-for="badge in getFilteredBadges(user)" :key="badge.name">
                      <i
                          :class="`fa-light fa-${badge.icon}`"
                          :style="{ color: badge.badgeColor }"
                      ></i>
                    </template>
                  </div>
                </div>
                <div class="bio" v-html="user.bio"></div>
                <div class="user-link" v-if="user.link">
                  <a :href="user.link"
                  ><i class="fa-light fa-link"></i> {{ user.link }}</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 {% if not loop.last %}pb-30{% endif %}">
            <div class="user-badges" v-if="user.badges !== null">
              <div
                  class="user-badge"
                  v-for="badge in getReversedFilteredBadges(user)"
                  :key="badge.name"
              >
                <i :class="`fa-light fa-${badge.icon}`" :style="{ color: badge.badgeColor }"></i>
                <span>{{ $t(badge.name) }}</span>
              </div>
            </div>
            <template v-if="user.description">
              {{ user.description }}
            </template>
          </div>
      </div>
    </section>

    <section class="container">
      <EvatyTabs>
        <evaty-tab title="Events" active="true">
mooo
        </evaty-tab>
        <evaty-tab title="Tritt auf">
maaa
        </evaty-tab>
      </EvatyTabs>
    </section>
  </div>
  <div v-else>
    <div>
      <i class="fa-regular fa-spinner-third fa-spin"></i>
    </div>
    <div class="fw-bold">
      Loading
    </div>
  </div>
</template>

<script setup>
import {EvatyTab, EvatyTabs} from "evaty-component-lib";
const {id} = useRoute().params;
const {data: user, pending} = await useFetch(`https://api.evaty.net/api/v1/user/${id}/`, {lazy: true})

useHead({
  bodyAttrs: {
    class: 'act-event'
  }
})

function getFilteredBadges(host) {
  return host.badges?.filter(
      (badge) => badge.name === 'general.badges.verified' || badge.name === 'general.badges.artist'
  )
}

function getReversedFilteredBadges(host) {
  if (host.badges) {
    return host.badges?.filter(
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