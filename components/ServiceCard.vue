<template>
  <div class="_bgcl-white _dp-f _bdrd-4px _bsd-default">
    <div class="_f-2 _pdv-24px _pdl-24px _dp-f _fdrt-cl _jtfct-ct">
      <h3 v-html="order" class="_cl-primary-dark _fw-bold" />
      <h2 v-html="title" class="_cl-primary _fw-bold _mgt-4px" />
    </div>
    <div class="_f-1">
      <img
        :src="getImage(title)"
        class="_w-100pct _bdbtrrd-4px _bdtrrd-4px _ojf-cv "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default:
        'https://image.freepik.com/free-photo/container-ship-export-import-business-logistics_40939-173.jpg'
    },
    order: {
      type: String,
      default: '01'
    },
    title: {
      type: String,
      default: 'Sea Freight'
    }
  },
  methods: {
    getImage(title) {
      if (title === 'Sea Freight')
        return './../assets/images/services/sea-freight.jpg'
      if (title === 'Air Freight')
        return './../assets/images/services/air-freight.jpg'
      if (title === 'Rail Road Services')
        return './../assets/images/services/rail-road.jpg'
      if (title === 'Customs Broker')
        return './../assets/images/services/customs-broker.jpg'
      if (title === 'In-transit Cargo')
        return './../assets/images/services/in-transit.jpg'
    }
  }
}
</script>

<style></style>
