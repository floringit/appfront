<template>
  <div class="table" :id="id ? id : ''">
    <div class="table-header">
      <div class="column" :class="sortable ? '' : 'column-hidden'">
        <span class="column-ctn"></span>
      </div>
      <div class="column" :key="key" v-for="(col, key) in columns">
        <span class="column-ctn">{{ col.name }}</span>
      </div>
      <div class="column">
        <span class="column-ctn">Actions</span>
      </div>
    </div>
    <div class="row" :key="index" v-for="(row, index) in items">
      <div class="column" :class="sortable ? '' : 'column-hidden'">
        <svg v-if="sortable" class="drag-item" width="14px" height="18px" viewBox="0 0 14 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Action" transform="translate(-389.000000, -915.000000)">
                    <g id="ic_swap_vert" transform="translate(384.000000, 912.000000)">
                        <g id="Icon-24px">
                            <path d="M16,17.01 L16,10 L14,10 L14,17.01 L11,17.01 L15,21 L19,17.01 L16,17.01 L16,17.01 Z M9,3 L5,6.99 L8,6.99 L8,14 L10,14 L10,6.99 L13,6.99 L9,3 L9,3 Z" id="Shape" fill="#000000"></path>
                            <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </div>
      <div class="column no-drag-item" :class="col.small ? 'small' : ''" :key="i" v-for="(col, i) in columns">
        <strong v-if="!col.link">{{ row[i] }}</strong>
        <a v-if="col.link" :href="row[i].link"><strong>{{ row[i].value }}</strong></a>
      </div>
      <div class="column no-drag-item">
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
          <b-dropdown-item href="#" @click.prevent="action.callback(index)" :key="ind" v-for="(action, ind) in row[_.size(columns)]">{{ action.name }}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';

export default {
  components: {
    Draggable,
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
    id: {
      type: String,
      required: false,
    },
    sortable: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      sortOptions: {
        group: 'rows',
      },
      drag: false,
      itemsDefault: null,
    };
  },
  computed: {
    items: {
      get: function() {
        this.itemsDefault = this.itemsDefault == null ? this.rows : this.itemsDefault;
        return this.itemsDefault;
      },
      set: function(newValue) {
        this.itemsDefault = newValue;
      },
    },
  },
  methods: {
  },
};
</script>

<style scoped>
  @import './style.css';
</style>
