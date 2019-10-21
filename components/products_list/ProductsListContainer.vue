<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="product in products" :key="product.id">
      <VmProducts :product="product"></VmProducts>
    </div>
    <div class="section" v-if="products.length === 0">
      <p>{{ noProductLabel }}</p>
    </div>
  </div>
</template>

<script>
// filters products by titles.
import VmProducts from '../Products';
import { getByTitle } from '@/assets/filters';

export default {
  name: 'productsList',
  
  components: { VmProducts },

// only shows 6 products by page
  created() {
    this.$store.dispatch('loadProducts', {
      _page: 1,
      extraParams: {
        _limit: 6
      }
    });
  },
  
  // if non products registrade it, it's shown this message:
  data () {
    return {
      id: '',
      noProductLabel: 'Nenhum Produto Encontrado',
      productsFiltered: []
    };
  },

// shows the products on the container ordering by title when user searched for something
  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.state.products;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }

};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
