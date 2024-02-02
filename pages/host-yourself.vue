<script setup lang="ts">
import header from '@/assets/images/pages/host-yourself/host-yourself-header.jpg'
import { EvatyCard, EvatyButton } from 'evaty-component-lib'
import {useHead} from "@unhead/vue";

useHead({
  title: "Selber veranstalten"
})
</script>

<template>
  <section class="container pb-150 header-image pt-100">
    <div class="row">
      <div class="col-12 pa-100 header-image-inner-card">
        <div class="row">
          <div class="col-8">
            <h1 class="pb-30">Werde ein Teil von <span class="text-gradient">Evaty</span></h1>
            <p>
              Es ist deine Zeit zu glänzen. Veranstalte dein eigenes Event und mache die Welt darauf
              aufmerksam. Wir geben dir alle Werkzeuge an die Hand, um dir das Leben damit ein wenig
              leichter zu machen. Wir veröffentlichen, verbreiten und verwalten die Veranstaltung
              für die Nutzer unserer Plattform.
            </p>
            <a class="evaty-button btn-primary fw-semibold" href="mailto:support@evaty.net"
            >Kontaktiere uns</a
            >
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/pages/host-yourself/host-yourself-header.jpg" alt="" />
  </section>

  <section class="container pb-100">
    <h1 class="evaty-color-text-danger-500">Redesign: Bento bioxes</h1>
    <div class="row align-items-center text-center pb-100">
      <h2>Unsere Features</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-face-laugh-beam evaty-text-gradient"></i>
        <h3>Einfache Handhabung</h3>
        <p>Das erstellen und bearbeiten deines Events wird kinderleicht</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-star-shooting evaty-text-gradient"></i>
        <h3>Werde Vorgestellt</h3>
        <p>Wir suchen immer nach neuen und Spannenden Veranstaltungen die wir vorstellen können.</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-ticket evaty-text-gradient"></i>
        <h3>Verkaufe Tickets</h3>
        <p>Verlinke deine Ticket-Seite und leite Traffic direkt zu deinen Tickets.</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-users evaty-text-gradient"></i>
        <h3>Kundenbindung</h3>
        <p>
          Nutzer können dein Profil abonnieren und bekommen benachrichtigungen über alle
          neuigkeiten.
        </p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-house evaty-text-gradient"></i>
        <h3>Alles an einem Ort</h3>
        <p>Erstelle und manage mehrere Veranstaltungen über ein Konto an einem Ort.</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-seedling evaty-text-gradient"></i>
        <h3>Regelmäßige Updates</h3>
        <p>Wir arbeiten ständing an unserer Seite und wollen dir alles bieten was du brauchst.</p>
      </div>
    </div>
  </section>

  <section class="container pb-150" v-show="false">
    <div class="row align-items-center text-center pb-100">
      <h2>Was sagen unsere Veranstalter?</h2>
    </div>
    <div class="row">
      <div class="col-12 testemonial">
        <div class="row">
          <div class="col-8 testemonial-text">
            <div class="upper">
              "Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarsgkrove right
              at the coast of the Semantics, a large language ocean."
            </div>
            <div class="down">
              <span class="name">Person Name</span>
              <span class="title">Co-founder at Company</span>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <!--            <img src="/assets/images/no-photo/no-photo-square.png">-->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="fdb-block pb-150">
    <div class="row align-items-center text-center pb-100">
      <h2>Wie erstelle ich eine Veranstaltung?</h2>
    </div>
    <div class="container">
      <div class="row text-left align-items-center pb-50 pb-md-5">
        <div class="col-4 col-md-5">
          <img
              alt="image"
              class="img-fluid"
              src="@/assets/images/pages/host-yourself/team-up.svg"
          />
        </div>

        <div class="col-12 col-md-5 offset-md-2">
          <h2><strong>1. Benutzerkonto erstellen</strong></h2>
          <p>
            Zuerst musst du dir ein Evaty-Benutzerkonto erstellen, danach schreibe uns eine Mail mit
            deinem Benutzernamen und eine Erklärung für welche Veranstaltungen du unsere Seite
            nutzen möchtest. (Wir können dir auch ein Nutzerkonto erstellen, erwähne dies einfach in
            der Mail)
          </p>
          <a class="evaty-button btn-primary fw-semibold" href="mailto:support@evaty.net"
          >Sende uns eine Email</a
          >
        </div>
      </div>

      <div class="row text-left align-items-center pb-50 pb-md-5">
        <div class="col-4 col-md-5 offset-md-2 order-md-5">
          <img alt="image" class="img-fluid" src="@/assets/images/pages/host-yourself/create.svg" />
        </div>

        <div class="col-12 col-md-5">
          <h2><strong>2. Erstelle dein Event</strong></h2>
          <p>
            In unserer Grafischen-Oberfläche kannst du sobald wir deine anfrage bearbeitet haben
            ganz einfach deine Veranstaltungen erstellen. Du musst nur ein paar Informationen
            ausfüllen und wir bauen dir deine Seite. Du kannst auch jederzeit deine Veranstaltung
            bearbeiten und deine Änderungen werden sofort übernommen.
          </p>
        </div>
      </div>

      <div class="row text-left align-items-center pb-50">
        <div class="col-4 col-md-5">
          <img
              alt="image"
              class="img-fluid"
              src="@/assets/images/pages/host-yourself/publish.svg"
          />
        </div>

        <div class="col-12 col-md-5 offset-md-2">
          <h2><strong>3. Veröffentlichen</strong></h2>
          <p>
            Der Letzte Schritt ist nun ganz einfach. Stelle deine Veranstaltung auf Öffentlich und
            nun kann sie jeder im Internet sehen. Wir helfen dir dann deine Veranstaltung bekannter
            zu machen und fügen sie zu unseren Kollektionen und Listen hinzu.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="container pb-150">
    <div class="row align-items-center text-center pb-100">
      <h2>Was ist wenn ich hilfe brauche?</h2>
    </div>
    <div class="row">
      <div class="col-12 support-card">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
                alt="Support Bild"
                class="img-fluid"
                src="@/assets/images/pages/host-yourself/support.svg"
            />
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h3>Support</h3>
            <p>
              Wir helfen dir gerne bei jedem Schritt den du mit uns machst. Egal ob du Hilfe beim
              erstellen deiner Veranstaltung brauchst, ob du Feedback an uns hast oder einfach
              deiner Veranstaltung noch ein bisschen mehr Reichtweite geben möchtest. <br /><br />
              Melde dich einfach per Email an uns: hosts@evaty.net
            </p>
            <a
                class="evaty-button btn-primary fw-semibold"
                href="mailto:hosts@evaty.net"
                style="max-width: fit-content"
            >Sende uns eine Email</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container pb-150" v-show="false">
    <div class="row align-items-center text-center pb-100">
      <h2 class="mb-0">Preisübersicht</h2>
    </div>
    <div class="row">
      <div class="col-12 pricing">
        <div class="row">
          <div class="col-12 title h3 d-flex gap-2 pb-30">
            <span>Standart Plan</span><span>|</span
          ><span class="evaty-color-text-primary-500">0,00€</span>
          </div>
          <div class="col-12 pb-20">
            <div class="row">
              <div class="col-6 col-lg-3 icon-box pb-50">
                <i class="fa-regular fa-check"></i>
                <h3>Erstellen und verwalten</h3>
                <p>Erstelle und verwalte veranstaltungen in unserem Dashbaord.</p>
              </div>
              <div class="col-6 col-lg-3 icon-box pb-50">
                <i class="fa-regular fa-check"></i>
                <h3>Vorgestellt werden</h3>
                <p>
                  Habe die möglichkeit in unseren Listen und unserer Startseite vorgestellt zu
                  werden.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 title h3 d-flex gap-2 pb-30">
            <span>Plus Plan</span><span>|</span
          ><span class="evaty-color-text-primary-500">10,00€</span
          ><span>mtl. (Comming soon)</span>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-6 col-lg-3 icon-box pb-50">
                <i class="fa-regular fa-check"></i>
                <h3>Erstellen und verwalten</h3>
                <p>Erstelle und verwalte veranstaltungen in unserem Dashbaord.</p>
              </div>
              <div class="col-6 col-lg-3 icon-box pb-50">
                <i class="fa-regular fa-check"></i>
                <h3>Vorgestellt werden</h3>
                <p>
                  Habe die möglichkeit in unseren Listen und unserer Startseite vorgestellt zu
                  werden.
                </p>
              </div>
              <div class="col-6 col-lg-3 icon-box pb-50">
                <i class="fa-regular fa-check"></i>
                <h3>Nutze AI</h3>
                <p>
                  Lasse dir mittels GPT-4 Beschreibungen und andere Texte leicht über AI generieren.
                </p>
              </div>
              <div class="col-6 col-lg-3 icon-box pb-50">
                <i class="fa-regular fa-check"></i>
                <h3>Event Stories</h3>
                <p>
                  Lade Live-Stories von deiner Veranstaltung hoch und werde in unserem Live-Feed
                  angezeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-150" id="pricing">
    <div class="row align-items-center text-center pb-100">
      <h2 class="mb-0">Preisübersicht</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-3">
        <evaty-card>
          <h5 class="card-title my-2">Hobby</h5>
          <p class="text-muted mb-2">Starte dein Abenteuer komplett kostenlos.</p>
          <p class="h2 fw-bold">0€<small class="text-muted" style="font-size: 18px">/mo</small></p>

          <evaty-button block>Auswählen</evaty-button>
          <!--          <a href="#" class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Hobby</a>-->
          <div class="card-footer">
            <hr />
            <p class="text-uppercase fw-bold" style="font-size: 12px">What's included</p>
            <ol class="list-unstyled mb-0 px-4">
              <p class="my-3 fw-bold text-muted text-center"></p>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Erstellen und verwalten</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Vorgestellt werden</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i
                ><small>Tickets (Gebühren<sup>2</sup> + 4%)</small>
              </li>
            </ol>
          </div>
        </evaty-card>
      </div>
      <div class="col-md-3">
        <evaty-card class="border border-dark">
          <h5 class="card-title my-2">Plus</h5>
          <p class="text-muted">Perfekt für große oder mehrere Veranstaltungen im Jahr.</p>
          <p class="h2 fw-bold">20€<small class="text-muted" style="font-size: 18px">/mo</small></p>
          <evaty-button block disabled>Auswählen</evaty-button>

          <div class="card-footer">
            <hr />
            <p class="text-uppercase fw-bold" style="font-size: 12px">What's included</p>
            <ol class="list-unstyled mb-0 px-4">
              <p class="my-3 fw-bold text-muted text-center"></p>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Erstellen und verwalten</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Vorgestellt werden</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i
                ><small>Tickets (Gebühren<sup>2</sup> + 2%)</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Nutze AI</small>
              </li>
            </ol>
          </div>
        </evaty-card>
      </div>

      <div class="col-md-3">
        <evaty-card>
          <h5 class="card-title my-2">EduCare<sup>1</sup></h5>
          <p class="text-muted">Für Schüler- / Studenten-Verstaltungen und NPO's</p>
          <p class="h2 fw-bold">0€<small class="text-muted" style="font-size: 18px">/mo</small></p>
          <evaty-button block>Auswählen</evaty-button>

          <div class="card-footer">
            <hr />
            <p class="text-uppercase fw-bold" style="font-size: 12px">What's included</p>
            <ol class="list-unstyled mb-0 px-4">
              <p class="my-3 fw-bold text-muted text-center"></p>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Erstellen und verwalten</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Vorgestellt werden</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i
                ><small>Tickets (Gebühren<sup>3</sup> + 0%)</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>Nutze AI</small>
              </li>
            </ol>
          </div>
        </evaty-card>
      </div>

      <!--      <div class="col-md-3">-->
      <!--        <div class="card">-->
      <!--          <div class="mx-2 card-body">-->
      <!--            <h5 class="card-title my-2">Enterprise</h5>-->
      <!--            <p class="text-muted">All the essentials for starting a business</p>-->
      <!--            <p class="h2 fw-bold">-->
      <!--              $55<small class="text-muted" style="font-size: 18px">/mo</small>-->
      <!--            </p>-->
      <!--            <a href="#" class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Enterprise</a>-->
      <!--          </div>-->
      <!--          <div class="card-footer">-->
      <!--            <p class="text-uppercase fw-bold" style="font-size: 12px">What's included</p>-->
      <!--            <ol class="list-unstyled mb-0 px-4">-->
      <!--              <li class="mb-3">-->
      <!--                <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>-->
      <!--              </li>-->
      <!--              <li class="mb-3">-->
      <!--                <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>-->
      <!--              </li>-->
      <!--              <li class="mb-3">-->
      <!--                <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>-->
      <!--              </li>-->
      <!--              <li class="mb-3">-->
      <!--                <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>-->
      <!--              </li>-->
      <!--              <li class="mb-3">-->
      <!--                <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>-->
      <!--              </li>-->
      <!--              <li class="mb-3">-->
      <!--                <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>-->
      <!--              </li>-->
      <!--              <li class="mb-3">-->
      <!--                <i class="fas fa-check text-success me-3"></i><small>Lorem Ipsum</small>-->
      <!--              </li>-->
      <!--            </ol>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </section>

  <section class="container opacity-50 small-print">
    <div class="row">
      <div class="col-12">
        <p>
          <sup>1</sup> Der EduCare plan ist gedacht für Schüler, Studenten und Schulveranstaltungen
          sowie Gemeinnützige Organisationen. Schreibe uns eine Mail und weise nach das du zu den
          Oben genannten Organisationen gehörst und wir werden dir unsere Plus features kostenlos
          zur verfügung stellen.
        </p>
        <p>
          <sup>2</sup> Gebühren der Zahlungsanbieter können unterschiedlich ausfallen. Siehe im
          Dashboard nach welche Gebühren mit eingerechnet werden müssen.
        </p>
        <p>
          <sup>3</sup> Gebühren der Zahlungsanbieter können unterschiedlich ausfallen. Die Gebühren
          werden dem Käufer des Tickets in rechnung gestellt.
        </p>
      </div>
    </div>
  </section>
</template>
