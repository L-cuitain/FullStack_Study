<template>
  <div>
    <refs></refs>
  </div>
</template>

<script>
import refs from "./components/Setup_ref";

export default {
  name : "App",
  setup(props,context){
    //该函数接收 props 作为其第一个参数
    console.log(props);
    //第二个参数提供一个上下文对象(context) 从原来2.X 中 this 选择性暴露一些property
    console.log(context);
  },

  components:{
    refs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
