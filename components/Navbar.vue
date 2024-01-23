<template>
  <nav ref="navbar" class="navbar navbar-expand-lg change" :class="theme === 'light' ? 'light' : ''">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img ref="lr" src="/img/logo-dark.png" v-if="theme === 'light'" alt="logo" />
        <img ref="lr" src="/img/logo-light.png" v-else-if="theme === 'themeD'" alt="logo" />
        <img ref="lr" src="/img/logo-light.png" v-else alt="logo" />
      </NuxtLink>

      <button class="navbar-toggler m-2" type="button" @click="handleMobileDropdown" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown" @click="handleDropdown">
            <span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false">
              Home
            </span>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/">
                Main Home
              </a>
              <a class="dropdown-item" href="/">
                Creative Agency
              </a>
              <a class="dropdown-item" href="/">
                Digital Agency
              </a>
              <a class="dropdown-item" href="/">
                Business One Page
              </a>
              <a class="dropdown-item" href="/">
                Corporate Business
              </a>
              <a class="dropdown-item" href="/">
                Modern Agency
              </a>
              <a class="dropdown-item" href="">
                Freelancer
              </a>
              <a class="dropdown-item" href="">
                Architecture
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/"> About </a>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false">
              Works
            </span>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/">
                Showcase Parallax
              </a>
              <a class="dropdown-item" href="/">
                Showcase Carousel
              </a>
              <a class="dropdown-item" href="/">
                Showcase Circle
              </a>
              <a class="dropdown-item" href="/">
                Portfolio Masonry
              </a>
              <a class="dropdown-item" href="/">
                Portfolio Filtering
              </a>
              <a class="dropdown-item" href="/">
                Portfolio Gallery
              </a>
            </div>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false">
              Blog
            </span>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/">
                Blog Standerd
              </a>
              <a class="dropdown-item" href="/">
                Blog List
              </a>
              <a class="dropdown-item" href="/">
                Blog Grid
              </a>
              <a class="dropdown-item" href="/">
                Blog Details
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import getSiblings from "@/common/getSiblings";

const { lr, theme } = defineProps(["lr", "theme"])

function handleDropdown(e) {
  getSiblings(e.target.parentElement)
    .filter((item) => item.classList.contains("show"))
    .map((item) => {
      item.classList.remove("show");
      if (item.childNodes[0]) item.childNodes[0].setAttribute("aria-expanded", false);
      if (item.childNodes[1]) item.childNodes[1].classList.remove("show");
    });

  e.target.setAttribute("aria-expanded", true);

  if (e.target.parentElement) {
    e.target.parentElement.classList.toggle("show");
    let dropdownMenu = e.target.parentElement.childNodes[1];
    if (dropdownMenu) {
      dropdownMenu.classList.toggle("show");
    }
  }
}

function handleMobileDropdown() {
  document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
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