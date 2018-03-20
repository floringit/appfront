<template>
    <div id="components">
      <div class="title-wrapper">
        <h2>Screens</h2>
        <tabs :items="[
          'All', 'Trash'
        ]" :selected.sync="selectedTab"></tabs>
      </div>
      <div class="screens-settings">
        <div class="table-ctn" v-if="!selectedTab">
          <div class="table-inner-ctn">
            <tbl :columns="[
              {
                name: 'Name',
                small: false,
              },
              {
                name: 'Added by',
                small: true,
                link: true,
              },
              {
                name: 'Created',
                small: true,
              },
            ]" :rows="[
              [
                'Home',
                {
                  value: 'John Doe',
                  link: '#',
                },
                '08/03/2018',
              ],
              [
                'Contact',
                {
                  value: 'Emily Foe',
                  link: '#',
                },
                '06/03/2018',
              ],
              [
                'News fasdf asdf asdf asdfa sdfasdf asdf',
                {
                  value: 'John Doe',
                  link: '#',
                },
                '03/03/2018',
              ],
            ]" :actions="[
              {
                name: 'Edit',
                callback: null,
              },
              {
                name: 'Duplicate',
                callback: null,
              },
              {
                name: 'Remove',
                callback: null,
              },
            ]"></tbl>
          </div>
        </div>
        <p v-if="selectedTab">No screens in trash.</p>
      </div>
    </div>
</template>

<script>
import Tabs from '../Tabs/';
import Tbl from '../Table/';

export default {
  components: {
    Tabs,
    Tbl,
  },
  data() {
    return {
      selectedTab: 0,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
