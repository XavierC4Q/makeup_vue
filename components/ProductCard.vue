<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="product.api_featured_image"
      :img-alt="product.name"
      img-top
      img-height="300px"
      tag="article"
      style="max-width: 20rem; min-height: 500px; min-width: 20rem; max-height: 700px"
      class="mb-4"
    >
      <b-card-text>${{ product.price | formatPrice }}</b-card-text>
      <b-card-text>By {{ product.brand | capitalize }}</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from '../types/index'

export default Vue.extend({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as () => IProduct,
      required: true,
    },
  },
})
</script>