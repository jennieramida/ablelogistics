<template>
  <!-- Hamburger Menu -->
  <div class="wrapper">
    <div class="hamburger-menu">
      <div class="container kanit">
        <div class="row _mgt-64px">
          <div class="col _cl-white _fs-4 _lh-200pct _tal-l">
            <ul>
              <li
                v-for="(item, i) in $store.state.menu.items"
                :key="i"
                class="_mgv-32px"
              >
                <nuxt-link :to="item.path" class="_cl-white">
                  <h2
                    @click="$store.state.menu.isShowingMenu = false"
                    class="_cl-white _fw-bold"
                  >
                    {{ item.title }}
                  </h2>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="row _mgt-128px _bdtw-1px _bdcl-white" />

        <div class="row _pdt-12px _jtfct-ct _cl-white _fs-7 _pdbt-32px">
          © {{ new Date().getFullYear() }} Able logistics Co., Ltd. All right
          reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 100vh;
  z-index: 5;
}
.hamburger-menu {
  position: absolute;
  top: 0px;

  left: 0px;
  right: 0px;
  min-height: 100vh;
  width: 100vw;
  background-color: $primary;
  z-index: 6;
}

ul li::before {
  content: '\2022';
  color: $primary;
  font-weight: bold;
  display: none !important;
  width: 1em;
  margin-left: -1em;
}
</style>
