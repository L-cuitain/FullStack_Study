<template>
  <div>
    <aside class="content left">
      <ul>
        <li><router-link to="/ListHappy">⬇要展示的扩展列表1</router-link></li>
        <li><router-view></router-view></li>

        <li>⬇要展示的扩展列表2</li>
        <li>
          <router-link :to="{ name: 'Sad', params: { status: '伤心' } }"
            >伤心的列表</router-link
          >
        </li>
        <li @click="handleClick">神奇的列表</li>
        <li><router-link to="/ListAngry/愤怒">愤怒的列表</router-link></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push({ name: "Magical", params: { status: "神奇" } });
    }
  }
};
</script>

<style></style>
