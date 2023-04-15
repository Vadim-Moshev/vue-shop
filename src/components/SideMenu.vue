<template>
  <nav class="side-menu">
    <router-link class="side-menu__link-item" to="/category/mice"
      >Ссылка номер 1</router-link
    >
    <router-link class="side-menu__link-item" to="/category/keyboadrs"
      >Ссылка номер 2</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style scoped>
.side-menu {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px 20px;
  background-color: #e6e6fa;
}

.side-menu__link-item {
  text-align: left;
  display: flex;
  min-height: 30px;
  align-items: center;
}

.side-menu__link-item:hover {
  background-color: #b0c4de;
}
</style>
