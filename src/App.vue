<template>
  <header class="header">
    <router-link to="/" class="logo"
      >Интернет-магазин компьютерной техники</router-link
    >
    <router-link to="/" class="cart-link">Корзина</router-link>
  </header>
  <main class="main">
    <SideMenu />
    <router-view />
  </main>
</template>

<script>
import SideMenu from "@/components/SideMenu";

export default {
  name: "App",
  components: {
    SideMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: navy;
}

.logo {
  font-size: 24px;
  color: #fff;
}

.cart-link {
  color: #fff;
  font-size: 16px;
}

.logo:hover,
.cart-link:hover {
  color: darkorange;
}

.main {
  display: flex;
  gap: 10px;
  align-items: stretch;
}
</style>
