<script setup lang="ts">
import {EvatyModal, EvatyButton} from "evaty-component-lib";

const {setLocale} = useI18n();
let showModal = ref(false);

function changeLanguage(lang: string) {
  setLocale(lang)
  showModal.value=false;
}
</script>
<template>
  <div id="footer">
    <div class="footer-spacer-line"></div>
    <div class="footer-upper container flex justify-content-between">
      <div class="left" style="max-width: 175px; width: 175px">
        <img style="max-width: 100%" src="@/assets/images/logo/evaty-logo-full-color.svg" alt="">
      </div>
      <div class="right">
        <div class="link-list">
          <div class="footer-link-list-item">
            <span class="footer-link-head">Nützliches</span>
            <span class="footer-link"><a href="https://evaty-app.statuspage.io"
                                         target="_blank">Status</a></span>
<!--            <span class="footer-link"><nuxt-link to="/support">Support Center</nuxt-link></span>-->
          </div>
          <div class="footer-link-list-item">
            <span class="footer-link-head">Für Veranstalter</span>
            <span class="footer-link"><nuxt-link to="/host-yourself">{{ $t("layout.navigation.host-yourself") }}</nuxt-link></span>
            <span class="footer-link"><a href="https://hosts.evaty.net/login"
                                         rel="nofollow">Veranstalter-Login</a></span>
          </div>
          <div class="footer-link-list-item" v-if="false">
            <span class="footer-link-head">HERUNTERLADEN</span>
            <span class="footer-link"><a href="https://apps.apple.com/de/app/evaty/id1562916647"
                                         target="_blank">IPhone</a></span>
            <span class="footer-link">Android</span>
          </div>
          <div class="footer-link-list-item">
            <span class="footer-link-head">Rechtliches</span>
            <span class="footer-link"><nuxt-link to="/imprint">Impressum</nuxt-link></span>
            <span class="footer-link"><nuxt-link to="/privacy">Datenschutz</nuxt-link></span>
            <span class="footer-link"><nuxt-link to="/terms">Nutzungsbedingungen</nuxt-link></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <div class="container">
        <div class="left">
            <span class="copyright">
                © 2019 - {{ new Date().getFullYear() }} Evaty
            </span>
        </div>
        <div class="right">
          <div class="socials">
            <a href="https://www.tiktok.com/@evatyapp" target="_blank"><i
                class="fa-brands fa-tiktok"></i></a>
            <a href="https://www.instagram.com/evaty_app/" target="_blank"><i
                class="fa-brands fa-instagram"></i></a>
            <a href="https://www.threads.net/@evaty_app" target="_blank"><i
                class="fa-brands fa-threads"></i></a>
          </div>
          <div class="language" @click="showModal=true">{{ $t("settings.account.language") }}: {{ $t("currentLang") }}</div>
          <teleport to="body">
            <evaty-modal :show="showModal" @close="showModal=false">
              <template #header>{{ $t('settings.account.language-title') }}</template>
              <template #footer><br></template>
              <template #body>
                <div class="row">
                  <div class="col-6">
                    <evaty-button @click="changeLanguage('de')">
                      Deutsch
                    </evaty-button>
                  </div>
                  <div class="col-6">
                    <evaty-button @click="changeLanguage('en')">
                      English
                    </evaty-button>
                  </div>
                </div>
              </template>
            </evaty-modal>
          </teleport>
        </div>
      </div>
    </div>
  </div>
</template>
