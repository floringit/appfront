<template>
    <div id="settings-modal" :class="{
      'hide': !show,
      'full': full
    }">
      <a href="#" class="close" @click.prevent="close">
        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Utils" transform="translate(-380.000000, -100.000000)">
                    <g id="icons" transform="translate(20.000000, 20.000000)">
                        <polygon id="close-[#1511]" points="371.4489 89.9997 380.0029 98.5537 378.5559 99.9997 370.0029 91.4457 361.4489 99.9997 360.0029 98.5537 368.5559 89.9997 360.0029 81.4457 361.4489 79.9997 370.0029 88.5537 378.5559 79.9997 380.0029 81.4457"></polygon>
                    </g>
                </g>
            </g>
        </svg>
      </a>
      <div class="title-wrapper" v-if="title">
        <h2>{{ title }}</h2>
      </div>
      <slot></slot>
    </div>
</template>

<script>
import Bus from '../../../../config/bus';

export default {
  components: {
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    full: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    close() {
      Bus.$emit('componentModal', false);
      Bus.$emit('screenModal', false);
    }
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
