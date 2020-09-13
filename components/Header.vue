<template>
  <div class="_bgcl-white _bsd-default ">
    <div class="container _pdv-12px">
      <div class="row _dp-f _alit-ct _jtfct-spbtw">
        <div class="col-sm-1">
          <n-link to="/">
            <img
              src="../assets/images/ablelogistic.jpg"
              class="branding _h-64px "
              alt=""
            />
          </n-link>
        </div>
        <div class="col-sm-10 _dp-f-sm _dp-n _alit-ct _jtfct-fe _mgl-24px">
          <n-link :to="menu.path" v-for="(menu, i) in menu" :key="`menu-${i}`">
            <h5 class="header-menu _mgl-48px _fw-bold _udl-hover-primary-dark">
              {{ menu.title }}
            </h5>
          </n-link>
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
        title: 'Home',
        path: '/'
      },
      {
        title: 'Our Services',
        path: '/services'
      },
      {
        title: 'About Us',
        path: '/about'
      },
      {
        title: 'Contact',
        path: '/contact'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.branding {
  object-fit: contain;
}

.header-menu {
  color: $dark;
  transition: 0.2s $bezier;

  &:hover {
    color: $primary-dark !important;
  }
}
</style>
