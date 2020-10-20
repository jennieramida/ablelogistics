<template>
  <div class="_ovfy-hd">
    <div class="container _mgv-64px-sm _mgv-32px _ovfy-hd">
      <div class="row _mgbt-64px-sm">
        <div class="col-12  _dp-f _fdrt-cl _alit-ct">
          <h1
            v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
            class="_cl-dark _fw-bold _ltspc-2px"
          >
            Our Services
          </h1>
          <div
            v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
            class="_bgcl-primary _w-128px _mgt-12px-sm _mgt-8px _h-4px"
          ></div>
          <h5
            v-scroll-reveal="{ delay: 800, origin: 'left', distance: '120px' }"
            class="_cl-primary _mgt-32px _lh-150pct _tal-ct _fs-4-sm _fs-6 _ttf-upc _ltspc-2px"
          >
            Able logistics Is currently serving a wide range of business.<br
              class="_dp-b-sm _dp-n"
            />
            Our activities are covering within the scope as follows:
          </h5>
        </div>
      </div>

      <!-- Services -->
      <!-- 1 : Sea Freight -->
      <div
        id="sea-freight"
        class="row _pdh-16px _alit-ct _mgt-32px _mgbt-128px-sm _dp-f-sm _dp-b"
      >
        <div
          v-scroll-reveal="{
            delay: 1200,
            origin: 'left',
            distance: '120px'
          }"
          class="_f-1 _pst-rlt"
        >
          <img
            src="../../assets/images/services/sea-freight.jpg"
            class="_w-100pct  _ojf-cv"
            alt=""
          />
        </div>
        <div
          v-scroll-reveal="{
            delay: 1200,
            origin: 'right',
            distance: '120px'
          }"
          class="_f-1 order-last _mgl-48px-sm _pst-rlt"
        >
          <h3
            class="left-font _mgt-16px _mgt-0px-sm _tal-ct _pst-asl-sm _pst-rlt _tal-l-sm "
          >
            <span class="_dp-b _fw-bold _cl-primary-dark">Sea</span>
            <span class=" _dp-b _fw-light _cl-primary-medium">freight</span>
          </h3>
          <h5
            v-html="
              'We Able logistics, has the capability and experience to help you navigate every step, from shore to ship and beyond. With links to all TH ports and our network partners links to most international ports, we are able to provide both import and export clearance to all forms of Sea freight.'
            "
            class="_lh-150pct _pdt-12px-sm _mgt-128px-sm _mgt-16px _cl-grey-dark _tal-l-sm _tal-ct _fw-light"
          />
        </div>
      </div>
      <!-- 2 : Air Freight -->
      <div
        id="air-freight"
        class="row _pdh-16px _alit-ct _mgt-32px _mgbt-128px-sm _dp-f-sm _dp-b"
      >
        <div
          v-scroll-reveal="{
            delay: 300,
            origin: 'right',
            distance: '120px'
          }"
          class="_f-1"
        >
          <img
            src="../../assets/images/services/air-freight.jpg"
            class="_w-100pct  _ojf-cv"
            alt=""
          />
        </div>
        <div
          v-scroll-reveal="{
            delay: 300,
            origin: 'left',
            distance: '120px'
          }"
          class="_f-1 order-first"
        >
          <h3
            class="_pst-rlt _tal-r-sm _tal-ct _pst-asl-sm right-font _mgt-16px _mgt-0px-sm"
          >
            <span class="_dp-b _fw-bold _cl-primary-dark">Air</span>
            <span class=" _dp-b _fw-light _cl-primary-medium">freight</span>
          </h3>
          <h5
            v-html="
              'We understand the importance of urgency and accuracy in the critical and time-sensitive arena of Air freight, so, over the last several years, we have successfully built and maintained strong relationships with major airlines both in Thailand and across the globe.'
            "
            class="_lh-150pct _mgr-128px-md _mgr-48px-sm _pdt-12px-sm _mgt-128px-sm _mgt-16px _cl-grey-dark _tal-r-sm _tal-ct _fw-light"
          />
        </div>
      </div>
      <!-- 3: Rail Road -->
      <div
        id="rail-road"
        class="row _pdh-16px _alit-ct _mgt-32px _mgbt-128px-sm _dp-f-sm _dp-b"
      >
        <div
          v-scroll-reveal="{
            delay: 1200,
            origin: 'left',
            distance: '120px'
          }"
          class="_f-1 _pst-rlt"
        >
          <img
            src="../../assets/images/services/rail-road.jpg"
            class="_w-100pct  _ojf-cv"
            alt=""
          />
        </div>
        <div
          v-scroll-reveal="{
            delay: 1200,
            origin: 'right',
            distance: '120px'
          }"
          class="_f-1 order-last _mgl-48px-sm _pst-rlt"
        >
          <h3
            class="left-font _mgt-16px _mgt-0px-sm _pst-rlt _tal-l-sm _tal-ct _pst-asl-sm"
          >
            <span class="_dp-b _fw-bold _cl-primary-dark">Rail Road</span>
            <span class=" _dp-b _fw-light _cl-primary-medium">Services</span>
          </h3>
          <h5
            v-html="
              'Another essential part of international and domestic logistics with millions of tons of cargo transported by road every year. We constantly update rates with our carriers, making sure that our customers will get the best price in this highly competitive market.'
            "
            class="_lh-150pct _pdt-12px-sm _mgt-128px-sm _mgt-16px _cl-grey-dark _tal-l-sm _tal-ct _fw-light"
          />
        </div>
      </div>
      <!-- 4 : Custom -->
      <div
        class="row _pdh-16px _alit-ct _mgt-32px _mgbt-128px-sm _dp-f-sm _dp-b"
      >
        <div
          v-scroll-reveal="{
            delay: 300,
            origin: 'right',
            distance: '120px'
          }"
          class="_f-1"
        >
          <img
            src="../../assets/images/services/customs-broker.jpg"
            class="_w-100pct  _ojf-cv"
            alt=""
          />
        </div>
        <div
          v-scroll-reveal="{
            delay: 300,
            origin: 'left',
            distance: '120px'
          }"
          class="_f-1 order-first"
        >
          <n-link
            :to="`/services/customs-broker`"
            class="_dp-f _fdrt-cl _alit-ct _alit-fe-sm _mgt-24px _mgt-0px-sm"
          >
            <h3
              class="right-font _mgt-16px _mgt-0px-sm _pst-rlt _tal-r-sm _tal-ct _pst-asl-sm"
            >
              <span class="_dp-b _fw-bold _cl-primary-dark">Customs</span>
              <span class=" _dp-b _fw-light _cl-primary-medium">Broker</span>
            </h3>
            <h5
              v-html="
                'Our in-house Customs consultants and customs specialist will guide you through Thai customs department.'
              "
              class="_lh-150pct _mgr-128px-md _mgr-48px-sm _pdt-12px-sm _mgt-128px-sm _mgt-16px _cl-grey-dark _tal-r-sm _tal-ct _fw-light"
            />
            <h6
              class="_mgr-128px-md _mgr-48px-sm _udl-hover-primary-dark _tal-r _mgt-16px"
            >
              Learn More ➞
            </h6>
          </n-link>
        </div>
      </div>
      <!-- 5: In transit Cargo -->
      <div
        id="in-transit"
        class="row _pdh-16px _alit-ct _mgt-32px  _dp-f-sm _dp-b"
      >
        <div
          v-scroll-reveal="{
            delay: 1200,
            origin: 'left',
            distance: '120px'
          }"
          class="_f-1 _pst-rlt"
        >
          <img
            src="../../assets/images/services/in-transit.jpg"
            class="_w-100pct  _ojf-cv"
            alt=""
          />
        </div>
        <div
          v-scroll-reveal="{
            delay: 1200,
            origin: 'right',
            distance: '120px'
          }"
          class="_f-1 order-last _mgl-48px-sm _pst-rlt"
        >
          <h3
            class="left-font _mgt-16px _mgt-0px-sm _pst-rlt _tal-l-sm _tal-ct _pst-asl-sm"
          >
            <span class="_dp-b _fw-bold _cl-primary-dark">In-Transit</span>
            <span class=" _dp-b _fw-light _cl-primary-medium">Cargo</span>
          </h3>
          <h5
            v-html="
              'A cross border trucking service to Laos, Cambodia and Malaysia'
            "
            class="_lh-150pct _pdt-12px-sm _mgt-128px-sm _mgt-16px _cl-grey-dark _tal-l-sm _tal-ct _fw-light"
          />
        </div>
      </div>
    </div>

    <Cta />
  </div>
</template>

<script>
import Cta from '../../components/Cta'
export default {
  components: { Cta },
  data: () => ({
    services: [
      {
        title: 'Sea freight',
        slug: 'sea-freight',
        excerpt:
          'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse. Vitae sed .'
      },
      {
        title: 'Air freight',
        slug: 'air-freight',
        excerpt:
          'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse. Vitae sed .'
      },
      {
        title: 'Rail Road Service',
        slug: 'rail-road',
        excerpt:
          'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse. Vitae sed .'
      },
      {
        title: 'Customs Broker',
        slug: 'customs-broker',
        excerpt:
          'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse. Vitae sed .'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@media (max-width: $sm) {
  .sv-img {
    max-height: 180px;
  }
}
.left-font {
  font-size: 3rem;

  top: 0px;
  text-transform: uppercase;
  line-height: 80% !important;
  @media (min-width: $sm) {
    font-size: 4rem;
    left: -80px;
  }
}
.right-font {
  font-size: 3rem;
  top: 0px;
  text-transform: uppercase;
  line-height: 80% !important;
  @media (min-width: $sm) {
    font-size: 4rem;
    right: -30px;
  }
}
</style>
