<template>
    <div id="general-settings" class="settings-inner" v-if="description || description === ''">
      <textarea name="description"
        @keyup="edit"
        placeholder="Aplication store description"
        :value="description"></textarea>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      descriptionText: '',
    };
  },
  watch: {
  },
  methods: {
    edit(e) {
      this.$emit('update:description', e.target.value.trim());
    },
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
