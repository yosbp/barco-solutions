<template>
  <footer :class="`${!hideBGCOLOR ? 'sub-bg' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="item md-mb50">
            <div class="title">
              <h5>Contáctanos</h5>
            </div>
            <ul>
              <!--            <li>
                <span class="icon pe-7s-map-marker"></span>
                <div class="cont">
                  <h6>Officeal Address</h6>
                  <p>504 White St . Dawsonville, GA 30534 , New York</p>
                </div>
              </li> -->
              <li>
                <span class="icon fab fa-whatsapp"></span>
                <div class="cont">
                  <h6>Escribenos</h6>
                  <p>
                    <a
                      href="https://api.whatsapp.com/send/?phone=584241417266&text&type=phone_number" target="_blank"
                      >+584241417266</a
                    >
                  </p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>Correo</h6>
                  <p>info@barcosolucionesit.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="item">
            <div class="logo">
              <img src="/img/logo-barco-light.png" alt="logo" />
            </div>
            <!--             <div class="social">
              <a href="#0">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#0">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#0">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#0">
                <i class="fab fa-youtube"></i>
              </a>
            </div> -->
            <div class="copy-right">
              <p>
                © 2024. Adapted by
                <a target="_blank" rel="external" href="http://yosmarb.com/"
                  >Yosmar B</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { hideBGCOLOR } = defineProps(["hideBGCOLOR"]);
</script>
