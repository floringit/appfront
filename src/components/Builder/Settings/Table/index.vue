<template>
  <div class="table" :id="id ? id : ''">
    <div class="table-header">
      <div class="column">
        <span class="column-ctn">No</span>
      </div>
      <div class="column" :key="key" v-for="(col, key) in columns">
        <span class="column-ctn">{{ col.name }}</span>
      </div>
      <div class="column">
        <span class="column-ctn">Actions</span>
      </div>
    </div>
    <div class="row" :key="index" v-for="(row, index) in rows">
      <div class="column">
        {{ index + 1 }}.
      </div>
      <div class="column" :class="col.small ? 'small' : ''" :key="i" v-for="(col, i) in columns">
        <strong v-if="!col.link">{{ row[i] }}</strong>
        <a v-if="col.link" :href="row[i].link"><strong>{{ row[i].value }}</strong></a>
      </div>
      <div class="column">
        <b-dropdown variant="link" size="lg" no-caret>
          <template slot="button-content">
            <svg width="22px" height="4px" viewBox="0 0 22 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Desktop-HD" transform="translate(-473.000000, -260.000000)">
                        <g id="OpenSide" transform="translate(140.000000, 46.000000)">
                            <g id="ScreensSide" transform="translate(11.000000, 55.000000)">
                                <g id="Table" transform="translate(27.000000, 120.000000)">
                                    <g id="Row" transform="translate(0.000000, 26.000000)">
                                        <path d="M297,17 C298.104569,17 299,16.1045695 299,15 C299,13.8954305 298.104569,13 297,13 C295.895431,13 295,13.8954305 295,15 C295,16.1045695 295.895431,17 297,17 L297,17 L297,17 Z M305.727273,17 C306.831842,17 307.727273,16.1045695 307.727273,15 C307.727273,13.8954305 306.831842,13 305.727273,13 C304.622703,13 303.727273,13.8954305 303.727273,15 C303.727273,16.1045695 304.622703,17 305.727273,17 L305.727273,17 L305.727273,17 Z M314.454545,17 C315.559115,17 316.454545,16.1045695 316.454545,15 C316.454545,13.8954305 315.559115,13 314.454545,13 C313.349976,13 312.454545,13.8954305 312.454545,15 C312.454545,16.1045695 313.349976,17 314.454545,17 L314.454545,17 L314.454545,17 Z" id="more"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </template>
          <b-dropdown-item href="#" :key="ind" v-for="(action, ind) in actions">{{ action.name }}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    actions: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
