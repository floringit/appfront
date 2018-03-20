<template>
    <div id="components">
      <div class="title-wrapper">
        <h2>Components</h2>
        <tabs :items="[
          'Default', 'Reusable'
        ]" :selected.sync="selectedTab"></tabs>
      </div>
      <div class="components-settings">
        <list :items="defaultComponents" v-if="!selectedTab"></list>
        <list :items="{}" v-if="selectedTab"></list>
      </div>
      <set-modal></set-modal>
    </div>
</template>

<script>
import Tabs from '../Tabs/';
import List from './List/';
import SetModal from '../Modal/';

export default {
  components: {
    Tabs,
    List,
    SetModal,
  },
  data() {
    return {
      selectedTab: 0,
      defaultComponents: {
        layout: [
          {
            id: 1,
            name: 'Header',
          },
          {
            id: 2,
            name: 'Footer',
          },
        ],
        content: [
          {
            id: 3,
            name: 'Paragraph',
          },
          {
            id: 4,
            name: 'Heading',
          },
          {
            id: 5,
            name: 'Image',
          },
          {
            id: 6,
            name: 'Card',
          },
          {
            id: 7,
            name: 'Slider',
          },
        ],
      },
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
