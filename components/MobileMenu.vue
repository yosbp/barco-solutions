<template>
  <div>
    <div class="mobile-menu d-block d-xl-none">
      <nav class="mobile-menu__wrapper">
        <div class="mobile-menu__separator">
          <div class="mobile-menu__header">
            <span aria-label="close mobile menu" class="close-mobile-menu">
              <i class="fas fa-times"></i>
            </span>
            <div class="nav__logo">
              <router-link to="/" aria-label="home page" title="logo">
                <img src="/img/logo-aguacate-light.png" alt="Image" />
              </router-link>
            </div>
          </div>
          <div class="mobile-menu__list">
            <ul class="navbar-nav ml-auto nav__menu">
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="scrollToSection"
                  data-scroll-to="#home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="scrollToSection"
                  data-scroll-to="#services"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a aria-label="close mobile menu" class="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  @click="scrollToSection"
                  data-scroll-to="#works"
                >
                  Works
                </NuxtLink>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="scrollToSection"
                  data-scroll-to="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="mobile-menu__social social">
            <a href="https://www.facebook.com" aria-label="social media">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" aria-label="social media">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="social media">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="social media">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div class="copy-right">
          <p>
            © 2024. Adapted by
            <a target="_blank" rel="external" href="http://yosmarb.com/"
              >Yosmar B</a
            >.
          </p>
        </div>
      </nav>
    </div>
    <div class="mobile-menu__backdrop"></div>
  </div>
</template>

<script setup>
function scrollToSection(event) {
  event.preventDefault();
  const section = event.currentTarget.dataset.scrollTo;
  setTimeout(() => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  }, 300);
}

onMounted(() => {
  const mobileMenu = document.querySelector(".mobile-menu");

  // Add click event listener tohttps://www.facebook.com
  document.querySelector(".nav__bar").addEventListener("click", function () {
    // Add class "mobile-menu__backdrop-active" to .mobile-menu__backdrop
    document
      .querySelector(".mobile-menu__backdrop")
      .classList.add("mobile-menu__backdrop-active");

    // Apply animation delays to .nav-fade elements
    const navFadeElements = document.querySelectorAll(".nav-fade");
    navFadeElements.forEach((element, index) => {
      element.style.animationDelay = `${0.2 * index}s`;
    });

    // Add class "show-menu" to .mobile-menu
    document.querySelector(".mobile-menu").classList.add("show-menu");

    // Remove class "nav-fade-active" from .mobile-menu__wrapper
    document
      .querySelector(".mobile-menu__wrapper")
      .classList.remove("nav-fade-active");

    // Add class "body-active" to the body element
    document.body.classList.add("body-active");
  });

  // Add click event listener to .close-mobile-menu and .mobile-menu__backdrop
  document
    .querySelectorAll(".close-mobile-menu, .mobile-menu__backdrop")
    .forEach((element) => {
      element.addEventListener("click", function () {
        // Remove class "show-menu" from .mobile-menu with a delay of 900ms
        setTimeout(function () {
          document.querySelector(".mobile-menu").classList.remove("show-menu");
        }, 900);

        // Remove class "mobile-menu__backdrop-active" from .mobile-menu__backdrop with a delay of 1100ms
        setTimeout(function () {
          document
            .querySelector(".mobile-menu__backdrop")
            .classList.remove("mobile-menu__backdrop-active");
        }, 1100);

        // Add class "nav-fade-active" to .mobile-menu__wrapper
        document
          .querySelector(".mobile-menu__wrapper")
          .classList.add("nav-fade-active");

        // Remove class "body-active" from the body element
        document.body.classList.remove("body-active");
      });
    });

  // Agregar click event listener a todos los enlaces dentro del menú móvil
  document.querySelectorAll(".mobile-menu .nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      // Cerrar el menú móvil aquí
      closeMobileMenu();
    });
  });

  // Función para cerrar el menú móvil
  function closeMobileMenu() {
    // Remove class "show-menu" from .mobile-menu with a delay of 900ms
    setTimeout(function () {
      document.querySelector(".mobile-menu").classList.remove("show-menu");
    }, 900);

    // Remove class "mobile-menu__backdrop-active" from .mobile-menu__backdrop with a delay of 1100ms
    setTimeout(function () {
      document
        .querySelector(".mobile-menu__backdrop")
        .classList.remove("mobile-menu__backdrop-active");
    }, 1100);

    // Add class "nav-fade-active" to .mobile-menu__wrapper
    document
      .querySelector(".mobile-menu__wrapper")
      .classList.add("nav-fade-active");

    // Remove class "body-active" from the body element
    document.body.classList.remove("body-active");
  }
});
</script>
