<template>
  <div class="container">
    <div class="box">
      <h2>声明响应式简单变量:</h2>
      <!-- 在模板中使用 -->
      <p>{{num}}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
    name : "Setup_ref",
    setup(){
        let num = ref(345);
        //在setup中使用  ref对象拥有指向内部值的单一属性 .value
        console.log(num.value);
        return{
            num
        } 
    }
}
</script>

<style>

</style>