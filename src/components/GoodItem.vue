<template>
  <div class="good-item">
    <img class="good-item__image" :src="pathToPhoto" alt="" />
    <div class="good-item__info">
      <router-link :to="`/goodpage/${id}`" class="good-item__title">{{
        title
      }}</router-link>
      <p class="good-item__description">
        {{ description }}
      </p>
      <div class="good-item__price">{{ priceString }}</div>
    </div>
    <GoodControlPanel
      :isBought="isBought"
      :countInCart="countInCart"
      @changeGoodAvailability="changeGoodAvailability"
    />
  </div>
</template>

<script>
import formatNumber from "@/helpers/format-number.js";
import boughtGoodsStorage from "@/mocks/bought-goods-storage.js";
import GoodControlPanel from "@/components/GoodControlPanel";

export default {
  name: "GoodItem",
  emits: ["changeGoodAvailability"],
  components: {
    GoodControlPanel,
  },
  data() {
    return {
      countInCartData: 0,
    };
  },
  props: {
    id: String,
    title: String,
    description: String,
    price: Number,
    categoryNameEng: String,
    photo: String,
    isBought: Boolean,
    countInCart: Number,
  },
  created() {
    this.countInCartData = this.countInCart;
  },
  methods: {
    changeGoodAvailability({ flag }) {
      this.$emit("changeGoodAvailability", { id: this.id, flag });

      this.countInCartData = boughtGoodsStorage.cartContent[this.id] || 1;
    },
  },
  computed: {
    priceString() {
      return `${formatNumber(this.price)} Руб.`;
    },
    pathToPhoto() {
      return require(`@/mocks/photos/${this.categoryNameEng}/${this.photo}`);
    },
  },
};
</script>

<style>
.good-item {
  display: flex;
  gap: 15px;
  border-bottom: 1px solid navy;
  padding: 15px;
}

.good-item:last-child {
  border-bottom: none;
}

.good-item__image {
  width: 100px;
}

.good-item__info {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.good-item__title {
  font-size: 20px;
}

.good-item__price {
  color: navy;
  font-size: 20px;
  font-weight: bold;
}

.good-item__controls {
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
