<template>
  <div class="_bgcl-white _bsd-default ">
    <div class="container _pdv-12px">
      <div class="row _dp-f _alit-ct _jtfct-spbtw">
        <div class="_dp-f _pdl-16px">
          <n-link to="/">
            <img
              src="../assets/images/ablelogistic.jpg"
              class="branding "
              alt=""
            />
          </n-link>
        </div>
        <div class="_pdr-16px-sm _dp-f-sm _dp-n _alit-ct _jtfct-fe _mgl-24px">
          <n-link
            v-scroll-reveal="{ delay: 300 * i }"
            :to="menu.path"
            v-for="(menu, i) in menu"
            :key="`menu-${i}`"
          >
            <h5 class="header-menu _mgl-48px _fw-bold _udl-hover-primary-dark">
              {{ menu.title }}
            </h5>
          </n-link>
        </div>
        <div class=" _dp-n-sm _dp-f _pdr-16px">
          <div class="hamburger-menu _dp-n-sm">
            <div class="bar top"></div>
            <div class="bar middle"></div>
            <div class="bar bottom"></div>
          </div>
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
  height: 80px;
  object-fit: contain;
  @media (max-width: $sm) {
    height: 55px;
  }
}

.header-menu {
  color: $dark;
  transition: 0.2s $bezier;

  &:hover {
    color: $primary-dark !important;
  }
}

.hamburger-menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
}

.hamburger-menu .bar {
  height: 5px;
  background: $primary-dark;
  border-radius: 5px;
  margin: 3px 0px;
  transform-origin: left;
  transition: all 0.5s;
}

.hamburger-menu:hover .top {
  transform: rotate(45deg);
}

.hamburger-menu:hover .middle {
  opacity: 0;
}

.hamburger-menu:hover .bottom {
  transform: rotate(-45deg);
}
</style>
