<template>
  <nav
    ref="navbar"
    class="navbar navbar-expand-lg change"
    :class="theme === 'light' ? 'light' : ''"
  >
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img
          ref="lr"
          src="/img/logo-aguacate-dark.png"
          v-if="theme === 'light'"
          alt="logo"
        />
        <img
          ref="lr"
          src="/img/logo-aguacate-light.png"
          v-else-if="theme === 'themeD'"
          alt="logo"
        />
        <img ref="lr" src="/img/logo-aguacate-light.png" v-else alt="logo" />
      </NuxtLink>

      <div class="nav__uncollapsed">
        <button class="nav__bar d-block d-xl-none navbar-toggler m-2">
          <span class="icon-bar">
            <i class="fas fa-bars"></i>
          </span>
        </button>
      </div>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto nav__menu">
          <li class="nav-item">
            <a class="nav-link" @click="scrollToSection" data-scroll-to="#home"> Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="scrollToSection" data-scroll-to="#services"> Services </a>
          </li>
          <li class="nav-item">
            <a aria-label="close mobile menu" class="nav-link" href="/"> Blog </a>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" @click="scrollToSection" data-scroll-to="#works"> Works </NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="scrollToSection" data-scroll-to="#contact"> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <MobileMenuVue />
</template>

<script setup>
import getSiblings from "@/common/getSiblings";
import MobileMenuVue from "./MobileMenu.vue";

const { lr, theme } = defineProps(["lr", "theme"]);

function scrollToSection(event) {
  event.preventDefault();
  const section = event.currentTarget.dataset.scrollTo;
  setTimeout(() => {
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

const navbar = ref();

function handleScroll() {
  if (window.scrollY > 300) {
    navbar.value.classList.add("nav-scroll");
  } else {
    navbar.value.classList.remove("nav-scroll");
  }
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
