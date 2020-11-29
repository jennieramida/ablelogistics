<template>
  <section>
    <div class="container _mgv-64px-sm _mgv-32px">
      <div class="row _jtfct-fst-sm _jtfct-ct">
        <div
          v-scroll-reveal="{ delay: 300, origin: 'left', distance: '120px' }"
          class="col-md-6 _dp-f _fdrt-cl _alit-fst-sm _alit-ct "
        >
          <h1 class="_cl-dark _fw-bold _ttf-cptl _ltspc-2px">Contact Us</h1>
          <div class="_bgcl-primary _w-64px _mgt-8px _h-4px"></div>
          <h4
            class="_cl-primary _lh-150pct  _fs-5-sm _fs-6 _ttf-upc _ltspc-2px _tal-ct _tal-l-sm _mgt-24px"
          >
            For further information or inquiries, <br />please feel free to
            contact us
          </h4>
          <a href="mailto:able@able-logistics.co.th"
            ><h5 class="_mgt-24px">
              <img
                src="../assets/images/envelope.jpg"
                class="_w-16px _mgbt-4px _mgr-8px"
              />
              <span class="_udl-hover-primary-dark"
                ><b>Email</b>: able@able-logistics.co.th</span
              >
            </h5></a
          >
          <a href="tel:+6626797080"
            ><h5 class="_mgt-24px">
              <img
                src="../assets/images/phone.jpg"
                class="_w-16px _mgbt-4px _mgr-8px"
              />
              <span class="_udl-hover-primary-dark"
                ><b>Tel</b>: +662-679-7080</span
              >
            </h5></a
          >
          <a href="tel:+6626797081"
            ><h5 class="_mgt-24px">
              <img
                src="../assets/images/fax.jpg"
                class="_w-16px _mgbt-4px _mgr-8px"
              />
              <span class="_udl-hover-primary-dark"
                ><b>Fax</b>: +662-679-7081</span
              >
            </h5></a
          >
          <a href="https://goo.gl/maps/ZBht87eZA2zseSAw7" target="_blank">
            <h5 class="_mgt-24px">
              <img
                src="../assets/images/map.jpg"
                class="_w-16px _mgbt-4px _mgr-8px"
              />
              <span class="_udl-hover-primary-dark">
                <b>Get Direction</b>
              </span>
            </h5>
          </a>
        </div>
        <div class="col-sm-6 col-10 _mgt-32px _mgt-0px-sm">
          <div
            v-scroll-reveal="{ delay: 300 }"
            class="_bgcl-white _bsd-default _pd-24px _bdrd-12px _dp-f _fdrt-cl _fdrt-r  _alit-ct _alit-fst-sm _tal-ct _tal-l-sm _jtfct-spbtw _mgbt-32px-sm _mgbt-24px"
          >
            <h4
              id="head-office"
              class="_cl-primary-dark _ltspc-1px _ttf-upc _fw-bold _fs-4-sm _fs-5"
            >
              Head office (Bangkok)
            </h4>
            <div class="_dp-f-sm _alit-fe">
              <h5
                class="_fs-5-sm _fs-6 _cl-dark _lh-150pct _mgt-16px _mgr-16px _fw-light"
              >
                1168/15 Zone B, Lumphini Tower, 12A Fl., Rama 4 Rd,
                Thungmahamek, Sathorn, Bangkok 10120
              </h5>
              <a href="https://goo.gl/maps/Jzn9K4JBJvVVK9wG7" target="_blank">
                <button
                  class="_bgcl-primary-dark _fw-bold _cl-white _mgt-24px _mgt-0px-sm"
                >
                  <h6 class="_fs-6-sm _fs-5">
                    Get Direction
                  </h6>
                </button>
              </a>
            </div>
          </div>
          <div
            v-scroll-reveal="{ delay: 500 }"
            class="_bgcl-white _bsd-default _pd-24px _bdrd-12px _dp-f _fdrt-cl  _alit-ct _alit-fst-sm _tal-ct _tal-l-sm _jtfct-spbtw"
          >
            <h4
              id="laem-chabang"
              class="_cl-primary-dark _ltspc-1px _ttf-upc _fw-bold _fs-4-sm _fs-5"
            >
              Palm Garden Villa (Laem Chabang)
            </h4>
            <div class="_dp-f-sm _alit-fe">
              <h5
                class="_fs-5-sm _fs-6 _cl-dark _lh-150pct _mgt-16px _mgr-16px _fw-light"
              >
                189/38 Moo. 9 T. Thungsukla Amphoe Sriracha 20230
              </h5>
              <a href="https://goo.gl/maps/2moA8zo58iR8SvLU6" target="_blank">
                <button
                  class="_bgcl-primary-dark _fw-bold _cl-white _mgt-24px _mgt-0px-sm"
                >
                  <h6 class="_fs-6-sm _fs-5">
                    Get Direction
                  </h6>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MAP -->
    <div v-scroll-reveal class=" force-full-width _dp-f _jtfct-ct _alit-ct">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7751.821758752916!2d100.54502353488772!3d13.723845199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994e7263debf%3A0xfec5a61a0865ac05!2z4Lil4Li44Lih4Lie4Li04LiZ4Li14LiX4Liy4Lin4LmA4Lin4Lit4Lij4LmMIChMdW1waW5pIFRvd2VyKQ!5e0!3m2!1sen!2sth!4v1600453133039!5m2!1sen!2sth"
        class="_w-100vw"
        height="500"
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
export default {}
</script>

<style></style>
