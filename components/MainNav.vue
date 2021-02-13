<template>
  <div>
    <!-- DESKTOP NAVBAR -->
    <b-navbar fixed="top" sticky class="desktop-nav justify-content-between">
      <b-navbar-brand href="/">Makeup Vue</b-navbar-brand>
      <b-navbar-nav fill>
        <b-nav-item :key="i" v-for="(link, i) in links" :href="'/ + link'">{{
          link | capitalize
        }}</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- MOBILE NAVBAR-->
    <b-navbar
      fixed="top"
      sticky
      class="mobile-nav"
      toggleable
    >
      <b-navbar-brand href="/">Makeup Vue</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :key="i" v-for="(link, i) in links" :href="'/ + link'">{{
            link | capitalize
          }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MainNav',
  data: () => ({
    links: ['brands', 'products', 'contact'],
  }),
})
</script>

<style lang="scss">
@import '~assets/main.scss';

.desktop-nav, .mobile-nav {
    background-color: #fec89a;

    a.navbar-brand {
        font-size: 1.6rem;
    }
}

.desktop-nav {
  display: none;

  @include breakpoint(md) {
    display: flex;
  }
}

.mobile-nav {
  display: flex;

  @include breakpoint(md) {
    display: none;
  }
}
</style>