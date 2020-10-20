<template>
  <section>
    <!-- Hero -->
    <div class="container _mgv-64px-sm _mgv-32px">
      <div
        v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
        class="row _mgbt-48px _dp-b-sm _dp-f _fdrt-cl _alit-ct"
      >
        <div class="col-12 _dp-f _fdrt-cl _alit-ct">
          <h1 class="_cl-dark _fw-bold _ltspc-2px _tal-ct _fs-1-sm _fs-2d">
            Customs Broker Service
          </h1>
          <div
            class="_bgcl-primary _w-128px _mgt-12px-sm _mgt-8px _h-4px"
          ></div>
          <h5
            class="_cl-primary _mgt-48px _lh-150pct _tal-ct _fs-4-sm _fs-6 _ttf-upc _ltspc-2px"
          >
            Our in-house Customs consultants and customs specialist<br
              class="_dp-b-sm _dp-n"
            />
            will guide you through Thai customs department.
          </h5>
        </div>
      </div>
      <div class="row _alit-ct">
        <div
          v-scroll-reveal="{ delay: 1200, origin: 'left', distance: '120px' }"
          class="col-sm-6"
        >
          <img
            src="../../assets/images/services/customs-broker.jpg"
            class="_w-100pct  _ojf-cv"
            alt=""
          />
        </div>
        <div
          v-scroll-reveal="{ delay: 1200, origin: 'right', distance: '120px' }"
          class="col-sm-6 _pdl-64px-sm"
        >
          <h4 class="_cl-dark _mgt-24px _lh-150pct _fw-light _fs-5 _fs-4-sm">
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
              to="/services#sea-freight"
              class="service-box _bdw-1px"
            >
              <img src="../../assets/images/s-1.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct">
                Sea Freight
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
          <div class=" col-12 col-sm _pdh-0px">
            <n-link
              v-scroll-to="'#air-freight'"
              to="/services#air-freight"
              class="service-box _bdvw-1px-sm _bdlw-1px _bdlw-0px-sm _bdrw-1px"
            >
              <img src="../../assets/images/s-2.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct">
                Air Freight
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
          <div class=" col-12 col-sm _pdh-0px">
            <n-link
              v-scroll-to="'#rail-road'"
              to="/services#rail-road"
              class="service-box _bdvw-1px-sm _bdtw-1px _bdlw-1px _bdlw-0px-sm _bdrw-1px"
            >
              <img src="../../assets/images/s-3.png" class="service-icon" />
              <h5 class="_mgv-12px _fw-light _cl-primary-dark _tal-ct ">
                Rail Road Services
              </h5>
              <div class="_h-2px _w-64px _bgcl-primary-dark"></div>
            </n-link>
          </div>
          <div class="col-12 col-sm _pdh-0px">
            <n-link
              v-scroll-to="'#in-transit'"
              to="/services#in-transit"
              class="service-box  _bdvw-1px-sm _bdbtw-1px _bdlw-1px _bdlw-0px-sm _bdrw-1px"
            >
              <img src="../../assets/images/s-5.png" class="service-icon" />
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
    <Cta :hasBorder="false" />
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
</style>
