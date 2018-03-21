<template>
    <div class="component-ctn" @click.prevent="add">
      <span>{{ comp.name }}</span>
      <span>Add</span>
    </div>
</template>

<script>
import Bus from '../../../../../../config/bus';

export default {
  components: {
  },
  props: {
    comp: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    add() {
      Bus.$emit('componentModal', true);
    }
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
