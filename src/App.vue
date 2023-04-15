<template>
  <header class="header">
    <div class="logo">Интернет-магазин компьютерной техники</div>
    <router-link to="/" class="cart-link">Корзина</router-link>
  </header>
  <router-view />
</template>

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

.cart-link:hover {
  color: darkorange;
}
</style>
