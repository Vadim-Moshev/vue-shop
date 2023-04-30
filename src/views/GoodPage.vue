<template>
  <h1 class="good-title">{{ good.title }}</h1>
  <div class="good-info">
    <img :src="pathToPhoto" alt="" />
    <div class="good-about">
      <p class="good-description">
        {{ good.description }}
      </p>
      <p class="good-price">{{ priceString }}</p>
      <GoodControlPanel
        :isBought="good.isBought"
        :countInCart="good.countInCart"
        @addgoodtocart="addGoodToCart"
        @removegoodfromcart="removeGoodFromCart"
        @incrementgood="incrementGood"
        @decrementgood="decrementGood"
      />
    </div>
  </div>
</template>

<script>
import goods from "@/mocks/goods.js";
import formatNumber from "@/helpers/format-number.js";
import boughtGoodsStorage from "@/mocks/bought-goods-storage.js";

import GoodControlPanel from "@/components/GoodControlPanel";

export default {
  name: "GoodPage",
  emits: [
    "addgoodtocart",
    "removegoodfromcart",
    "incrementgood",
    "decrementgood",
  ],
  components: {
    GoodControlPanel,
  },
  data() {
    return {
      good: {},
    };
  },
  created() {
    this.good = goods.find((item) => {
      return item.id === this.$route.params.id;
    });
    this.good.isBought = boughtGoodsStorage.isBought(this.good.id);
    this.good.countInCart = boughtGoodsStorage.cartContent[this.good.id] || 1;
  },
  methods: {
    addGoodToCart() {
      this.$emit("addgoodtocart", {
        id: this.good.id,
        price: this.good.price,
      });

      this.good.isBought = true;
    },
    removeGoodFromCart() {
      this.$emit("removegoodfromcart", {
        id: this.good.id,
        price: this.good.price,
      });

      this.good.isBought = false;
    },
    incrementGood() {
      this.$emit("incrementgood", {
        id: this.good.id,
        price: this.good.price,
      });
    },
    decrementGood() {
      this.$emit("decrementgood", {
        id: this.good.id,
        price: this.good.price,
      });
    },
  },
  computed: {
    pathToPhoto() {
      const category = this.good.categoryNameEng;
      const photo = this.good.photo;
      return require(`@/mocks/photos/${category}/${photo}`);
    },

    priceString() {
      const price = formatNumber(this.good.price);
      return `${price} Руб.`;
    },
  },
};
</script>

<style scoped>
.good-title {
  font-size: 24px;
  text-align: center;
}

.good-info {
  display: flex;
  gap: 10px;
}

.good-about {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.good-price {
  color: navy;
  font-size: 18px;
  font-weight: bold;
}
</style>
