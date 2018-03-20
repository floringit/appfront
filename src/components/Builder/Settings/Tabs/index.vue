<template>
  <ul class="tabs">
    <li :key="key" v-for="(item, key) in items">
      <a href="#" :class="selected === key ? 'selected' : ''" @click.prevent="select(key)">
        {{ item }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  components: {
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    selected: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    select(selected) {
      this.$emit('update:selected', selected);
    },
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
