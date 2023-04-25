<template>
  <div class="wrapper">
    <div class="goods-container">
      <GoodItem v-for="item in goods" :key="item.id" :goodName="item.title" />
    </div>
  </div>
</template>

<script>
import GoodItem from "@/components/GoodItem";
import goods from "@/mocks/goods";

function getGoodsByCategory(goods, index) {
  const categoryIndex = Number(index);
  return goods.filter((item) => {
    return Number(item.category) === categoryIndex;
  });
}

export default {
  name: "CategoryViewer",
  components: {
    GoodItem,
  },
  date() {
    return {
      goods: [],
    };
  },
  created() {
    const categoryIndex = this.$route.params.categoryIndex;
    this.goods = getGoodsByCategory(goods, categoryIndex);
  },
  beforeRouteUpdate(to, from, next) {
    const categoryIndex = to.params.categoryIndex;
    this.goods = getGoodsByCategory(goods, categoryIndex);
    next();
  },
};
</script>

<style>
.wrapper {
  flex-grow: 1;
}

.goods-container {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
