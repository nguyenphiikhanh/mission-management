<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading"
             :can-cancel="false" :color="`#805dca`"
             :loader="`spinner`"
             :lock-scroll="true"
             :is-full-page="true"></loading>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      isLoading: true,
    }
  },
  components: {
    Loading
  },
}
</script>