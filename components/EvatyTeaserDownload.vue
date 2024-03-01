<template>
    <section id="teaser-download" class="mb-150">
        <div class="container">
            <div class="row">
                <div class="col-12 offset-md-6 col-md-5 offset-lg-7 col-lg-5 offset-xl-7 col-xl-5">
                    <div class="headline">
                        <h2 v-html="$t('components.download-teaser.text')">
                        </h2>
                    </div>
                    <div class="action d-flex align-items-center">
                        <div><a href="https://apple.co/3S6cyap" target="_blank"><img
                            src="../assets/images/badges/apple-appstore-black-badge.svg" alt="Appstore Badge" loading="lazy"></a></div>
<!--                        <div><img src="/assets/images/badges/google-play-badge.png" alt=""></div>-->
                    </div>
                </div>
            </div>
            <img class="d-none d-md-block" srcset="../assets/images/pages/about/about-banner-background@2x.png 2x"
                 src="../assets/images/pages/about/about-banner-background.png"
                 alt="Iphone present Evaty-App" loading="lazy">
          <img class="d-md-none" srcset="../assets/images/component/download-cta/download-cta-mobile@2x.png 2x"
               src="../assets/images/component/download-cta/download-cta-mobile.png"
               alt="Iphone present Evaty-App" loading="lazy">
        </div>
    </section>
</template>
<script setup lang="ts">
</script>
