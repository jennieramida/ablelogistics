<template>
  <div>
    <div class="container _mgv-64px-sm _mgv-32px">
      <div class="row _mgbt-48px">
        <div class="col-12 _dp-b-sm _dp-f _fdrt-cl _alit-ct">
          <h1
            class="_cl-dark _fw-bold"
            v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
          >
            Our Services
          </h1>
          <div
            v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
            class="_bgcl-primary _w-64px _mgt-8px _h-4px"
          ></div>
          <h5
            v-scroll-reveal="{ delay: 800, origin: 'left', distance: '120px' }"
            class="_cl-dark _mgt-24px _lh-150pct _tal-ct _tal-l-sm _fs-5 _fs-4-sm"
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
      <div class="row _pdh-16px _alit-ct _mgt-32px _dp-f-sm _dp-b">
        <div
          class="_f-1"
          v-scroll-reveal="{ delay: 1200, origin: 'left', distance: '120px' }"
        >
          <img
            src="../../assets/images/services/sea-freight.jpg"
            class="_w-100pct sv-img _ojf-cv"
            alt=""
          />
        </div>
        <div
          class="_f-1 order-last _mgl-48px-sm"
          v-scroll-reveal="{ delay: 1200, origin: 'right', distance: '120px' }"
        >
          <n-link
            :to="`/services/sea-freight`"
            class="_dp-b-sm _dp-f _fdrt-cl _alit-ct _mgt-24px _mgt-0px-sm"
          >
            <h3 v-html="'Sea freight'" class="_fw-bold _cl-dark" />
            <h5
              v-html="
                'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse.'
              "
              class="_lh-150pct _mgr-128px-md _mgr-64px-sm _mgt-12px _cl-grey-dark _tal-l-sm _tal-ct"
            />
            <h6 class="_udl-hover-primary-dark _mgt-48px-sm _mgt-16px">
              Learn More ➞
            </h6>
          </n-link>
        </div>
      </div>
      <!-- 2 : Air Freight -->
      <div class="row _pdh-16px _alit-ct _mgt-32px _dp-f-sm _dp-b">
        <div
          class="_f-1"
          v-scroll-reveal="{ delay: 300, origin: 'right', distance: '120px' }"
        >
          <img
            src="../../assets/images/services/air-freight.jpg"
            class="_w-100pct sv-img _ojf-cv"
            alt=""
          />
        </div>
        <div
          class="_f-1 order-first"
          v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
        >
          <n-link
            :to="`/services/air-freight`"
            class="_dp-b-sm _dp-f _fdrt-cl _alit-ct _mgt-24px _mgt-0px-sm"
          >
            <h3 v-html="'Air freight'" class="_fw-bold _cl-dark" />
            <h5
              v-html="
                'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse.'
              "
              class="_tal-l-sm _tal-ct _lh-150pct _mgr-128px-md _mgr-64px-sm _mgt-12px _cl-grey-dark"
            />
            <h6 class="_udl-hover-primary-dark _mgt-48px-sm _mgt-16px">
              Learn More ➞
            </h6>
          </n-link>
        </div>
      </div>
      <!-- 3: Rail Road -->
      <div class="row _pdh-16px _alit-ct _mgt-32px _dp-f-sm _dp-b">
        <div
          class="_f-1"
          v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
        >
          <img
            src="../../assets/images/services/rail-road.jpg"
            class="_w-100pct sv-img _ojf-cv"
            alt=""
          />
        </div>
        <div
          class="_f-1 order-last _mgl-48px-sm"
          v-scroll-reveal="{ delay: 300, origin: 'right', distance: '120px' }"
        >
          <n-link
            :to="`/services/rail-road`"
            class="_dp-b-sm _dp-f _fdrt-cl _alit-ct _mgt-24px _mgt-0px-sm"
          >
            <h3 v-html="'Rail Road Services'" class="_fw-bold _cl-dark" />
            <h5
              v-html="
                'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse.'
              "
              class="_tal-l-sm _tal-ct _lh-150pct _mgr-128px-md _mgr-64px-sm _mgt-12px _cl-grey-dark"
            />
            <h6 class="_udl-hover-primary-dark _mgt-48px-sm _mgt-16px">
              Learn More ➞
            </h6>
          </n-link>
        </div>
      </div>
      <!-- 4 : Custom -->
      <div class="row _pdh-16px _alit-ct _mgt-32px _dp-f-sm _dp-b">
        <div
          class="_f-1"
          v-scroll-reveal="{ delay: 300, origin: 'right', distance: '120px' }"
        >
          <img
            src="../../assets/images/services/customs-broker.jpg"
            class="_w-100pct sv-img _ojf-cv"
            alt=""
          />
        </div>
        <div
          class="_f-1 order-first"
          v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
        >
          <n-link
            :to="`/services/customs-broker`"
            class="_dp-b-sm _dp-f _fdrt-cl _alit-ct _mgt-24px _mgt-0px-sm"
          >
            <h3 v-html="'Customs Broker'" class="_fw-bold _cl-dark" />
            <h5
              v-html="
                'Feugiat hendrerit congue eu posuere sed lorem commodo suspendisse.'
              "
              class="_tal-l-sm _tal-ct _lh-150pct _mgr-128px-md _mgr-64px-sm _mgt-12px _cl-grey-dark"
            />
            <h6 class="_udl-hover-primary-dark _mgt-48px-sm _mgt-16px">
              Learn More ➞
            </h6>
          </n-link>
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
</style>
