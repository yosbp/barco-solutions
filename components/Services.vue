<template>
  <section
    :class="`services bords section-padding ${
      oStyle === '4item' ? 'lficon' : lines ? '' : 'pt-0'
    }`"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn font-weight-bold" data-wow-delay=".5s">
              Nuestros Servicios
            </h6>
            <h2 class="wow color-font">
              Somos una nueva agencia de desarrollo de productos digitales.
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="feature in featuresData"
          :key="feature.id"
          class="col-lg-6 wow fadeInLeft"
          :data-wow-delay="`${
            feature.id == 1
              ? '.5'
              : feature.id === 2
              ? '.7'
              : feature.id === 3
              ? '.9'
              : '1.1'
          }s`"
        >
          <div class="item-box text-center">
            <div>
              <span :class="`icon ${feature.icon}`"></span>
            </div>
            <div class="cont">
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import featuresData from "@/data/features.json";

const oStyle = "4item";
</script>
