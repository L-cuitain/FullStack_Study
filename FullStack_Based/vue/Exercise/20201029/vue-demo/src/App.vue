<template>
  <div>
    <h2>使用mutation获取数据</h2>
    <span>姓名: {{aname}}</span>
    <button @click="changeName">mutation</button>
  </div>
</template>

<script>
import { mapMutations } from "./store";

export default {
  name: "App",
  methods : {
    ...mapMutations('changeName',"里斯"),
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
