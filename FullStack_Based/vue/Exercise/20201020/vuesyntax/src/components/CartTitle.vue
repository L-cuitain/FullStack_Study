<template>
  <!-- title -->
  <div class="title">{{ msg }}的商品</div>
  <!-- 列表 -->
</template>

<script>
export default {
  name: "CartTitle",
  props: ["msg"]
};
</script>

<!-- 添加“scoped”属性来限制CSS只适用于此组件 -->
<style scoped></style>
