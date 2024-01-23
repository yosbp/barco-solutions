<template>
    <Loading />
    <Navbar />
    <Header />
    <div class="main-content" ref="MainContent">
        <Services serviceMB50 />
        <!-- <AboutUs /> -->
        <MinimalArea />
        <FunFacts />
        <Works />
        <CallToAction img="/img/patrn1.png" />
        <Footer />
    </div>
</template>
  
<script setup>
//= Page Metadata
definePageMeta({
    layout: 'light',
});

//= Page Head
useHead({
    titleTemplate: `%s - Desarrollo Web y Diseño Gráfico`,
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