<template>
  <div>
    <main-nav-vue />
    <Nuxt />
  </div>
</template>

<script>
import MainNavVue from '~/components/MainNav.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    MainNavVue,
  },
})
</script>

<style>
</style>
