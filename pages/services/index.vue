<template>
  <section class="wrapper">
    <div class="container">
      <div
        class="row _mgt-32px-sm _pdt-32px _jtfct-ct _mgbt-32px _mgbt-64px-md"
      >
        <div class="col-12 _dp-f _fdrt-cl _alit-ct _tal-ct">
          <h1
            v-scroll-reveal="{
              delay: 300,
              origin: 'left',
              distance: '120px'
            }"
            class="_cl-dark _fw-bold _ttf-cptl _ltspc-8px"
          >
            Our Services
          </h1>
          <div class="_bgcl-primary _w-128px _mgt-12px _mgbt-24px _h-4px" />
          <h4
            v-scroll-reveal
            class="_cl-primary-dark _lh-150pct  _fs-5-sm _fs-6 _ttf-upc _ltspc-2px"
          >
            Able logistics Is currently serving a wide range of business.<br
              class="_dp-n _dp-b-md"
            />
            Our activities are covering within the scope as follows:
          </h4>
        </div>
      </div>
      <!-- Row 1 -->
      <div class="row _mgbt-24px-md _jtfct-spbtw">
        <div class="col-12 col-lg-4 col-md-5">
          <n-link to="/services/sea-freight">
            <div class="card-wrapper _bsd-default">
              <div
                class="_f-3 _pdv-64px-sm _pdr-12px-sm _pdl-24px _dp-f _fdrt-cl _jtfct-ct"
              >
                <h3 v-html="'01'" class="_cl-primary-dark _fw-bold" />
                <h2
                  v-html="'Sea Freight'"
                  class="_cl-primary _fw-bold _mgt-4px _fs-2-md _fs-3-sm _fs-4"
                />
              </div>
              <div class="_f-2">
                <img
                  src="../../assets/images/services/sea-freight.jpg"
                  class="_w-100pct _bdbtrrd-4px _bdtrrd-4px _ojf-cv _h-100pct"
                  alt=""
                />
              </div>
            </div>
          </n-link>
        </div>
        <div class="_dp-b-md _dp-n col-lg-4 col-md-2" />
        <div
          class="col-12 col-lg-4 col-md-5 _mgt-24px _mgt-48px-sm _mgt-0px-md"
        >
          <n-link to="/services/air-freight">
            <div class="card-wrapper _bsd-default">
              <div
                class="_f-3 _pdv-64px-sm _pdr-12px-sm _pdl-24px _dp-f _fdrt-cl _jtfct-ct"
              >
                <h3 v-html="'02'" class="_cl-primary-dark _fw-bold" />
                <h2
                  v-html="'Air Freight'"
                  class="_cl-primary _fw-bold _mgt-4px _fs-2-md _fs-3-sm _fs-4"
                />
              </div>
              <div class="_f-2">
                <img
                  src="../../assets/images/services/air-freight.jpg"
                  class="_w-100pct _bdbtrrd-4px _bdtrrd-4px _ojf-cv _h-100pct"
                  alt=""
                />
              </div>
            </div>
          </n-link>
        </div>
      </div>
      <!-- Row 2 -->
      <div class="row _mgv-24px _mgv-48px-sm _mgv-8px-lg _jtfct-spbtw">
        <div class="_dp-b-md _dp-n col-lg-4 col-md-2" />
        <div class="col-12 col-lg-4 col-md-5">
          <n-link to="/services/rail-road">
            <div class="card-wrapper _bsd-default">
              <div
                class="_f-3 _pdv-64px-sm _pdr-12px-sm _pdl-24px _dp-f _fdrt-cl _jtfct-ct"
              >
                <h3 v-html="'03'" class="_cl-primary-dark _fw-bold" />
                <h2
                  v-html="'Rail Road Services'"
                  class="_cl-primary _fw-bold _mgt-4px _fs-2-md _fs-3-sm _fs-4"
                />
              </div>
              <div class="_f-2">
                <img
                  src="../../assets/images/services/rail-road.jpg"
                  class="_w-100pct _bdbtrrd-4px _bdtrrd-4px _ojf-cv _h-100pct"
                  alt=""
                />
              </div>
            </div>
          </n-link>
        </div>
        <div class="_dp-b-md _dp-n col-lg-4 col-md-2" />
      </div>
      <!-- Row 3 -->
      <div class="row _mgbt-64px _mgv-24px-sm _jtfct-spbtw">
        <div class="col-12 col-lg-4 col-md-5">
          <n-link to="/services/customs-broker">
            <div class="card-wrapper _bsd-default">
              <div
                class="_f-3 _pdv-64px-sm _pdr-12px-sm _pdl-24px _dp-f _fdrt-cl _jtfct-ct"
              >
                <h3 v-html="'04'" class="_cl-primary-dark _fw-bold" />
                <h2
                  v-html="'Customs Broker'"
                  class="_cl-primary _fw-bold _mgt-4px _fs-2-md _fs-3-sm _fs-4"
                />
              </div>
              <div class="_f-2">
                <img
                  src="../../assets/images/services/customs-broker.jpg"
                  class="_w-100pct _bdbtrrd-4px _bdtrrd-4px _ojf-cv _h-100pct"
                  alt=""
                />
              </div>
            </div>
          </n-link>
        </div>
        <div class="_dp-b-md _dp-n col-lg-4 col-md-2" />
        <div
          class="col-12 col-lg-4 col-md-5 _mgt-24px _mgt-48px-sm _mgt-0px-md"
        >
          <n-link to="/services/in-transit-cargo">
            <div class="card-wrapper _bsd-default">
              <div
                class="_f-3 _pdv-64px-sm _pdr-12px-sm _pdl-24px _dp-f _fdrt-cl _jtfct-ct"
              >
                <h3 v-html="'05'" class="_cl-primary-dark _fw-bold" />
                <h2
                  v-html="'In-transit Cargo'"
                  class="_cl-primary _fw-bold _mgt-4px _fs-2-md _fs-3-sm _fs-4"
                />
              </div>
              <div class="_f-2">
                <img
                  src="../../assets/images/services/in-transit.jpg"
                  class="_w-100pct _bdbtrrd-4px _bdtrrd-4px _ojf-cv _h-100pct"
                  alt=""
                />
              </div>
            </div>
          </n-link>
        </div>
      </div>
    </div>
    <div
      class="container-fluid _mgt-128px-md _mgt-64px-sm _mgt-32px _bgcl-white _pst-rlt _zid-1 _bdtw-1px _bdcl-primary"
    >
      <Cta :hasBg="true" :hasBorder="false" />
    </div>
  </section>
</template>

<script>
import Cta from '../../components/Cta'
export default {
  components: { Cta }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  border-radius: 4px;
  background-color: white;
  transition: 0.35s $bezier;
  &:hover {
    transform: scale(1.05);
  }
}

.wrapper {
  position: relative;
  z-index: 2;
  background: rgb(247, 251, 255);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://i.ibb.co/WK2QpCX/Port-de-Barcelona-in-night-commercial-industrial-port-Barcelona-Free-Port.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    opacity: 0.1;
  }
}
</style>
