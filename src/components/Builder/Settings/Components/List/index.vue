<template>
    <div class="components-ctn">
      <div class="category" :key="key" v-for="(singles, key) in items">
        <div class="header" @click="toggle">
          {{ key }}
        </div>
        <div class="comps" :class="collapsed ? '' : 'comps-hidden'">
          <single :key="single.id" v-for="single in singles" :comp="single"></single>
        </div>
      </div>
      <p v-if="_.size(items) === 0">No reusable components available.</p>
    </div>
</template>

<script>
import Single from './Single/';

export default {
  components: {
    Single,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      collapsed: true,
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
