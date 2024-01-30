<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'evaty-footer',
});
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
                        <span class="footer-link"><a href="https://hosts.evaty.net/login" rel="nofollow">Veranstalter login</a></span>
                        <span class="footer-link"><router-link to="/support">Support Center</router-link></span>
                    </div>
                    <div class="footer-link-list-item">
                        <span class="footer-link-head">HERUNTERLADEN</span>
                        <span class="footer-link"><a href="https://apps.apple.com/de/app/evaty/id1562916647"
                                                     target="_blank">IPhone</a></span>
                        <span class="footer-link">Android</span>
                    </div>
                    <div class="footer-link-list-item">
                        <span class="footer-link-head">Rechtliches</span>
                        <span class="footer-link"><router-link to="/imprint">Impressum</router-link></span>
                        <span class="footer-link"><router-link to="/privacy">Datenschutz</router-link></span>
                        <span class="footer-link"><router-link to="/terms">Nutzungsbedingungen</router-link></span>
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
                    <span class="language">{{ $t("settings.account.language") }}: {{ $t("currentLang") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
