<template>
  <h1 class="good-title">{{ good.title }}</h1>
  <div class="good-info">
    <img :src="pathToPhoto" alt="" />
    <div class="good-about">
      <p class="good-description">
        {{ good.description }}
      </p>
      <p class="good-price">{{ priceString }}</p>
    </div>
  </div>
</template>

<script>
import goods from "@/mocks/goods.js";
import formatNumber from "@/helpers/format-number.js";

export default {
  name: "GoodPage",
  date() {
    return {
      good: {},
    };
  },
  created() {
    this.good = goods.find((item) => {
      return item.id === this.$route.params.id;
    });
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
