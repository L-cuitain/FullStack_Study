<template>
  <div>
    <h3>用户详情页 --- 用户Id为：{{ id }}</h3>
    <button @click="handleClick()">后退</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods : {
      handleClick(){
          this.$router.go(-1);
        //   this.$router.back();
      }
  }
};
</script>

<style></style>
