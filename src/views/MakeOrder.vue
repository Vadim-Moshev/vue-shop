<template>
  <div>
    <h1 v-if="cartIsNotEmpy">Оформление заказа</h1>
    <h1 v-else>оформление зказа недоступно, поскольку ваша корзина пуста</h1>
  </div>
</template>

<script>
import boughtGoodsStorage from "@/mocks/bought-goods-storage";

export default {
  name: "MakeOrder",
  computed: {
    cartIsNotEmpy() {
      return boughtGoodsStorage.cartSize > 0;
    },
  },
};
</script>

<style scoped></style>
