<template>
  <section :class="`portfolio-cr section-padding pb-50 ${classText ? classText : ''}`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h2 class="wow color-font">
              Algunos de nuestros trabajos más recientes.
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="filtering text-center col-12">
          <div class="filter">
            <span data-filter="*" class="active"> Todo </span>
            <span data-filter=".automation">Automatización</span>
            <span data-filter=".web">Página Web</span>
            <span data-filter=".data-analysis">Análisis de Datos</span>
          </div>
        </div>

        <div class="gallery-mons full-width">
          <div class="items data-analysis wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink class="imago wow" to="/">
                <img src="/img/portfolio/data-an.webp" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont flex">
              <h6 class="color-font">Dashboard</h6>
              <span>
                <a href="#0">Análisis de Datos</a>
              </span>
            </div>
          </div>

          <div class="items web wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink class="imago wow" to="/">
                <img src="/img/portfolio/caracascity.webp" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont flex">
              <h6 class="color-font">Caracas City</h6>
              <span>
                <a href="https://caracascity.com" target="_blank">Web</a>
              </span>
            </div>
          </div>

          <div class="items width2 automation wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink class="imago wow" to="/">
                <img src="/img/portfolio/automation-caracascity.webp" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6 class="color-font">Automatización</h6>
              <span>
                <a href="https://www.instagram.com/caracascityve/" target="_blank">Social</a>
              </span>
            </div>
          </div>

          <div class="items width2 graphic wow fadeInUp" data-wow-delay=".4s">
            <div class="item-img">
              <NuxtLink class="imago wow" to="/">
                <img src="/img/portfolio/cr/4.webp" alt="image" />
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="cont">
              <h6 class="color-font">Modern Design</h6>
              <span>
                <a href="#0">Graphic</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import initIsotope from "@/common/initIsotope";

const { classText } = defineProps(['classText']);

onMounted(() => {
  setTimeout(() => {
    initIsotope();
  }, 500);
});
</script>