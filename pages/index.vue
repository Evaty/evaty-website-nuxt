<template>
  <section
      id="hero-search"
      class="position-relative mb-150"
      :style="`background: url(${headerImage}) fixed left;`"
  >
    <div class="hero-inner">
      <div class="container">
        <div class="row">
          <div class="hero-search-container col-12 offset-lg-1 col-lg-10 offset-xl-6 col-xl-6">
            <!--            <form action="/listing/search" method="get">-->
            <h1>
              <span
                  class="primary text-gradient">
                {{ $t('page.home.header.title.primary') }}
              </span>{{ $t('page.home.header.title.secondary') }}
            </h1>
            <evaty-form-group name="Suche" class="pt-30 pb-20">
              <template #label>{{ $t('general.search') }}</template>
              <input
                  type="text"
                  name="search"
                  id="search-field"
                  placeholder="Hurricane fest..."
                  required
                  v-model="searchValue"
                  @submit="handleSearch"
              />
            </evaty-form-group>
            <evaty-button type="primary" block @click="handleSearch">{{ $t('general.search') }}</evaty-button>
            <!-- TODO enable when location serach is enabled-->
            <div class="d-flex justify-content-center pt-10" v-if="false">
              <router-link to="/location" class="text-center"
              ><span class="evaty-link evaty-color-text-primary-500 text-center"
              >oder nach Orten suchen</span
              >
              </router-link>
            </div>
            <!--            </form>-->
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center bounce" style="height: 50px; fill: white" id="down-click">
      <evaty-icons-arrow-down></evaty-icons-arrow-down>
      <!--            {{ // include('../resources/assets/icons/arrow-down.svg') }}-->
    </div>
  </section>

  <section id="next-year" class="container pb-150">
    <div class="row pb-20">
      <div class="col-12">
        <h2>🎉 Festival Season 2024</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <evaty-event-stream
            path="v1/list/a7cee3a4-168b-41da-9cb8-8091066a3772/events/"/>
      </div>
    </div>
  </section>


  <section class="container pb-150">
    <div class="row pb20">
      <div class="col-12">
        <h2>{{ $t('page.home.locations.title') }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <swiper
            :modules="modules"
            navigation
            grab-cursor
            :space-between="24"
            :slides-per-view="1"
            :lazy-preload-prev-next="1"
            :breakpoints="{ 576: {slidesPerView: 2, spaceBetween: 24}, 992: { slidesPerView: 4, spaceBetween: 24 } }"
            class="swiper-overflow"
        >
          <swiper-slide v-for="city in citys" :key="city.city">
            <evaty-town-card :href="'/map?' + city.coords" :src="city.img">
              <template #name>{{ $t('general.geo.citys.' + city.city) }}</template>
              <template #country>{{ $t('general.geo.countrys.' + city.country) }}</template>
            </evaty-town-card>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <EvatyTeaserDownload/>

  <section id="category" class="mb-150 container">
    <div class="row pb-20">
      <div class="col-12">
        <h2>{{ $t('page.home.recommended-categorys') }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-xl-2 col-6 col-md-4">
            <evaty-image-card :src="catConcert" href="/category/concert">
              {{ $t('categorys.concert.label') }}
            </evaty-image-card>
          </div>
          <div class="col-xl-2 col-6 col-md-4">
            <evaty-image-card :src="catFestival" href="/category/festival">
              {{ $t('categorys.festival.label') }}
            </evaty-image-card>
          </div>
          <div class="col-xl-2 col-6 col-md-4">
            <evaty-image-card :src="catAdventure" href="/category/adventure">
              {{ $t('categorys.adventure.label') }}
            </evaty-image-card>
          </div>
          <div class="col-xl-2 col-6 col-md-4">
            <evaty-image-card :src="catFitness" href="/category/fitness">
              {{ $t('categorys.fitness.label') }}
            </evaty-image-card>
          </div>
          <div class="col-xl-2 col-6 col-md-4">
            <evaty-image-card :src="catClub" href="/category/club">
              {{ $t('categorys.club.label') }}
            </evaty-image-card>
          </div>
          <div class="col-xl-2 col-6 col-md-4">
            <evaty-image-card :src="catFleamarket" href="/category/fleamarket">
              {{ $t('categorys.market.fleamarket') }}
            </evaty-image-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {EvatyButton, EvatyFormGroup, EvatyImageCard, EvatyTownCard} from 'evaty-component-lib'

// import 'swiper/css'
// import 'swiper/css/navigation'

import headerImage from '@/assets/images/home/header/festival-24-season.jpg'
import catConcert from '@/assets/images/categorys/concert.png'
import catFestival from '@/assets/images/categorys/festival.png'
import catAdventure from '@/assets/images/categorys/experiences.png'
import catFitness from '@/assets/images/categorys/fitness.png'
import catClub from '@/assets/images/categorys/club.png'
import catFleamarket from '@/assets/images/categorys/fleamarket.png'

import hamburg from '@/assets/images/home/de/hamburg.jpg';
import berlin from '@/assets/images/home/de/berlin.jpg'
import koeln from '@/assets/images/home/de/koeln.jpg'
import muenchen from '@/assets/images/home/de/muenchen.jpg'
import bielefeld from '@/assets/images/home/de/bielefeld.jpg'
import bremen from '@/assets/images/home/de/bremen.jpg'
import dortmund from '@/assets/images/home/de/dortmund.jpg'
import duesseldorf from '@/assets/images/home/de/duesseldorf.jpg'
import frankfurt from '@/assets/images/home/de/frankfurt.jpg'
import hannover from '@/assets/images/home/de/hannover.jpg'
import kiel from '@/assets/images/home/de/kiel.jpg'
import leipzig from '@/assets/images/home/de/leipzig.jpg'
import muenster from '@/assets/images/home/de/muenster.jpg'
import nuernberg from '@/assets/images/home/de/nuernberg.jpg'
import stuttgart from '@/assets/images/home/de/stuttgart.jpg'

import {Navigation} from 'swiper/modules'

const modules = [Navigation]
const citys = [
  {
    city: 'hamburg',
    country: 'germany',
    img: hamburg,
    coords: 'lng=9.9958856&lat=53.5447807'
  },
  {
    city: 'berlin',
    country: 'germany',
    img: berlin,
    coords: 'lng=13.352283&lat=52.5029534'
  },
  {
    city: 'koeln',
    country: 'germany',
    img: koeln,
    coords: 'lng=6.9553952&lat=50.9528412'
  },
  {
    city: 'muenchen',
    country: 'germany',
    img: muenchen,
    coords: 'lng=11.4717963&lat=48.155004'
  },
  {
    city: 'bielefeld',
    country: 'germany',
    img: bielefeld,
    coords: 'lng=8.5101396&lat=52.0124882'
  },
  {
    city: 'dortmund',
    country: 'germany',
    img: dortmund,
    coords: 'lng=7.465263252528956&lat=51.51413405946201'
  },
  {
    city: 'bremen',
    country: 'germany',
    img: bremen,
    coords: 'lng=8.80716499999994&lat=53.07581999999999'
  },
  {
    city: 'duesseldorf',
    country: 'germany',
    img: duesseldorf,
    coords: 'lng=6.776313999999957&lat=51.225402'
  },
  {
    city: 'frankfurt',
    country: 'germany',
    img: frankfurt,
    coords: 'lng=8.496482&lat=50.1213479'
  },
  {
    city: 'hannover',
    country: 'germany',
    img: hannover,
    coords: 'lng=9.7076941&lat=52.3671053'
  },
  {
    city: 'kiel',
    country: 'germany',
    img: kiel,
    coords: 'lng=10.0556377&lat=54.3418926'
  },
  {
    city: 'leipzig',
    country: 'germany',
    img: leipzig,
    coords: 'lng=12.212028&lat=51.3421989'
  },
  {
    city: 'muenster',
    country: 'germany',
    img: muenster,
    coords: 'lng=7.5606097&lat=51.9457937'
  },
  {
    city: 'nuernberg',
    country: 'germany',
    img: nuernberg,
    coords: 'lng=10.9333827&lat=49.3825054'
  },
  {
    city: 'stuttgart',
    country: 'germany',
    img: stuttgart,
    coords: 'lng=9.1322008&lat=48.7745134'
  }
]
let searchValue = ref();

useJsonld([{
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://evaty.net',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://evaty.net/search?search={search_term_string}'
    },
    'query-input': "required name=search_term_string"
  }
},
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'image': 'https://evaty.net/assets/images/logo/evaty-logo-full-color.svg',
    url: 'https://evaty.net',
    sameAs: ['https://www.threads.net/@evaty_app', 'https://www.instagram.com/evaty_app/', 'https://www.tiktok.com/@evatyapp'],
    logo: 'https://evaty.net/assets/images/logo/evaty-logo-simple.png',
    name: 'Evaty',
    description: 'Ein Platz für alles, was du erleben möchtest.',
    email: 'info@evaty.net'
  }]);
function handleSearch() {
  if(searchValue.value.isEmpty) return;
  useRouter().push({path: '/search', query: {search: searchValue.value}})
}

</script>
