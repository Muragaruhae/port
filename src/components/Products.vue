<template>
<div>
  <h3>ando</h3>
  <div class="products">
        <div v-for="product in allProducts" :key="product.id" class="product">
          {{ product.title }}
          {{ product.value }}
        </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name:'Products',
  computed: mapGetters(['allProducts'])
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
.product {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 4rem;
  border-radius: 15px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

</style>
