<template>
  <div>
      <Demo></Demo>
  </div>
</template>

<script>
// import ClassTran from "./components/class_transtion";
// import DataBind from "./components/data_bind_transtion";
import Demo from "./components/demo";

export default {
  name: "App",
  components: {
    Demo
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

/* 硬件加速
   只需一个
 */
.splt{
  perspective: 100px;
  backface-visibility: hidden;
  transform: translate(0);
}
</style>
