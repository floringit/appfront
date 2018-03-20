<template>
  <header>
      <logo></logo>
      <header-nav></header-nav>
  </header>
</template>

<script>
import Logo from './Logo/';
import HeaderNav from './Nav/';

export default {
  components: {
    Logo,
    HeaderNav,
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
