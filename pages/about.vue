<template>
  <section>
    <div class="container">
      <div
        class="row _mgt-32px-sm _pdt-32px _mgbt-32px-sm  _jtfct-ct _pst-rlt _zid-1"
      >
        <div
          class="col-12 _mgbt-64px-sm _mgbt-32px _dp-f _fdrt-cl _alit-ct _tal-ct"
        >
          <h1
            v-scroll-reveal="{
              delay: 300,
              origin: 'left',
              distance: '120px'
            }"
            class="_cl-dark _fw-bold _ttf-cptl _ltspc-8px"
          >
            About Able Logistics
          </h1>
          <div class="_bgcl-primary _w-128px _mgt-12px _mgbt-24px _h-4px" />
          <h4
            v-scroll-reveal
            class="_cl-primary _lh-150pct  _fs-5-sm _fs-6 _ttf-upc _ltspc-2px"
          >
            With over 20 years of long experience, <br />we guarantee that our
            customers will meet their satisfaction and service level.
          </h4>
        </div>
      </div>
      <div class="row  _mgbt-128px-sm _mgbt-64px  _jtfct-ct _dp-f _pst-rlt">
        <div class=" map-wrapper">
          <img src="../assets/images/map.png" class="map-size" alt="" />
        </div>
        <div
          v-scroll-reveal="{
            delay: 400
          }"
          class="col-12 col-lg-3 col-md-4 _pst-rlt _zid-1 _mgbt-64px _bdrw-1px-md _bdcl-primary-alpha _mgbt-0px-md"
        >
          <img
            src="../assets/images/ab3.jpg"
            class="_w-100pct  _h-256px _h-128px-md _ojf-cv _pdh-24px-lg _pdh-12px-md _pdr-0px"
            alt=""
          />
          <h4
            class="_tal-ct-sm _ttf-cptl _fw-600 _cl-dark _mgt-32px _mgbt-24px _pdh-24px-lg _pdh-12px-md _pdr-0px"
          >
            Know more about us
          </h4>
          <h6
            class="_lh-150pct _cl-primary-dark _fw-bold _pdh-24px-lg _pdh-12px-md _pdr-0px"
          >
            Able logistics is an international freight forwarding company
            established on 2005 in Bangkok, Thailand. It is strategically
            located near both the Customs house and the Port of Authority of
            Thailand for an easy access to operate and provide the fastest
            services to all customers
          </h6>
        </div>
        <div
          v-scroll-reveal="{
            delay: 600
          }"
          class="col-12 col-lg-3 col-md-4 _pst-rlt _zid-1 _mgbt-64px _bdrw-1px-md _bdcl-primary-alpha _mgbt-0px-md "
        >
          <img
            src="../assets/images/ab2.jpg"
            class="_w-100pct  _h-256px _h-128px-md _ojf-cv _pdh-24px-lg _pdh-12px-md _pdr-0px"
            alt=""
          />
          <h4
            class="_tal-ct-sm _ttf-cptl _fw-600 _cl-dark _mgt-32px _mgbt-24px _pdh-24px-lg _pdh-12px-md _pdr-0px"
          >
            Where it all begins
          </h4>
          <h6
            class="_lh-150pct _cl-primary-dark _fw-bold  _pdh-24px-lg _pdh-12px-md _pdr-0px"
          >
            ... We started off as a small business mainly to earn and build
            customer loyalty through our passion and sincerity. Since then, our
            company has grown rapidly. With a growing number of well-trained
            staffs, our large customer based national wide and a strong
            worldwide network, we ensure that we can render supreme service to
            our customers in all respects.
          </h6>
        </div>
        <div
          v-scroll-reveal="{
            delay: 800
          }"
          class="col-12 col-lg-3 col-md-4 _pst-rlt _zid-1 _mgbt-64px  _mgbt-0px-md"
        >
          <img
            src="../assets/images/ab4.jpg"
            class="_w-100pct  _h-256px _h-128px-md _ojf-cv _pdh-24px-lg _pdh-12px-md _pdr-0px"
            alt=""
          />
          <h4
            class="_tal-ct-sm _ttf-cptl _fw-600 _cl-dark _mgt-32px _mgbt-24px _pdh-24px-lg _pdh-12px-md _pdr-0px"
          >
            Understand our aim
          </h4>
          <h6
            class="_lh-150pct _cl-primary-dark _fw-bold _pdh-24px-lg _pdh-12px-md _pdr-0px"
          >
            To be the leader in the Freight Forwarding business and achieve
            customer positive sentiment by our full range of logistics services.
            Logistics are clearly created to provide convenience but by using
            our services, we assure that your business and cargoes are in safe
            hands.
          </h6>
        </div>
      </div>
    </div>

    <div class="force-full-width _bgcl-primary-light _mgt-64px-sm ">
      <div class="container _pdv-32px">
        <div class="row _pd-24px _jtfct-ct">
          <div class="col-md-8">
            <h4 v-scroll-reveal class="_lh-150pct _tal-ct _cl-white">
              Last but not least, our team would like to express our gratitude
              and appreciation to our customers, our suppliers as well as our
              overseas agencies for all the support. We promise to keep up the
              good work. <br /><br /><span class="_fw-bold"
                >The Management Group</span
              >
            </h4>
          </div>
        </div>
      </div>
    </div>
    <Cta :hasBorder="false" />
  </section>
</template>

<script>
import Cta from '../components/Cta'
export default {
  components: {
    Cta
  }
}
</script>

<style lang="scss" scoped>
.left-font {
  font-size: 3rem;
  z-index: 1;
  top: 0px;
  text-transform: uppercase;
  line-height: 80% !important;
  @media (min-width: $sm) {
    font-size: 4rem;
    left: -50px;
  }
}

.right-font {
  font-size: 3rem;
  z-index: 1 !important;
  top: 0px;
  text-transform: uppercase;
  line-height: 80% !important;
  @media (min-width: $sm) {
    font-size: 4rem;
    right: -50px;
  }
}
.about-1 {
  @media (min-width: $sm) {
    height: 350px;
  }
}

.about-3 {
  @media (min-width: $sm) {
    height: 350px;
  }
}
.map-wrapper {
  display: flex;
  position: fixed;
  top: 250px;
  @media (min-width: 840px) {
    display: flex;
    position: absolute;
    top: -50px;
  }
}
.map-size {
  @media (min-width: 840px) {
    width: 100%;
    opacity: 0.5;
    height: 90vh;
    object-fit: contain;
    z-index: 0;
  }
  height: 100vh;
  opacity: 0.4;
  z-index: -10;
}
</style>
