<template>
  <div id="wrapper">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/Layout/Header/';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
  @import '../static/css/reset.css';
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
  @import '../static/css/main.css';
  @import '../static/css/form.css';
</style>
