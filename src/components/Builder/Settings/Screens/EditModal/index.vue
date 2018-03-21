<template>
  <div class="modal-cnt">
    <div class="form-row">
      <input type="text"
        name="name"
        v-model.trim="name"
        placeholder="Name"
        class="big" />
    </div>
    <a href="#" class="btn btn-primary">Save</a>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    screen: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      nameVal: '',
    };
  },
  computed: {
    name: {
      get: function() {
        return this.screen[0];
      },
      set: function(newValue) {
        this.nameVal = newValue;
      },
    },
  },
  created() {
  },
  methods: {
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
