<template>
  <div class="top-nav">
      <left></left>
      <right></right>
  </div>
</template>

<script>
import Left from './Left/';
import Right from './Right/';

export default {
  components: {
    Left,
    Right,
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
