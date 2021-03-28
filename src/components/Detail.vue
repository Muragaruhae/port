<template>
  <div>
    <p>
      {{ products.id }}
      {{ products.title }}
      {{ products.value }}
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name:'Products',
  computed: mapGetters(['allProducts'])
}
</script>

<style>
</style>
