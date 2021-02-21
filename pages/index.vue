<template>
  <div class="page">
    <filters />
    <div class="d-flex flex-wrap justify-content-between mt-4 mx-2">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FiltersVue from '~/components/Filters.vue'
import ProductCardVue from '~/components/ProductCard.vue'
import { IProduct } from '~/types'

interface IProductInput {
  brand?: string
  productType?: string
}

export default Vue.extend({
  data: (): {
    products: IProduct[]
  } => ({
    products: [],
  }),
  components: {
    Filters: FiltersVue,
    ProductCard: ProductCardVue,
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts({ brand = '', productType = '' }: IProductInput = {}) {
      try {
        let qs = 'http://makeup-api.herokuapp.com/api/v1/products.json'
        if (brand && productType) {
          qs += `?brand=${brand}&product_type=${productType}`
        } else if (!brand && productType) {
          qs += `?product_type=${productType}`
        } else if (brand) {
          qs += `?brand=${brand}`
        }

        const data = await this.$axios.$get(qs)
        this.products = data
      } catch {}
    },
  },
})
</script>

<style lang="scss" scoped>
.page {
  margin-top: 1.6rem;
}
</style>
