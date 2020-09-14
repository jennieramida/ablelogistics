<template>
  <div>
    <div class="row _pst-rlt _dp-f-md _dp-n">
      <div class="col-12 force-full-width _pdh-0px">
        <img
          src="../../assets/images/ablehero.jpg"
          class="_w-100vw _ptev-n"
          alt=""
        />
      </div>
      <div
        class="typing-hero  _tal-r-md _tal-ct _jtfct-fe-md _alit-fe-md _fdrt-cl _jtfct-ct _alit-ct"
      >
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
          <h5
            class="_mgt-64px-md _mgt-32px-sm _cl-white secondary-link _udl-hover-white"
          >
            Learn More About Our Services
          </h5>
        </n-link>
      </div>
    </div>
    <!-- Mobile -->
    <div class="force-full-width  _bgcl-primary">
      <div class="row _dp-n-md _dp-f _jtfct-ct ">
        <div class="col-12 _jtfct-ct _tal-ct _dp-f _fdrt-cl _alit-ct _pdv-48px">
          <h4 class="_cl-white _lh-125pct">Our wide range of services</h4>
          <h4 class="_cl-white _lh-125pct _mgbt-12px">
            at <span class="_fw-bold">ABLE logistics</span> covered
          </h4>
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
            class="_fs-2-sm _fs-3 _cl-white"
          >
            <h2 class="typing _ttf-cptl _fs-2-sm _fs-3 _cl-white _fw-bold"></h2>
          </vue-typed-js>
          <n-link to="/services" class="_mgt-16px">
            <h6
              class="_mgt-64px-md _mgt-32px-sm _cl-white secondary-link _udl-hover-white"
            >
              Learn More About Our Services
            </h6>
          </n-link>
        </div>
        <img
          src="../../assets/images/ablehero-mobile.jpg"
          class="mobile-img"
          alt=""
        />
      </div>
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
.mobile-img {
  width: 100%;
  pointer-events: none;
  max-height: 300px;
  object-fit: cover;
}
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
  @media (max-width: 1200px) {
    top: 10vh;
  }
  @media (max-width: 960px) {
    top: 8vh;
  }
  @media (max-width: 840px) {
    position: relative;
    right: 0px;
  }
}
</style>
