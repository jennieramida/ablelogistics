<template>
  <section class="wrapper">
    <!-- Hero -->
    <div class="container _mgv-32px">
      <div class="row _mgt-32px-sm _pdt-32px _jtfct-ct">
        <div class="col-12 _mgbt-32px _dp-f _fdrt-cl _alit-ct ">
          <h1
            v-scroll-reveal="{
              delay: 300,
              origin: 'left',
              distance: '120px'
            }"
            class="_cl-dark _fw-bold _ttf-cptl _ltspc-8px _fs-1-sm _fs-2 _tal-ct "
          >
            Customs Broker Service
          </h1>
          <div class="_bgcl-primary _w-128px _mgt-12px _mgbt-24px _h-4px" />
          <h4
            v-scroll-reveal
            class="_cl-primary-dark _lh-150pct  _fs-5-sm _fs-6 _ttf-upc _ltspc-2px _tal-ct "
          >
            Our in-house Customs consultants and customs specialist<br
              class="_dp-b-sm _dp-n"
            />
            will guide you through Thai customs department.
          </h4>
        </div>
      </div>
      <div class="row _jtfct-ct">
        <div
          v-scroll-reveal="{ delay: 1200, origin: 'left', distance: '120px' }"
          class="col-sm-5"
        >
          <img
            src="../../assets/images/services/customs-broker.jpg"
            class="_w-100pct _bdrd-4px _bsd-default _h-256px-sm _h-128px _ojf-cv"
            alt=""
          />
        </div>
      </div>
      <div class="row _jtfct-ct">
        <div
          v-scroll-reveal="{ delay: 1200, origin: 'right', distance: '120px' }"
          class="col-sm-6 "
        >
          <h4
            class="_cl-dark _mgt-24px _lh-150pct _fw-light _fs-5 _fs-4-sm  _tal-l"
          >
            <ul>
              <li>Packing/Crating</li>
              <li>
                Customs Clearance, bonded cargoes and other customs related
                matters
              </li>
              <li>Insurance Services</li>
              <li>
                Export Procedures and documentation: Form A, Form D and
                Certificate of Origin
              </li>
              <li>Consultation on transport and logistics projects</li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
    <div class="force-full-width _bgcl-white _mgt-64px">
      <Cta :hasBorder="false" />
    </div>
  </section>
</template>

<script>
import Cta from '../../components/Cta'
export default {
  components: {
    Cta
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: $sm) {
  .sv-img _ {
    max-height: 180px;
  }
}
.ojf-cv {
  object-fit: cover;
}
.service-icon {
  height: 60px;
  object-fit: contain;
  margin-bottom: 8px;
  @media (max-width: $sm) {
    height: 48px;
  }
}

.service-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 48px 0px;
  transition: 0.2s $bezier;
  border-color: $primary-medium;
  &:hover {
    background-color: rgba($primary-light, 0.5);
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
