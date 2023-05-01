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
        @changecartcontent="changeCartContent"
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
  emits: ["changecartcontent"],
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
    changeCartContent(payload) {
      const { flag, changeCount } = payload;
      const { id, price } = this.good;
      const count = changeCount ? 1 : this.good.countInCart;

      const dataEvent = { id, price, count, flag };
      this.$emit("changecartcontent", dataEvent);

      if (!changeCount) {
        this.good.isBought = flag;
      }
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
