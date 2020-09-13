<template>
  <div class="row _pst-rlt">
    <div class="col-12 force-full-width _pdh-0px">
      <img
        src="../../assets/images/ablehero.jpg"
        class="_w-100vw _ptev-n"
        alt=""
      />
    </div>
    <div class="typing-hero  _tal-r _jtfct-fe _alit-fe _fdrt-cl">
      <!-- <h6 class="_cl-white">ABLE Logistics was established since 2000</h6> -->
      <h1 class="_cl-white _lh-125pct">Our wide range of services</h1>
      <h1 class="_cl-white _lh-125pct">
        at <span class="_fw-bold">ABLE logistics</span> covered
      </h1>

      <vue-typed-js
        :typeSpeed="120"
        :backDelay="3000"
        :loop="true"
        :shuffle="true"
        :strings="[
          'seafreight',
          'airfreight',
          'multi-modal transport',
          'multi-modal logistic',
          'warehousing',
          'Rail Road Service',
          'Customs Broker',
          'distribution',
          'custom clearance'
        ]"
        class="_fs-extra-l _cl-white"
      >
        <h1 class="typing _ttf-cptl _fs-extra-l _cl-white _fw-bold"></h1>
      </vue-typed-js>
      <n-link to="/services">
        <h5 class="_mgt-64px _cl-white secondary-link _udl-hover-white">
          Learn More About Our Services
        </h5>
      </n-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

export default {}
</script>
<style lang="scss" scoped>
._fs-extra-l {
  font-size: 4rem;
}
.typed-element {
  .typed-cursor {
    font-size: 2rem !important;
  }
}

.typing-hero {
  position: absolute;
  top: 20vh;
  right: 32px;
  display: flex;
}
</style>
