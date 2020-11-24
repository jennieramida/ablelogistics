<template>
  <div
    :class="{ '_bdtw-1px': hasBorder }"
    class="container _bdcl-primary _pdv-48px-sm _pdv-32px"
  >
    <div class="row _pdh-16px _alit-fe _jtfct-spbtw-sm _jtfct-ct">
      <h3
        v-scroll-reveal="{ delay: 300 }"
        class="_cl-grey-dark _lh-125pct _tal-l-sm _tal-ct"
      >
        Need more information? <br />We are ready to serve you with speed.
      </h3>
      <n-link
        v-scroll-reveal="{ delay: 300 }"
        to="/contact"
        class="_udl-hover-primary-dark _mgt-0px-sm _mgt-32px "
      >
        <h3>Contact Us ➞</h3>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasBorder: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style></style>
