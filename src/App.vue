<template>
  <header class="header">
    <router-link to="/" class="logo"
      >Интернет-магазин компьютерной техники</router-link
    >
    <ShopCartLink :caption="shopCartCaption" />
  </header>
  <main class="main">
    <SideMenu />
    <div class="router-view-container">
      <router-view @changeGoodAvailability="changeGoodAvailability" />
    </div>
  </main>
  <footer class="footer"></footer>
</template>

<script>
import boughtGoodsStorage from "@/mocks/bought-goods-storage";

import SideMenu from "@/components/SideMenu";
import ShopCartLink from "@/components/ShopCartLink";

export default {
  name: "App",
  components: {
    SideMenu,
    ShopCartLink,
  },
  data() {
    return {
      cartSize: 0,
      totalPrice: 0,
    };
  },
  created() {
    this.cartSize = boughtGoodsStorage.cartSize;
    this.totalPrice = boughtGoodsStorage.totalPrice;
  },
  computed: {
    shopCartCaption() {
      return this.totalPrice === 0
        ? `Корзина (нет товаров)`
        : `Корзина (Товаров ${this.cartSize} | ${this.totalPrice} Руб.)`;
    },
  },
  methods: {
    changeGoodAvailability({ id, flag }) {
      boughtGoodsStorage.changeGoodAvailability(id, flag);

      this.cartSize = boughtGoodsStorage.cartSize;
      this.totalPrice = boughtGoodsStorage.totalPrice;
    },
    changeGoodCount({ id, flag }) {
      boughtGoodsStorage.changeGoodCount(id, flag);

      this.cartSize = boughtGoodsStorage.cartSize;
      this.totalPrice = boughtGoodsStorage.totalPrice;
    },
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
  width: 1200px;
  margin: 0 auto;
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
