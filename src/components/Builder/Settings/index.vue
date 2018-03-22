<template>
    <div id="settings-wrapper" v-bar>
      <settings v-if="display === 0"></settings>
      <components v-if="display === 1"></components>
      <screens v-if="display === 2"></screens>
      <media v-if="display === 3"></media>
      <members v-if="display === 4"></members>
    </div>
</template>

<script>
import Settings from './Settings/';
import Components from './Components/';
import Screens from './Screens/';
import Media from './Media/';
import Members from './Members/';

export default {
  components: {
    Settings,
    Components,
    Screens,
    Media,
    Members,
  },
  props: {
    display: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
