<template>
  <Loading />
  <div class="circle-bg">
    <div class="circle-color fixed">
      <div class="gradient-circle"></div>
      <div class="gradient-circle two"></div>
    </div>
  </div>
  <Navbar />
  <WorksHeader />
  <div class="main-content">
    <WorksStyle1 />
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
  titleTemplate: `%s - Works Dark`
});

</script>