<template>
  <h1 class="good-title">{{ good.title }}</h1>
  <div class="good-info">
    <img class="good-photo" :src="pathToPhoto" alt="" />
    <div class="good-about">
      <p class="good-description">
        {{ good.description }}
      </p>
      <p class="good-price">{{ priceString }}</p>
      <GoodControlPanel
        :isBought="good.isBought"
        :countInCart="good.countInCart"
        @changeGoodAvailability="changeGoodAvailability"
        @changeGoodCount="changeGoodCount"
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
  emits: ["changeGoodAvailability", "changeGoodCount"],
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
    changeGoodAvailability({ flag }) {
      const { id } = this.good;
      this.good.isBought = flag;

      this.$emit("changeGoodAvailability", { id, flag });

      if (!flag) {
        this.good.countInCart = 1;
      }
    },
    changeGoodCount({ flag }) {
      const { id } = this.good;
      this.$emit("changeGoodCount", { id, flag });
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

.good-photo {
  width: 350px;
}

.good-about {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.good-price {
  color: navy;
  font-size: 18px;
  font-weight: bold;
}
</style>
