<template>
  <router-link to="/shopcart" class="cart-link">{{ Somecaption }}</router-link>
</template>

<script>
export default {
  name: "ShopCartLink",
  props: {
    Somecaption: String,
  },
};
</script>

<style scoped>
.cart-link {
  color: #fff;
  font-size: 16px;
}

.logo:hover,
.cart-link:hover {
  color: darkorange;
}
</style>
