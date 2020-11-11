<template>
  <div>
    <header class="header">
      <router-link to="/pageIndex" id="_linkleft">首页</router-link>
      <router-link to="/PageAside" id="_linkright"
        >不知道是什么的列表</router-link
      >
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0px;
  height: 100%;
}
/* 头部 */
.header {
  height: 50px;
  background-color: chocolate;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.main {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 40px;
  width: 100%;
}
#_linkleft {
  float: left;
}
#_linkright {
  float: right;
}

.content {
  flex: 1;
  text-align: center;
  height: 100%;
}
.left {
  flex: 0 0 20%;
  background-color: darkgreen;
}
.left a {
  display: block;
  height: 100%;
  color: white;
  text-decoration: none;
}
.right {
  margin: 5px;
}
.btns {
  width: 100%;
  height: 35px;
  line-height: 35px;
  background-color: #f5f5f5;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
}
button {
  height: 30px;
  background-color: #ecf5ff;
  border: 1px solid lightskyblue;
  font-size: 12px;
  padding: 0 20px;
}
.main-content {
  margin-top: 10px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li {
  height: 45px;
  line-height: 45px;
  background-color: tomato;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #eee;
  line-height: 35px;
  font-size: 12px;
}

th {
  background-color: #ddd;
}
</style>
