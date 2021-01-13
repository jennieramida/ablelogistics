<template>
  <div class="_bgcl-black _pdv-32px-sm _pdv-24px _pst-rlt _zid-1">
    <div class="container">
      <div class="row _dp-f _jtfct-spbtw">
        <div class="col-md-4 col-sm-3 col-12 _dp-f _dp-b-sm ">
          <n-link to="/">
            <img
              src="../assets/images/ablelogistic-invert.jpg"
              class="branding "
              alt=""
            />
          </n-link>
          <p class="_cl-white _fs-8 _mgt-12px _dp-b-sm _dp-n">
            <n-link to="/privacy" class="_fw-bold footer-link"
              >Privacy Policy</n-link
            >
            |
            <n-link to="/terms" class="_fw-bold footer-link"
              >Terms & Conditions</n-link
            >
            <br />
            © {{ new Date().getFullYear() }} Able logistics Co., Ltd. All right
            reserved.
          </p>
        </div>
        <div class="col-md-8 col-sm-9 col-12 _dp-f-sm _dp-b _jtfct-spbtw">
          <n-link v-scroll-reveal to="/">
            <h5
              v-html="'Home'"
              class="_cl-primary _fw-bold _bdbtw-1px _bdbtw-0px-sm _pdbt-4px _dp-b-sm _dp-n"
              style="border-color:#aecbcf;"
            />
          </n-link>
          <div
            v-for="(menu, i) in menu"
            :key="`ft-${i}`"
            v-scroll-reveal="{ delay: 300 * i }"
            class="_mgv-16px _mgv-0px-sm"
          >
            <n-link :to="menu.path">
              <h5
                v-html="menu.title"
                class="_cl-primary _fw-bold _bdbtw-1px _bdbtw-0px-sm _pdbt-4px"
                style="border-color:#aecbcf;"
              />
            </n-link>
            <div v-if="menu.subMenu">
              <div
                v-for="(item, j) in menu.subMenu"
                :key="`sub-${j}`"
                class="_mgt-8px"
              >
                <n-link :to="item.path">
                  <h6 v-html="item.title" class="_cl-white _fs-7"
                /></n-link>
              </div>
            </div>
            <div v-if="menu.title === 'Contact Us'">
              <nuxt-link v-scroll-to="'#head-office'" to="/contact#head-office">
                <h6 class="_cl-white _mgt-8px  _fs-7">
                  Head Office (Bangkok)
                </h6>
              </nuxt-link>
              <nuxt-link
                v-scroll-to="'#laem-chabang'"
                to="/contact#laem-chabang"
              >
                <h6 class="_cl-white _mgt-8px  _fs-7">
                  Laem Chabang Office
                </h6>
              </nuxt-link>
              <a class="_cl-white" href="mailto:able@able-logistics.co.th">
                <h6 class="_cl-primary _mgt-8px  _fs-7">
                  ✉️ able@able-logistics.co.th
                </h6>
              </a>
              <a class="_cl-white" href="tel:+6626797080">
                <h6 class="_cl-primary _mgt-8px  _fs-7">
                  📞 +66 (0)2 679-7080
                </h6>
              </a>
            </div>
          </div>
          <p class="_cl-white _fs-8 _mgt-12px _dp-n-sm _dp-b">
            <n-link to="/privacy" class="_fw-bold footer-link"
              >Privacy Policy</n-link
            >
            |
            <n-link to="/terms" class="_fw-bold footer-link"
              >Terms & Conditions</n-link
            >
            <br />
            © {{ new Date().getFullYear() }} Able logistics Co., Ltd. All right
            reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        title: 'About Us',
        path: '/about',
        subMenu: [
          { title: 'Our Company', path: '/about#company' },
          { title: 'Able Stories', path: '/about#story' },
          { title: 'Our Aim', path: '/about#aim' }
        ]
      },
      {
        title: 'Our Services',
        path: '/services',
        subMenu: [
          { title: 'Sea freight', path: '/services/sea-freight' },
          { title: 'Air freight', path: '/services/air-freight' },
          { title: 'Rail Road Service', path: '/services/rail-road' },
          { title: 'Customs Broker', path: '/services/customs-broker' },
          { title: 'In-Transit Cargo', path: '/services/in-transit' }
        ]
      },
      {
        title: 'Contact Us',
        path: '/contact'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.branding {
  object-fit: contain;
  height: 80px;
}
.footer-link {
  color: white !important;
  transition: 0.2s $bezier;
  &:hover {
    color: $primary !important;
  }
}
</style>
