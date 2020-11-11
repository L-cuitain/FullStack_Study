<template>
  <div>
    <h3>我是{{ status }}的火车王</h3>
    <button @click="handleBack">退出</button>
  </div>
</template>

<script>
export default {
  props: ["status"],
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style></style>
