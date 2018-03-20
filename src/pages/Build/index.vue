<template>
  <div id="builder">
      <left :selected.sync="selectedLeft"></left>
      <settings :display="selectedLeft"></settings>
      <preview></preview>
      <activity></activity>
  </div>
</template>

<script>
import Left from '../../components/Builder/Left/';
import Activity from '../../components/Builder/Activity/';
import Settings from '../../components/Builder/Settings/';
import Preview from '../../components/Builder/Preview/';

export default {
  components: {
    Left,
    Activity,
    Settings,
    Preview,
  },
  data() {
    return {
      selectedLeft: 0,
    };
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
