<template>
    <div>
        <ul>
            <li :class="selected === 0 ? 'selected' : ''">
                <a href="#" @click.prevent="select(0)">
                    <img src="../../../../static/images/left-nav/Settingsicon.svg" />
                    <span>Settings</span>
                </a>
            </li>
            <li :class="selected === 1 ? 'selected' : ''">
                <a href="#" @click.prevent="select(1)">
                    <img src="../../../../static/images/left-nav/Componentsicon.svg" />
                    <span>Components</span>
                </a>
            </li>
            <li :class="selected === 2 ? 'selected' : ''">
                <a href="#" @click.prevent="select(2)">
                    <img src="../../../../static/images/left-nav/Screensicon.svg" />
                    <span>Screens</span>
                </a>
            </li>
            <li :class="selected === 3 ? 'selected' : ''">
                <a href="#" @click.prevent="select(3)">
                    <img src="../../../../static/images/left-nav/Mediaicon.svg" />
                    <span>Media</span>
                </a>
            </li>
            <li :class="selected === 4 ? 'selected' : ''">
                <a href="#" @click.prevent="select(4)">
                    <img src="../../../../static/images/left-nav/Membersicon.svg" />
                    <span>Members</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Number,
      required: true,
    },
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
