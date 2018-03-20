<template>
    <div id="activity">
        <div class="title-wrapper">
            <h2>Assistant</h2>
        </div>
        <div id="activities">
            <single :log="{
                id: 1,
                user: {
                    avatar: 'http://catherinewaltonrmt.com/wp-content/uploads/2016/12/bio.png',
                    name: 'Emily Foe',
                },
                text: 'Added \'News\' screen',
                time: '1 hour ago',
            }"></single>
            <single :log="{
                id: 1,
                user: {
                    avatar: '../../../../static/images/john.png',
                    name: 'John Doe'
                },
                text: 'Modified application\'s title',
                time: '2 hours ago',
            }"></single>
        </div>
    </div>
</template>

<script>
import Single from './Single/';

export default {
  components: {
    Single,
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
