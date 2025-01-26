<template>
  <Loading />
  <Navbar />
  <Header id="home" />
  <div class="main-content" ref="MainContent">
    <Services id="services" />
    <MinimalArea />
    <Works id="works" />
    <Clients />
    <CallToAction img="/img/patrn1.png" id="contact" />
    <Footer />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Desarrollo Web y Soluciones Informáticas`,
});

const fixedSlider = ref();
const MainContent = ref();

onMounted(() => {
  if (fixedSlider.value && MainContent.value) {
    const slideHeight = fixedSlider.value.fixedSlider.offsetHeight;
    MainContent.value.style.marginTop = slideHeight + "px";
  }
});
</script>
