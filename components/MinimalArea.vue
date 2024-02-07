<template>
  <section class="min-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img">
            <img class="thumparallax-down" src="/img/min-area4.webp" alt="" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content">
            <h4 class="color-font">
              Tienes una idea? <br />
              La hacemos realidad!
            </h4>
            <p class="wow txt words chars splitting" data-splitting>
              En <strong>Aguacate Studios</strong>, estamos comprometidos a
              convertir tus ideas en experiencias digitales impactantes. Nos
              apasiona dar vida a tus conceptos, creando soluciones que
              trascienden lo convencional en el mundo digital.
            </p>
            <ul>
              <li class="wow fadeInUp" data-wow-delay=".2s">
                Te acompañamos en todo el proceso.
              </li>
              <li class="wow fadeInUp" data-wow-delay=".2s">
                Aportamos soluciones creativas y efectivas.
              </li>
              <li class="wow fadeInUp" data-wow-delay=".4s">
                Nos enfocamos en la calidad y la innovación.
              </li>
            </ul>
            <NuxtLink
              @click="scrollToSection"
              data-scroll-to="#contact"
              to="/"
              class="butn bord curve mt-40 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <span>Contáctanos</span>
            </NuxtLink>
            <br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import thumparallaxDown from "@/common/thumparallaxDown";

function scrollToSection(event) {
  event.preventDefault();
  const section = event.currentTarget.dataset.scrollTo;
  setTimeout(() => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  }, 300);
}

onMounted(() => {
  thumparallaxDown();
});
</script>
