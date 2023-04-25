<template>
  <header class="header">
    <router-link to="/" class="logo"
      >Интернет-магазин компьютерной техники</router-link
    >
    <router-link to="/shopcart" class="cart-link">Корзина</router-link>
  </header>
  <main class="main">
    <SideMenu />
    <div class="router-view-container">
      <router-view />
    </div>
  </main>
  <footer class="footer"></footer>
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
html,
body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100%;
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
  flex: auto;
  height: 100%;
}

.router-view-container {
  padding-top: 20px;
  flex-grow: 1;
  text-align: left;
}

.footer {
  height: 100px;
  background-color: navy;
}
</style>
