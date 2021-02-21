<template>
  <div>
    <b-row class="pl-2 pr-2">
      <b-col sm="12" md="6">
        <b-dropdown id="brands" text="Select Brand" size="sm" menu-class="menu">
          <b-dropdown-item @click="selectedBrand = ''">{{ '---' }}</b-dropdown-item>
          <b-dropdown-item
            :key="i"
            v-for="(brand, i) in brands"
            @click="selectedBrand = brand"
            >{{ brand | capitalize }}</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
      <b-col sm="12" md="6"></b-col>
    </b-row>
    <p>{{ selectedBrand }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import brands from '~/constants/brands.json'

export default Vue.extend({
  name: 'Filters',
  data: () => ({
    selectedBrand: '',
  }),
  computed: {
    brands: () => brands,
  }
})
</script>

<style lang="scss">
@import '~/assets/main.scss';

.menu {
  top: 100% !important;
  transform: none !important;
  max-height: 20rem;
  overflow-y: scroll;

  .dropdown-item {
    min-height: 1.6rem;
  }
}
</style>