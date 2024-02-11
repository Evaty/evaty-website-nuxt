<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'evaty-navigation',
})
</script>

<template>
  <div class="navigation-wrapper">
    <div class="navigation-container container">
      <div class="container-left">
        <div class="logo-container">
          <nuxt-link to="/"><img src="@/assets/images/logo/evaty-logo-minimal-color.svg" alt=""></nuxt-link>
        </div>

        <div class="menu-container d-none d-md-block">
          <nav>
            <nuxt-link to="/" :class="{ 'menu-link': true }">{{ $t("layout.navigation.home") }}</nuxt-link>
            <div class="dropdown">
              <a :class="{ 'menu-link': true, 'dropbtn': true }">{{ $t("layout.navigation.category") }}</a>
              <div class="dropdown-content">
                <nuxt-link to="/category/concert" :class="{ 'menu-link': true }">
                  {{ $t("categorys.concert.label") }}
                </nuxt-link>
                <nuxt-link to="/category/festival" :class="{ 'menu-link': true }">
                  {{ $t("categorys.festival.label") }}
                </nuxt-link>
                <nuxt-link to="/category/adventure" :class="{ 'menu-link': true }">
                  {{ $t("categorys.adventure.label") }}
                </nuxt-link>
                <nuxt-link to="/category/fitness" :class="{ 'menu-link': true }">
                  {{ $t("categorys.fitness.label") }}
                </nuxt-link>
                <nuxt-link to="/category/club" :class="{ 'menu-link': true }">
                  {{ $t("categorys.club.label") }}
                </nuxt-link>
                <nuxt-link to="/category/fleamarket" :class="{ 'menu-link': true }">
                  {{ $t("categorys.market.fleamarket") }}
                </nuxt-link>
              </div>
            </div>
            <nuxt-link to="/about" :class="{ 'menu-link': true }">{{ $t("layout.navigation.about") }}</nuxt-link>
            <nuxt-link to="/map" :class="{ 'menu-link': true }">{{ $t("layout.navigation.map") }}</nuxt-link>
          </nav>
        </div>
      </div>

      <div class="container-right d-md-flex">
        <!--                <a href="/account" class="login-link d-none d-md-block"-->
        <!--                   v-if="$page.props.auth.user">{{ $page.props.auth.user.name }}</a>-->
        <!--                <template v-else>-->
        <!--                    <nuxt-link to="/login" class="login-link d-none d-md-block">Anmelden</nuxt-link>-->
        <!--                    <nuxt-link to="/register" class="evaty-button btn-small btn-primary d-none d-md-block text-uppercase">Registrieren-->
        <!--                    </nuxt-link>-->
        <!--                </template>-->

        <!--            Hamburger Mobile Navigation-->
        <a href="/" class="btn btn-light back-to-page d-none">Zurück zur Seite</a>
        <div class="burger-menu d-block d-md-none">
          <button class="hamburger hamburger--collapse" type="button">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
          </button>
        </div>
      </div>
    </div>
    <div class="navigation-spacer-line"></div>
  </div>
</template>

