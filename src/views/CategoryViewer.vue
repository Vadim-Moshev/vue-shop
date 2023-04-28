<template>
  <div class="wrapper">
    <div class="goods-container">
      <GoodItem
        v-for="item in goods"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :photo="item.photo"
        :description="item.description"
        :price="item.price"
        :categoryNameEng="item.categoryNameEng"
        @addgoodtocart="
          (payload) => {
            $emit('addgoodtocart', payload);
          }
        "
      />
    </div>
  </div>
</template>

<script>
import GoodItem from "@/components/GoodItem";
import goods from "@/mocks/goods";

function getGoodsByCategory(index) {
  const categoryIndex = Number(index);
  return goods.filter((item) => {
    return Number(item.category) === categoryIndex;
  });
}

export default {
  name: "CategoryViewer",
  emits: ["addgoodtocart"],
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
    this.goods = getGoodsByCategory(categoryIndex);
  },
  beforeRouteUpdate(to, from, next) {
    const categoryIndex = to.params.categoryIndex;
    this.goods = getGoodsByCategory(categoryIndex);
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
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
