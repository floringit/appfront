<template>
    <div id="settings">
      <div class="title-wrapper">
        <h2>Settings</h2>
        <tabs :items="[
          'General', 'Branding', 'Design'
        ]" :selected.sync="selectedTab"></tabs>
      </div>
      <div class="settings-content">
        <form id="settings-form" submit.prevent="save" ref="settingsForm">
          <input type="text"
            name="name"
            v-model.trim="application.name"
            placeholder="Application title" />
          <branding v-if="selectedTab == 1"></branding>
          <general v-if="!selectedTab" :description.sync="application.description"></general>
          <div class="btn-ctn">
            <button name="submit" @click.prevent="save" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import Tabs from '../Tabs/';
import Branding from './Branding/';
import General from './General/';

export default {
  components: {
    Tabs,
    Branding,
    General,
  },
  data() {
    return {
      selectedTab: 0,
      application: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    save() {
      console.log(this.application);
    },
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
