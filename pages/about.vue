<template>
  <section class="container hero-section mb-150 mt-100">
    <div class="row">
      <div class="col-12">
        <div class="hero-container" :style="`background-image: url('${heroImage}')`">
          <div class="content">
            <div class="headline">
              <h1><span class="primary text-gradient">Ein Platz für alles</span>, was du erleben möchtest.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="fdb-block pb-100">
    <div class="container">
      <div class="row text-left align-items-center pb-50 pb-md-5">
        <div class="col-4 col-md-5">
          <img alt="image" class="img-fluid" src="@/assets/images/pages/about/easy.svg">
        </div>

        <div class="col-12 col-md-5 offset-md-2">
          <h2><strong>Schneller Überlick</strong></h2>
          <p>Wir liefern dir alle Informationen die Wir haben auf einem Blick. Du willst wissen wo die
            Veranstaltung überall stattfindet? Wir zeigen es dir sogar auf einer Karte. Du hast an genau dem
            Wochenende keine Zeit? Wir zeigen dir alle anderen Termine. Alles auf einen Blick!</p>
        </div>
      </div>

      <div class="row text-left align-items-center pb-50 pb-md-5">
        <div class="col-4 col-md-5 offset-md-2 order-md-5">
          <img alt="image" class="img-fluid" src="@/assets/images/pages/about/planing-together.svg">
        </div>

        <div class="col-12 col-md-5">
          <h2><strong>Plant Zusammen</strong></h2>
          <p>Wir wissen, Ausflüge und Veranstaltungen mit Freunden in Whatsapp-Gruppen planen, kann ganz schön
            anstrengend sein. Mit Evaty könnt ihr ganz Leicht zusammen planen wo ihr hin wollt und habt es
            immer im Blick. Keine verpasste Veranstaltung mehr weil sie im Chatverlauf untergegangen sind.
            (Coming Soon)</p>
        </div>
      </div>

      <div class="row text-left align-items-center pb-50">
        <div class="col-4 col-md-5">
          <img alt="image" class="img-fluid" src="@/assets/images/pages/about/explore.svg">
        </div>

        <div class="col-12 col-md-5 offset-md-2">
          <h2><strong>Entdecke neues</strong></h2>
          <p>Noch kein Plan was dieses Wochenende geht? Keine sorge, wir haben was für dich. Entdecke ganz
            leichte neue interessant Veranstaltungen. Ob in der nähe oder doch weiter weg. Wir haben
            Informationen, Preise, Öffnungszeiten u.s.w für dich im Blick.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-150 overflow-hidden">
    <div class="container">
      <div class="row align-items-center text-center pb-100">
        <h2>Erlebe deine Lieblings Künstler</h2>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="col-md-5">
          <div class="text-left pb-70">
            <h3>Suche nach Künstlerprofilen</h3>
            <p>Du möchtest auf das nächste Harry Styles konzert? Wir kennen das gefühl und den kampf dann
              alle Infos herauszufinden. Wo tritt er eigentlich auf und wo kann man Tickets kaufen. Wir
              lösen das problem, suche einfach nach deinem Künstler und wir haben alle Informationen für
              seine Konzerte für dich gesammelt.</p>
          </div>
          <div class="text-left pb-70">
            <h3>Siehe dir Lineups an</h3>
            <p>In unserer App findest du die Lineups zu deinen Lieblings-veranstaltungen und -festivals, so
              dass du immer auf dem Laufenden bist. Du weißt, was als Nächstes ansteht und wer auftritt.
              Wir haben alles hier an einem Ort.</p>
          </div>
          <div class="text-left">
            <h3>Folge ihnen</h3>
            <p>Instagram und TikTok reicht nicht? Du willst deinem Lieblingskünstler immer nahe sein? Am
              liebsten natürlich in der ersten Reihe. Da musst du dich aber leider alleine hin kämpfen,
              wir sagen dir aber immer bescheid wenn es neue Konzerte, Partys oder andere Veranstaltungen
              gibt!</p>
          </div>
        </div>
        <div class="col-md-5 artists-panel">
          <img src="@/assets/images/pages/about/artists.svg" alt="">
        </div>
      </div>
    </div>
  </section>

  <section class="pb-150 overflow-hidden">
    <div class="container position-relative">
      <div class="row align-items-center text-center pb-100">
        <h2>Du weißt was, aber nicht wohin?</h2>
      </div>
      <div class="row align-items-center justify-content-between" style="min-height: 1238px">
        <div class="col-12 col-lg-5 event-panel order-2 order-md-0">
          <img src="@/assets/images/pages/about/events-mobile.svg" alt="" class="d-lg-none">
          <img src="@/assets/images/pages/about/events.svg" alt=""
               style="position: absolute;top: 100px;left: -32%;min-height: 1200px;" class="d-none d-lg-block">
        </div>
        <div class="col-12 col-lg-5 order-0 order-md-2">
          <div class="text-left pb-70">
            <h3>Kategorien</h3>
            <p>In unseren Kategorien findest du genau das nach as es dir gerade steht. Übersichtlich,
              findest du leicht dein neues Lieblingsevent.</p>
          </div>
          <div class="text-left pb-70">
            <h3>Vorgeschlagene Listen</h3>
            <p>Auch die Community ist fleißig am Sammeln und empfehlen. Schau dir doch ein paar Listen an
              und finde damit deinen Wochenend trip.</p>
          </div>
          <div class="text-left">
            <h3>Von uns Empfohlen</h3>
            <p>Auch wir gehen gerne auf Veranstaltungen und genießen das Leben. Wenn uns dabei etwas
              besonders ins auge fällt, teilen wir das natürlich mit euch. Finde in unseren stetig
              aktualisierten Listen genau, dass was du möchtest.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-150 overflow-hidden">
    <div class="container">
      <div class="row align-items-center text-center pb-100">
        <h2>Du weißt genau was du willst?</h2>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="col-md-5">
          <div class="text-left pb-70">
            <h3>Suche nach Events</h3>
            <p>Wenn du schon genau weißt wohin es gehen soll, aber noch ein paar Informationen brauchst
              stehen wir dir gerne zur Seite. Suche nach deinem Lieblingsevent und wir liefern dir alle
              nötigen Informationen damit du die Veranstaltung einfach nur noch genießen musst.</p>
          </div>
          <div class="text-left">
            <h3>Siehe dir Lineups an</h3>
            <p>In unserer App findest du die Lineups zu deinen Lieblings-veranstaltungen und -festivals, so
              dass du immer auf dem Laufenden bist. Du weißt, was als Nächstes ansteht und wer auftritt.
              Wir haben alles hier an einem Ort.</p>
          </div>
        </div>
        <div class="col-md-5 artists-panel">
          <img src="@/assets/images/pages/about/search.svg" alt="">
        </div>
      </div>
    </div>
  </section>

  <EvatyTeaserDownload/>
</template>
<script setup lang="ts">
import heroImage from '@/assets/images/pages/about/banner-new-one.png'
useHead({
  title: "Über uns"
})
</script>