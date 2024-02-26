<template>
  <NuxtLayout>
    <div class="container error-container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <h1>{{error.statusCode}}</h1>
          <h2>{{ $t('page.error.headline') }}</h2>
          <p>{{ $t('page.error.description') }}</p>
          <nuxt-link to="/">
            <evaty-button>
              {{ $t('page.error.back') }}
            </evaty-button>
          </nuxt-link>
        </div>
        <div class="col-12 col-md-6">
          <img src="./assets/images/pages/error/404.png" alt="">
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {EvatyButton} from "evaty-component-lib";
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

useHead({
  title: props.error?.statusCode + ' - Evaty'
})
</script>

<style scoped>
.error-container {
  height: calc(100vh - 79px);
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
  }
}
</style>