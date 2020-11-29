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
        <div class="_dp-n-sm _dp-f _pdr-16px">
          <div class="_dp-f _alit-ct  _jtfct-fe ">
            <button
              :class="{ '-open': $store.state.menu.isShowingMenu }"
              @click="
                $store.commit(
                  'menu/SET_MOBILE_MENU',
                  !$store.state.menu.isShowingMenu
                )
              "
              class="_dp-f _alit-ct _jtfct-fe _pd-0px _zid-1 _bgcl-tpr _bdcl-tpr hamburger-container _w-32px _h-32px "
            >
              <div class="hamburger-btn" />
            </button>
            <MobileMenu v-show="$store.state.menu.isShowingMenu" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenu from '~/components/MobileMenu.vue'
export default {
  components: { MobileMenu },
  data: () => ({
    isShowingMenu: false,
    menu: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'About Us',
        path: '/about'
      },
      {
        title: 'Our Services',
        path: '/services'
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

// hhhhhh

._width {
  width: 200px;
}
.menu-active {
  // border-bottom: solid 3px $primary;
  // padding-bottom: 2px;
  // pointer-events: none;
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(1) translateY(4px) !important;
    height: 2px;
    bottom: 5px;
    left: 0;
    background-color: $primary;
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
    cursor: pointer;
  }
}

.header-button {
  background-color: transparent;
  &:hover {
    background-color: $primary;
    color: white;
    transition: 0.3s;
  }
}

:any-link {
  color: rgba(0, 0, 0, 0.7);
}

.hamburger-container {
  z-index: 7 !important;
  &.-open {
    .hamburger-btn {
      background: $primary;
      background-color: $primary;
      position: fixed;
      &::before {
        width: 33px;
        top: 0px;
        transform: rotate(-45deg);
        transition: 0.2s;
        background: white;
        content: ' ';
        &:hover {
          width: 33px;
        }
      }
      &::after {
        width: 33px;
        top: 0px;
        transform: rotate(45deg);
        transition: 0.2s;
        background: white;
        content: ' ';
        &:hover {
          width: 33px;
        }
      }
    }
  }

  .hamburger-btn {
    width: 33px;
    height: 3px;
    background: $primary;
    border-radius: 8px;
    position: absolute;
    transition: 0.2s;
    :not(.-open) {
      &:hover {
        width: 28px;
        &::before {
          width: 33px;
        }
        &::after {
          width: 30px;
        }
      }
    }

    &::before {
      width: 28px;
      position: absolute;
      height: 3px;
      background: $primary;
      border-radius: 8px;
      content: ' ';
      top: -11px;
      right: 0px;
      transition: 0.2s;
    }

    &::after {
      position: absolute;
      width: 28px;
      height: 3px;
      background: $primary;
      border-radius: 8px;
      content: ' ';
      top: 11px;
      right: 0px;
      transition: 0.2s;
    }
  }
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0) translateY(4px);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $primary;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    cursor: pointer;
  }
}

.hover-underline-animation:hover::after {
  transform: scaleX(1) translateY(4px);
  transform-origin: bottom left;
  cursor: pointer;
}
</style>
