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
      @addgoodtocart="$emit('addgoodtocart', { id, price })"
      @removegoodfromcart="$emit('removegoodfromcart', { id, price })"
      @incrementgood="$emit('incrementgood', { id, price })"
    />
  </div>
</template>

<script>
import formatNumber from "@/helpers/format-number.js";

import GoodControlPanel from "@/components/GoodControlPanel";

export default {
  name: "GoodItem",
  emits: ["addgoodtocart", "removegoodfromcart", "incrementgood"],
  components: {
    GoodControlPanel,
  },
  props: {
    id: String,
    title: String,
    description: String,
    price: Number,
    categoryNameEng: String,
    photo: String,
    isBought: Boolean,
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
