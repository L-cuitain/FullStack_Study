<template>
    <div id="route">
        <!-- 添加路由 -->
        <router-link to="/home">User   </router-link>
        <router-link to="/about">Login</router-link>
        <!-- 添加路由视图 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

</style>
