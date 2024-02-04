<script setup lang="ts">
import header from '@/assets/images/pages/host-yourself/host-yourself-header.jpg'
import {EvatyCard, EvatyButton} from 'evaty-component-lib'
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
            <h1 class="pb-30" v-html="$t('page.host-yourself.header.title')"></h1>
            <p>
              {{ $t('page.host-yourself.header.text') }}
            </p>
            <a class="evaty-button btn-primary fw-semibold" href="mailto:support@evaty.net">{{$t("general.contact-us")}}</a>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/pages/host-yourself/host-yourself-header.jpg" alt=""/>
  </section>

  <section class="container pb-100">
    <div class="row align-items-center text-center pb-100">
      <h2>{{$t('page.host-yourself.features.title')}}</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-face-laugh-beam evaty-text-gradient"></i>
        <h3>{{$t('page.host-yourself.features.1.title')}}</h3>
        <p>{{$t('page.host-yourself.features.1.text')}}</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-star-shooting evaty-text-gradient"></i>
        <h3>{{$t('page.host-yourself.features.2.title')}}</h3>
        <p>{{$t('page.host-yourself.features.2.text')}}</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-ticket evaty-text-gradient"></i>
        <h3>{{$t('page.host-yourself.features.3.title')}}</h3>
        <p>{{$t('page.host-yourself.features.3.text')}}</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-users evaty-text-gradient"></i>
        <h3>{{$t('page.host-yourself.features.4.title')}}</h3>
        <p>{{$t('page.host-yourself.features.4.text')}}</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-house evaty-text-gradient"></i>
        <h3>{{$t('page.host-yourself.features.5.title')}}</h3>
        <p>{{$t('page.host-yourself.features.5.text')}}</p>
      </div>
      <div class="col-6 col-lg-3 icon-box pb-50">
        <i class="fa-regular fa-seedling evaty-text-gradient"></i>
        <h3>{{$t('page.host-yourself.features.6.title')}}</h3>
        <p>{{$t('page.host-yourself.features.6.text')}}</p>
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
      <h2>{{$t('page.host-yourself.create-steps.title')}}</h2>
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
          <h2><strong>{{$t('page.host-yourself.create-steps.1.title')}}</strong></h2>
          <p>
            {{$t('page.host-yourself.create-steps.1.text')}}
          </p>
          <a class="evaty-button btn-primary fw-semibold" href="mailto:support@evaty.net">{{$t('page.host-yourself.create-steps.1.button')}}</a>
        </div>
      </div>

      <div class="row text-left align-items-center pb-50 pb-md-5">
        <div class="col-4 col-md-5 offset-md-2 order-md-5">
          <img alt="image" class="img-fluid" src="@/assets/images/pages/host-yourself/create.svg"/>
        </div>

        <div class="col-12 col-md-5">
          <h2><strong>{{$t('page.host-yourself.create-steps.2.title')}}</strong></h2>
          <p>
            {{$t('page.host-yourself.create-steps.2.text')}}
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
          <h2><strong>{{$t('page.host-yourself.create-steps.3.title')}}</strong></h2>
          <p>
            {{$t('page.host-yourself.create-steps.3.text')}}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="container pb-150">
    <div class="row align-items-center text-center pb-100">
      <h2>{{$t('page.host-yourself.help.title')}}</h2>
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
            <h3>{{$t('page.host-yourself.help.support.title')}}</h3>
            <p v-html="$t('page.host-yourself.help.support.text')">

            </p>
            <a class="evaty-button btn-primary fw-semibold"
                href="mailto:hosts@evaty.net"
                style="max-width: fit-content"
            >{{$t('page.host-yourself.help.support.button')}}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-150" id="pricing">
    <div class="row align-items-center text-center pb-100">
      <h2 class="mb-0">{{$t('page.host-yourself.pricing.title')}}</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-3">
        <evaty-card>
          <h5 class="card-title my-2">{{$t('page.host-yourself.pricing.hobby.title')}}</h5>
          <p class="text-muted mb-2">{{$t('page.host-yourself.pricing.hobby.text')}}</p>
          <p class="h2 fw-bold">0€<small class="text-muted" style="font-size: 18px">/{{$t('page.host-yourself.pricing.month-short')}}</small></p>

          <evaty-button block>Auswählen</evaty-button>
          <!--          <a href="#" class="btn btn-dark d-block mb-2 mt-3 text-capitalize">Buy Hobby</a>-->
          <div class="card-footer">
            <hr/>
            <p class="text-uppercase fw-bold" style="font-size: 12px">{{$t('page.host-yourself.pricing.included')}}</p>
            <ol class="list-unstyled mb-0 px-4">
              <p class="my-3 fw-bold text-muted text-center"></p>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.create')}}</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.presented')}}</small>
              </li>

              <!-- TODO Enable when tickets are deployed -->
              <li class="mb-3" v-if="false">
                <i class="fas fa-check text-success me-3"></i
                ><small>Tickets (Gebühren<sup>2</sup> + 5%)</small>
              </li>
            </ol>
          </div>
        </evaty-card>
      </div>
      <div class="col-md-3">
        <evaty-card class="border border-dark">
          <h5 class="card-title my-2">{{$t('page.host-yourself.pricing.plus.title')}}</h5>
          <p class="text-muted">{{$t('page.host-yourself.pricing.plus.text')}}</p>
          <p class="h2 fw-bold">20€<small class="text-muted" style="font-size: 18px">/{{$t('page.host-yourself.pricing.month-short')}}</small></p>
          <evaty-button block disabled>Auswählen</evaty-button>

          <div class="card-footer">
            <hr/>
            <p class="text-uppercase fw-bold" style="font-size: 12px">{{$t('page.host-yourself.pricing.included')}}</p>
            <ol class="list-unstyled mb-0 px-4">
              <p class="my-3 fw-bold text-muted text-center"></p>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.create')}}</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.presented')}}</small>
              </li>

              <!-- TODO Enable when tickets are deployed -->
              <li class="mb-3" v-if="false">
                <i class="fas fa-check text-success me-3"></i
                ><small>Tickets (Gebühren<sup>2</sup> + 2,5%)</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.ai')}}</small>
              </li>
            </ol>
          </div>
        </evaty-card>
      </div>

      <div class="col-md-3">
        <evaty-card>
          <h5 class="card-title my-2">{{$t('page.host-yourself.pricing.edu-care.title')}}<sup>1</sup></h5>
          <p class="text-muted">{{$t('page.host-yourself.pricing.edu-care.text')}}</p>
          <p class="h2 fw-bold">0€<small class="text-muted" style="font-size: 18px">/{{$t('page.host-yourself.pricing.month-short')}}</small></p>
          <evaty-button block>Auswählen</evaty-button>

          <div class="card-footer">
            <hr/>
            <p class="text-uppercase fw-bold" style="font-size: 12px">{{$t('page.host-yourself.pricing.included')}}</p>
            <ol class="list-unstyled mb-0 px-4">
              <p class="my-3 fw-bold text-muted text-center"></p>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.create')}}</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.presented')}}</small>
              </li>

              <!-- TODO Enable when tickets are deployed -->
              <li class="mb-3" v-if="false">
                <i class="fas fa-check text-success me-3"></i
                ><small>Tickets (Gebühren<sup>3</sup> + 0%)</small>
              </li>
              <li class="mb-3">
                <i class="fas fa-check text-success me-3"></i><small>{{$t('page.host-yourself.pricing.ai')}}</small>
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
          <sup>1</sup> {{$t("page.host-yourself.pricing.small.1")}}
        </p>

        <!-- TODO Enable when tickets are deployed -->
        <p v-if="false">
          <sup>2</sup> Gebühren der Zahlungsanbieter können unterschiedlich ausfallen. Siehe im
          Dashboard nach welche Gebühren mit eingerechnet werden müssen.
        </p>
        <p v-if="false">
          <sup>3</sup> Gebühren der Zahlungsanbieter können unterschiedlich ausfallen. Die Gebühren
          werden dem Käufer des Tickets in rechnung gestellt.
        </p>
      </div>
    </div>
  </section>
</template>
