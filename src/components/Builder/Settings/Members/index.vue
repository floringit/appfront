<template>
    <div id="components">
      <div class="title-wrapper">
        <h2>Members</h2>
        <tabs :items="[
          'Active', 'Cancelled'
        ]" :selected.sync="selectedTab"></tabs>
      </div>
      <div class="screens-settings">
        <div class="table-ctn">
          <div class="table-inner-ctn">
            <tbl v-if="!selectedTab" :sortable="false" :id="'members-table'"
              :columns="[
              {
                name: 'Email',
                small: false,
              },
              {
                name: 'Status',
                small: true,
              },
              {
                name: 'Invited',
                small: true,
              },
            ]" :rows="[
              [
                'florintesting@gmail.com',
                'Active',
                '-',
                [
                  {
                    name: 'Cancel',
                    callback: null,
                  },
                ],
              ],
              [
                'florin_floria@yahoo.com',
                'Pending',
                '18/03/2018',
                [
                  {
                    name: 'Resend invite',
                    callback: null,
                  },
                  {
                    name: 'Copy invitation link',
                    callback: null,
                  },
                  {
                    name: 'Cancel',
                    callback: null,
                  },
                ],
              ],
              [
                'john_doe@mail.com',
                'Active',
                '05/03/2018',
                [
                  {
                    name: 'Cancel',
                    callback: null,
                  },
                ],
              ],
            ]"></tbl>
            <p v-if="selectedTab">No cancelled members.</p>
          </div>
        </div>
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
