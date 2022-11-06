<template>
  <div class="vl-parent">
    <loading v-model:active="isLoading"
             :is-full-page="true"/>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  data() {
    return {
      isLoading: true,
      fullPage: true,
    }
  },
  components: {
    Loading
  },
  methods: {
  }
}
</script>