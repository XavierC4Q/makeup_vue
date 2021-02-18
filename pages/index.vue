<template>
  <div class="page">
    <filters />
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FiltersVue from '~/components/Filters.vue'

export default Vue.extend({
  components: {
    Filters: FiltersVue,
  },
})
</script>

<style lang="scss" scoped>
.page {
  margin-top: 1.6rem;
}
</style>
