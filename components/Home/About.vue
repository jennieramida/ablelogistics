<template>
  <div>
    <div class="row ">
      <div class="col-sm-12 _tal-ct _mgbt-48px _dp-f _fdrt-cl _alit-ct">
        <h1 class="_cl-primary-dark _fw-bold _fs-2-sm _fs-3   _pdbt-12px">
          Able Logistics
        </h1>
        <div
          class="_bdtw-2px _bdcl-primary-very-light _pst-rlt line _mgbt-24px"
        >
          <!-- Star -->
          <div class="star">
            <svg
              class=""
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="23.172px"
              height="23.346px"
              viewBox="0 0 23.172 23.346"
              xml:space="preserve"
            >
              <polygon
                fill="#aecbcf"
                points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
              />
            </svg>
          </div>
        </div>
        <!-- Star -->
        <h5 class="_lh-150pct _mgv-8px _fs-4-sm _fs-5">
          All of your needs is our concerns <br class="_dp-n-sm _dp-b" />
          & missions to meet with.
        </h5>
      </div>
      <!-- Loop -->
      <div
        class="col-sm-4 col-12 _dp-f _fdrt-cl-sm _fdrt-r _alit-ct _mgbt-0px-sm _mgbt-24px"
      >
        <img
          src="../../assets/images/abt-1.png"
          class="about-icon _f-1"
          alt=""
        />
        <h6
          class="_cl-dark _mgt-32px-sm _lh-150pct _fs-5-sm _fs-6 _pdh-16px-sm _pdl-16px _tal-ct-sm _tal-l _mgl-12px _mgl-0px-sm _f-2"
        >
          Able logistics is an international freight forwarding company
          established on 2005 in Bangkok, Thailand.
        </h6>
      </div>
      <div
        class="col-sm-4 col-12 _dp-f _fdrt-cl-sm _fdrt-r _alit-ct _mgbt-0px-sm _mgbt-24px"
      >
        <img
          src="../../assets/images/abt-2.png"
          class="about-icon _f-1"
          alt=""
        />
        <h6
          class="_cl-dark _mgt-32px-sm _lh-150pct _fs-5-sm _fs-6 _pdh-16px-sm _pdl-16px _tal-ct-sm _tal-l _mgl-12px _mgl-0px-sm _f-2"
        >
          Strategically located near both the Customs house and the Port of
          Authority of Thailand for an easy access to operate and provide the
          fastest services to all customers.
        </h6>
      </div>
      <div class="col-sm-4 col-12 _dp-f _fdrt-cl-sm _fdrt-r _alit-ct ">
        <img
          src="../../assets/images/abt-3.png"
          class="about-icon _f-1"
          alt=""
        />
        <h6
          class="_cl-dark _mgt-32px-sm _lh-150pct _fs-5-sm _fs-6 _pdh-16px-sm _pdl-16px _tal-ct-sm _tal-l _mgl-12px _mgl-0px-sm _f-2"
        >
          And with over 20 years of long experience, we guarantee that our
          customers will meet their satisfaction and service level.
        </h6>
      </div>
    </div>
    <div
      class="row _jtfct-ct _bdtw-1px _bdcl-primary _mgt-64px-sm _mgt-32px _pdt-64px-sm _pdt-32px"
    >
      <div class="col-sm-10 col-12">
        <h2 class="_cl-primary-dark _fw-bold _fs-4-sm _fs-5 _tal-ct _mgbt-48px">
          We are a member of the world’s largest and most powerful network of
          independent freight forwarders, WCA – Leading the World in Logistics
          Partnering
        </h2>
      </div>
      <div class="col-sm-3 col-6 _dp-f _fdrt-cl _alit-ct">
        <a href="http://www.wcafirst.com/" target="_blank">
          <img
            src="../../assets/images/green.png"
            class="wca-icon _f-1"
            alt=""
          />
        </a>
      </div>
      <div class="col-sm-3 col-6 _dp-f _fdrt-cl _alit-ct">
        <a href="https://www.wcaadvancedprofessionals.com/" target="_blank">
          <img
            src="../../assets/images/orange.png"
            class="wca-icon _f-1"
            alt=""
          />
        </a>
      </div>
      <div class="col-sm-3 col-6 _dp-f _fdrt-cl _alit-ct _mgt-0px-sm _mgt-24px">
        <a href="https://www.wcachinaglobal.com/" target="_blank">
          <img src="../../assets/images/red.png" class="wca-icon _f-1" alt="" />
        </a>
      </div>
      <div class="col-sm-3 col-6 _dp-f _fdrt-cl _alit-ct _mgt-0px-sm _mgt-24px">
        <a href="https://www.wcainterglobal.com/" target="_blank">
          <img
            src="../../assets/images/purple.png"
            class="wca-icon _f-1"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-icon {
  height: 80px;
  object-fit: contain;
  @media (max-width: $sm) {
    height: 64px;
  }
}
.wca-icon {
  height: 80px;
  object-fit: contain;
  @media (max-width: $sm) {
    height: 64px;
  }
  transition: 0.2s $bezier;
  &:hover {
    transform: scale(1.1);
  }
}

.line {
  width: 300px;
}
.star {
  position: absolute;
  top: -16px;
  left: -10px;
  // transform: translateX();
  animation: mymove 5s infinite;
}
@keyframes mymove {
  from {
    left: 0px;
  }
  to {
    left: 300px;
  }
  // to {
  //   left: 0px;
  // }
}
</style>
