<template>
  <section>
    <div class="container _mgv-64px-sm _mgv-32px">
      <div class="row _mgbt-48px">
        <div class="col-12 _dp-b-sm _dp-f _fdrt-cl _alit-ct">
          <h1
            class="_cl-dark _fw-bold _tal-ct _tal-l-sm"
            v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
          >
            About <br class="_dp-b _dp-n-sm" />
            Able Logistics
          </h1>
          <div
            v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
            class="_bgcl-primary _w-64px _mgt-8px _h-4px _mgbt-32px"
          ></div>
          <img
            v-scroll-reveal="{ delay: 600 }"
            src="../assets/images/heroabout.jpg"
            class="_w-100pct"
            alt=""
          />
          <h4
            v-scroll-reveal
            class="_cl-dark _mgt-48px _lh-150pct _tal-ct _fs-4-sm _fs-5"
          >
            With over 20 years of long experience, we guarantee that
            <br class="_dp-n _dp-b-sm" />our customers will meet their
            satisfaction and service level.
          </h4>
        </div>
      </div>
      <div class="row _bdtw-1px _bdcl-primary _alit-ct" id="company">
        <!-- 1 -->
        <div
          class="col-sm-6 _mgt-64px-sm _pdt-32px"
          v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
        >
          <img src="../assets/images/ab3.jpg" class="_w-100pct" alt="" />
        </div>
        <div
          class="col-sm-6 _mgt-64px-sm _pdt-32px _pdl-48px-sm"
          v-scroll-reveal="{ delay: 300, origin: 'right', distance: '120px' }"
        >
          <h6 class="_ttf-upc _mgbt-12px _fw-bold _cl-primary-medium">
            ABOUT US
          </h6>
          <h5 class="_lh-125pct _cl-dark _pdr-64px-sm">
            Able logistics is an international freight forwarding company
            established on 2005 in Bangkok, Thailand. It is strategically
            located near both the Customs house and the Port of Authority of
            Thailand for an easy access to operate and provide the fastest
            services to all customers
          </h5>
        </div>
      </div>
      <!-- 2 -->
      <div class="row  _alit-ct" id="story">
        <div
          class="col-sm-6 _mgt-64px-sm _pdt-32px"
          v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
        >
          <h6 class="_ttf-upc _mgbt-12px _fw-bold _cl-primary-medium">
            Where it all begins
          </h6>
          <h5 class="_lh-125pct _cl-dark _pdr-64px-sm">
            We started off as a small business mainly to earn and build customer
            loyalty through our passion and sincerity. Since then, our company
            has grown rapidly. With a growing number of well-trained staffs, our
            large customer based national wide and a strong worldwide network,
            we ensure that we can render supreme service to our customers in all
            respects.
          </h5>
        </div>
        <div
          v-scroll-reveal="{ delay: 300, origin: 'right', distance: '120px' }"
          class="col-sm-6 _mgt-64px-sm _pdt-32px order-sm-last order-first"
        >
          <img src="../assets/images/ab2.jpg" class="_w-100pct" alt="" />
        </div>
      </div>
      <div class="row  _alit-ct" id="aim">
        <!-- 3 -->
        <div
          class="col-sm-6 _mgt-64px-sm _pdt-32px"
          v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
        >
          <img src="../assets/images/ab4.jpg" class="_w-100pct" alt="" />
        </div>
        <div
          class="col-sm-6 _mgt-64px-sm _pdt-32px  _pdl-48px-sm"
          v-scroll-reveal="{ delay: 300, origin: 'right', distance: '120px' }"
        >
          <h6 class="_ttf-upc _mgbt-12px _fw-bold _cl-primary-medium">
            Our Aim
          </h6>
          <h5 class="_lh-125pct _cl-dark _pdr-64px-sm ">
            To be the leader in the Freight Forwarding business and achieve
            customer positive sentiment by our full range of logistics services.
            Logistics are clearly created to provide convenience but by using
            our services, we assure that your business and cargoes are in safe
            hands.
          </h5>
        </div>
      </div>
    </div>
    <div class="force-full-width _bgcl-primary _mgt-64px">
      <div class="container _pdv-32px">
        <div class="row _bgcl-primary _pd-24px _jtfct-ct">
          <div class="col-sm-8">
            <h5 class="_lh-150pct _tal-ct" v-scroll-reveal>
              Last but not least, our team would like to express our gratitude
              and appreciation to our customers, our suppliers as well as our
              overseas agencies for all the support. We promise to keep up the
              good work. <br /><br /><span class="_fw-bold"
                >The Management Group</span
              >
            </h5>
          </div>
        </div>
      </div>
    </div>
    <Cta />
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

<style></style>
