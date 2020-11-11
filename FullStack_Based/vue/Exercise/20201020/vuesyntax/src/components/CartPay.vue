<template>
  <!-- 总价 -->
  <div class="total">
    <span>总价：{{ price }}</span>
    <button>结算</button>
  </div>
</template>
<script>
export default {
  name: "CartPay",
  props: ["list"],
  computed: {
    price() {
      let sum = 0;
      //计算总价格
      this.list.forEach(item => {
        sum += item.price * item.num;
      });

      return sum;
    }
  }
};
</script>

<style></style>
