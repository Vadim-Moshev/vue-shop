<template>
  <div class="shop-cart__caption-container">
    <span class="shop-cart__header">{{ shopCartHeader }}</span>
    <router-link v-if="cartIsNotEmpy" to="/makeorder"
      >Перейти к оформлению заказа</router-link
    >
  </div>
  <div v-if="cartIsNotEmpy" class="goods-container">
    <GoodItem
      v-for="item in boughtGoods"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :photo="item.photo"
      :description="item.description"
      :price="item.price"
      :categoryNameEng="item.categoryNameEng"
      :isBought="true"
      :countInCart="item.countInCart"
      @changeGoodAvailability="changeGoodAvailability"
      @changeGoodCount="changeGoodCount"
    />
  </div>
</template>

<script>
import boughtGoodsStorage from "@/mocks/bought-goods-storage";
import goods from "@/mocks/goods";
import formatNumber from "@/helpers/format-number";

import GoodItem from "@/components/GoodItem";

export default {
  name: "ShopCart",
  emits: ["changeGoodAvailability", "changeGoodCount"],
  components: {
    GoodItem,
  },
  data() {
    return {
      cartSize: 0,
      totalPrice: 0,
      boughtGoods: [],
    };
  },
  created() {
    this.boughtGoods = goods.filter((good) =>
      boughtGoodsStorage.isBought(good.id)
    );

    this.boughtGoods.forEach((boughtGood) => {
      boughtGood.countInCart = boughtGoodsStorage.cartContent[boughtGood.id];
    });

    this.cartSize = boughtGoodsStorage.cartSize;
    this.totalPrice = boughtGoodsStorage.totalPrice;
  },
  computed: {
    shopCartHeader() {
      const cartSize = this.cartSize;
      if (cartSize === 0) {
        return "Ваша корзина пуста. Купите что-нибудь.";
      }

      const totalPrice = formatNumber(this.totalPrice);
      return `В вашей корзине ${cartSize} товар(а,ов) на общую сумму ${totalPrice} руб.`;
    },
    cartIsNotEmpy() {
      return this.cartSize > 0;
    },
  },
  methods: {
    changeGoodAvailability({ id }) {
      this.$emit("changeGoodAvailability", { id, flag: false });

      const index = this.boughtGoods.findIndex(
        (boughtGood) => boughtGood.id === id
      );
      this.boughtGoods.splice(index, 1);

      this.cartSize = boughtGoodsStorage.cartSize;
      this.totalPrice = boughtGoodsStorage.totalPrice;
    },
    changeGoodCount(payload) {
      this.$emit("changeGoodCount", payload);

      this.cartSize = boughtGoodsStorage.cartSize;
      this.totalPrice = boughtGoodsStorage.totalPrice;
    },
  },
};
</script>

<style scoped>
.shop-cart__caption-container {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 15px;
  padding-left: 0;
  border-bottom: 2px solid navy;
}

.goods-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
