<template>
  <section>
    <div class="container">
      <!-- Hero -->
      <Hero />
      <About class="_mgv-64px-sm _pdt-24px-sm _pdbt-0px-sm _pdv-48px" />
    </div>
    <div class="force-full-width _bgcl-primary-alpha _pdv-64px-sm _pdv-48px">
      <div class="container _pdv-24px-sm">
        <div class="row ">
          <div class="col-12 _dp-f _jtfct-spbtw-sm _jtfct-ct _alit-fe _pdh-0px">
            <h1
              v-scroll-reveal="{ delay: 500, origin: 'left' }"
              class="_fw-bold _fs-2-sm _fs-3 _ltspc-2px"
            >
              Our Services
            </h1>
            <n-link
              v-scroll-reveal="{ delay: 500, origin: 'right' }"
              to="/services"
              class="_udl-hover-primary-dark _dp-f-sm _dp-n"
            >
              <h6>Learn More ➞</h6>
            </n-link>
          </div>
        </div>
        <div class="row _mgt-24px">
          <div class=" col-12 col-sm _pdh-0px">
            <n-link
              v-scroll-to="'#sea-freight'"
              to="services#sea-freight"
              class="service-box _bdw-1px"
            >
              <img src="../assets/images/s-1.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct">
                Sea Freight
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
          <div class=" col-12 col-sm _pdh-0px">
            <n-link
              v-scroll-to="'#air-freight'"
              to="services#air-freight"
              class="service-box _bdvw-1px-sm _bdlw-1px _bdlw-0px-sm _bdrw-1px"
            >
              <img src="../assets/images/s-2.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct">
                Air Freight
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
          <div class=" col-12 col-sm _pdh-0px">
            <n-link
              v-scroll-to="'#rail-road'"
              to="services#rail-road"
              class="service-box _bdvw-1px-sm _bdtw-1px _bdlw-1px _bdlw-0px-sm _bdrw-1px"
            >
              <img src="../assets/images/s-3.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct ">
                Rail Road Services
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
          <div class="col-12 col-sm _pdh-0px">
            <n-link
              to="services/customs-broker"
              class="service-box _bdvw-1px-sm _bdtw-1px _bdlw-1px _bdlw-0px-sm _bdrw-1px"
            >
              <img src="../assets/images/s-4.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct">
                Customs Broker
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
          <div class="col-12 col-sm _pdh-0px">
            <n-link
              v-scroll-to="'#in-transit'"
              to="services#in-transit"
              class="service-box  _bdvw-1px-sm _bdbtw-1px _bdlw-1px _bdlw-0px-sm _bdrw-1px"
            >
              <img src="../assets/images/s-5.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct">
                In-transit Cargo
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
        </div>
        <div class="row _dp-f _dp-n-sm _jtfct-ct ">
          <n-link to="/services" class="_mgt-48px _mgt-0px-sm">
            <button class="_bgcl-primary  _cl-white">
              <h6 class="_fs-6-sm _fs-5">Learn More</h6>
            </button>
          </n-link>
        </div>
      </div>
    </div>
    <div class="force-full-width _bgcl-primary-dark _pdv-64px-sm _pdv-48px">
      <div class="container">
        <div class="row">
          <div class="col-12 _dp-f _fdrt-r-sm _fdrt-cl _jtfct-spbtw _alit-ct">
            <h3
              v-scroll-reveal="{ delay: 500, origin: 'left', distance: '80px' }"
              class="_fw-bold _cl-white _fs-3-sm _fs-4 _tal-l-sm _tal-ct"
            >
              Need more information? We are ready to serve you with speed.
            </h3>
            <n-link
              v-scroll-reveal="{
                delay: 500,
                origin: 'right',
                distance: '80px'
              }"
              to="/contact"
              class="_mgt-24px _mgt-0px-sm"
            >
              <button class="_bgcl-white _cl-dark">
                <h6 class="_fs-6-sm _fs-5">Contact Us</h6>
              </button>
            </n-link>
          </div>
        </div>
      </div>
    </div>
    <div class=" force-full-width _dp-f _jtfct-ct _alit-ct">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7751.821758752916!2d100.54502353488772!3d13.723845199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994e7263debf%3A0xfec5a61a0865ac05!2z4Lil4Li44Lih4Lie4Li04LiZ4Li14LiX4Liy4Lin4LmA4Lin4Lit4Lij4LmMIChMdW1waW5pIFRvd2VyKQ!5e0!3m2!1sen!2sth!4v1600453133039!5m2!1sen!2sth"
        class="_w-100vw"
        height="400"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </section>
</template>

<script>
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
export default {
  components: {
    Hero,
    About
  }
}
</script>

<style lang="scss" scoped>
.services-card {
  transition: 0.2s $bezier;
  h4,
  div {
    color: $dark;
  }
  &:hover {
    h4,
    div {
      color: $primary-dark !important;
    }
    transform: translateY(-10px);
  }
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
</style>
