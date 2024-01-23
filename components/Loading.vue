<template>
  <div class="showX">
    <div class="loading">
      <span>C</span>
      <span>a</span>
      <span>r</span>
      <span>g</span>
      <span>a</span>
      <span>n</span>
      <span>d</span>
      <span>o</span>
    </div>
    <div id="preloader"></div>
  </div>
</template>

<script setup>
import loadingPace from "@/common/loadingPace";

onMounted(() => {
  if (typeof Pace !== 'undefined') loadingPace();
});
</script>
