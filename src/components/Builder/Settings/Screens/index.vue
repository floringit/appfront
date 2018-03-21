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
            ]" :rows="this.screens" />
            <p v-if="selectedTab">No screens in trash.</p>
            <a v-if="!selectedTab" id="add-screen" href="#" class="btn btn-primary" @click.prevent="showAdd">Add screen</a>
          </div>
        </div>
      </div>
      <set-modal :show="showModal" :full="showModalAdd ? true : false" :title="showModalEdit ? 'Edit screen' : 'Add screen'">
        <edit-modal v-if="showModalEdit && edited" :screen="edited" />
        <add-modal v-if="showModalAdd" />
      </set-modal>
    </div>
</template>

<script>
import Tabs from '../Tabs/';
import Tbl from '../Table/';
import SetModal from '../Modal/';
import EditModal from './EditModal/';
import AddModal from './AddModal/';
import Bus from '../../../../config/bus';

export default {
  components: {
    Tabs,
    Tbl,
    SetModal,
    EditModal,
    AddModal,
  },
  data() {
    return {
      showModal: false,
      showModalEdit: false,
      showModalAdd: false,
      edited: null,
      selectedTab: 0,
      screens: null,
    };
  },
  created() {
    Bus.$on('screenModal', this.toggleModal);

    this.getScreens();
  },
  methods: {
    toggleModal(show) {
      this.showModal = show;
    },
    showEdit(id) {
      this.edited = null;
      this.showModalAdd = false;
      this.showModalEdit = true;

      Bus.$emit('screenModal', true);

      this.edited = this.screens[id];
    },
    showAdd() {
      this.edited = null;
      this.showModalEdit = false;
      this.showModalAdd = true;

      Bus.$emit('screenModal', true);
    },
    getScreens() {
      this.screens = [
        [
          'Home',
          {
            value: 'John Doe',
            link: '#',
          },
          '08/03/2018',
          [
            {
              name: 'Rename',
              callback: this.showEdit,
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
              name: 'Rename',
              callback: this.showEdit,
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
          'News',
          {
            value: 'John Doe',
            link: '#',
          },
          '03/03/2018',
          [
            {
              name: 'Rename',
              callback: this.showEdit,
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
      ];
    },
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
