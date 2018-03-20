<template>
    <div class="component-ctn" @click.prevent="add">
      <span>{{ comp.name }}</span>
      <span>Add</span>
    </div>
</template>

<script>
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
      this.$emit('update:showModal', true);
    }
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
