<template>
    <div class="single">
      <div>
        <img :src="log.user.avatar" />
        <span class="name">{{ log.user.name }}</span>
        <span class="time">{{ log.time }}</span>
      </div>
      <p>{{ log.text }}</p>
    </div>
</template>

<script>
export default {
  props: {
    log: {
      type: Object,
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
