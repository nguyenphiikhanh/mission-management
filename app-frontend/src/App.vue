<template>
    <div>
        <CustomLoading/>
        <router-view></router-view>
    </div>
</template>

<script>
import CustomLoading from "./components/CustomLoading.vue";
export default {
  components:{
    CustomLoading,
  },
  data(){
    return{
      isLoading: true,
    }
  }
}
</script>

<style scoped>

</style>
