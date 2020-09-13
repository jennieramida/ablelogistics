<template>
  <div class="_bgcl-primary">
    <div class="container">
      <div class="row">
        <div v-for="(item, i) in data" :key="`os-${i}`" class="col-sm-4">
          <img :src="item.image" class="_w-100pct _mgt-32px" alt="" />
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  }
}
</script>

<style></style>
