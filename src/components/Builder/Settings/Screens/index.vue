<template>
    <div id="components">
      <div class="title-wrapper">
        <h2>Screens</h2>
        <tabs :items="[
          'All', 'Trash'
        ]" :selected.sync="selectedTab"></tabs>
      </div>
      <div class="screens-settings">
        <div class="table-ctn">
          <div class="table-inner-ctn">
            <tbl v-if="!selectedTab" :sortable="false" :columns="[
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
                [
                  {
                    name: 'Edit',
                    callback: showModalFn,
                  },
                  {
                    name: 'Duplicate',
                    callback: null,
                  },
                  {
                    name: 'Remove',
                    callback: null,
                  },
                ],
              ],
              [
                'Contact',
                {
                  value: 'Emily Foe',
                  link: '#',
                },
                '06/03/2018',
                [
                  {
                    name: 'Edit',
                    callback: showModalFn,
                  },
                  {
                    name: 'Duplicate',
                    callback: null,
                  },
                  {
                    name: 'Remove',
                    callback: null,
                  },
                ],
              ],
              [
                'News fasdf asdf asdf asdfa sdfasdf asdf',
                {
                  value: 'John Doe',
                  link: '#',
                },
                '03/03/2018',
                [
                  {
                    name: 'Edit',
                    callback: showModalFn,
                  },
                  {
                    name: 'Duplicate',
                    callback: null,
                  },
                  {
                    name: 'Remove',
                    callback: null,
                  },
                ],
              ],
            ]"></tbl>
            <p v-if="selectedTab">No screens in trash.</p>
          </div>
        </div>
      </div>
      <set-modal :show="showModal"></set-modal>
    </div>
</template>

<script>
import Tabs from '../Tabs/';
import Tbl from '../Table/';
import SetModal from '../Modal/';
import Bus from '../../../../config/bus';

export default {
  components: {
    Tabs,
    Tbl,
    SetModal,
  },
  data() {
    return {
      showModal: false,
      selectedTab: 0,
    };
  },
  created() {
    Bus.$on('screenModal', this.toggleModal);
  },
  methods: {
    toggleModal(show) {
      this.showModal = show;
    },
    showModalFn() {
      Bus.$emit('screenModal', true);
    },
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
