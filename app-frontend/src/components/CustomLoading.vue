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

import {mapGetters} from 'vuex';

export default {
  components: {
    Loading
  },
  computed:{
    ...mapGetters({
      isLoading: "globalState/isLoadingState",
    }),
  },
}
</script>