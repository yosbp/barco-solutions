<template>
  <section class="call-action section-padding sub-bg bg-img"
    :style="`background-image: url(${img ? img : '/img/patrn.svg'})`">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-9">
          <div class="content sm-mb30">
            <h6 class="wow words chars splitting" data-splitting>Hablanos</h6>
            <h2 class="wow words chars splitting" data-splitting>
              Sobre tu <br />
              <b class="back-color">Próximo Proyecto</b>.
            </h2>
          </div>
        </div>

        <div class="col-md-4 col-lg-3 valign">
          <NuxtLink to="/" class="butn bord curve wow fadeInUp" data-wow-delay=".5s">
            <span>Ponte en Contacto</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { img } = defineProps(['img']);
</script>