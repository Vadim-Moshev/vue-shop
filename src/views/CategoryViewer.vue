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
    this.goods = goods.filter((item) => {
      return +item.category === +this.$route.params.categoryIndex;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.goods = goods.filter((item) => {
      return +item.category === +to.params.categoryIndex;
    });
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
