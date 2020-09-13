<template>
  <section>
    <!-- Hero -->
    <div class="container  _mgv-64px-sm _mgv-32px">
      <div class="row _mgbt-48px _dp-b-sm _dp-f _fdrt-cl _alit-ct">
        <div class="col-12">
          <h1 class="_cl-dark _fw-bold">Customs Broker Service</h1>
          <div class="_bgcl-primary _w-64px _mgt-8px _h-4px"></div>
          <h5
            class="_cl-dark _mgt-24px _lh-150pct _tal-ct _tal-l-sm _fs-5 _fs-4-sm"
          >
            Semper orci, urna eget dictum mauris. Arcu, lectus est nunc
            lobortis<br class="_dp-b-sm _dp-n" />
            vitae sem nunc aliquet. Placerat ipsum faucibus.
          </h5>
        </div>
      </div>
      <div class="row _alit-ct">
        <div class="col-sm-6">
          <img
            src="../../assets/images/services/customs-broker.jpg"
            class="_w-100pct sv-img"
            alt=""
          />
        </div>
        <div class="col-sm-6 _pdl-64px-sm">
          <h4 class="_cl-dark _mgt-24px _lh-150pct _fw-bold _fs-5 _fs-4-sm">
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
    <div class="_bgcl-primary-very-light">
      <div class="container _pdv-64px-sm _pdv-32px">
        <div class="row _jtfct-ct">
          <div
            class="col-sm-9 _mgt-24px _mgt-0px-sm _dp-f _jtfct-spbtw-sm _jtfct-ct _alit-fe"
          >
            <h1 class="_fw-bold _fs-2-sm _fs-3 ">
              Our Services
            </h1>
            <n-link
              to="/services"
              class="_udl-hover-primary-dark _dp-f-sm _dp-n"
            >
              <h6>Learn More ➞</h6>
            </n-link>
          </div>
        </div>
        <div class="row _jtfct-ct">
          <div class="col-sm-3">
            <n-link to="/services/sea-freight">
              <img
                src="../../assets/images/services/sea-freight.jpg"
                class="_w-100pct _mgt-32px"
                alt=""
              />
              <div class="_dp-f _jtfct-spbtw _alit-ct _cl-dark _mgt-12px">
                <h4 class="_fw-bold">Sea freight</h4>
                <div class="_mgt-4px">➞</div>
              </div>
            </n-link>
          </div>
          <div class="col-sm-3">
            <n-link to="/services/air-freight">
              <img
                src="../../assets/images/services/air-freight.jpg"
                class="_w-100pct _mgt-32px"
                alt=""
              />
              <div class="_dp-f _jtfct-spbtw _alit-ct _cl-dark _mgt-12px">
                <h4 class="_fw-bold">Air Freight</h4>
                <div class="_mgt-4px">➞</div>
              </div>
            </n-link>
          </div>
          <div class="col-sm-3">
            <n-link to="/services/rail-road">
              <img
                src="../../assets/images/services/rail-road.jpg"
                class="_w-100pct _mgt-32px"
                alt=""
              />
              <div class="_dp-f _jtfct-spbtw _alit-ct _cl-dark _mgt-12px">
                <h4 class="_fw-bold">Rail Road Services</h4>
                <div class="_mgt-4px">➞</div>
              </div>
            </n-link>
          </div>
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
  .sv-img {
    max-height: 180px;
  }
}
</style>
