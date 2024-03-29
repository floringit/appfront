// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import lodash from 'lodash';
import VueLodash from 'vue-lodash';
import BootstrapVue from 'bootstrap-vue';
import Vuebar from 'vuebar';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueLodash, lodash);
Vue.use(BootstrapVue);
Vue.use(Vuebar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
