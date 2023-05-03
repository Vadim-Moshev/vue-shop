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
        :isBought="item.isBought"
        :countInCart="item.countInCart"
        @changecartcontent="changeCartContent"
      />
    </div>
  </div>
</template>

<script>
import GoodItem from "@/components/GoodItem";
import goods from "@/mocks/goods";
import boughtGoodsStorage from "@/mocks/bought-goods-storage";

function getGoodsByCategory(index) {
  const categoryIndex = Number(index);
  const filteredGoods = goods.filter((item) => {
    return Number(item.category) === categoryIndex;
  });
  filteredGoods.forEach((good) => {
    good.isBought = boughtGoodsStorage.isBought(good.id);
    good.countInCart = boughtGoodsStorage.cartContent[good.id] || 1;
  });

  return filteredGoods;
}

export default {
  name: "CategoryViewer",
  emits: ["changecartcontent"],
  components: {
    GoodItem,
  },
  data() {
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
  methods: {
    changeCartContent(payload) {
      this.$emit("changecartcontent", payload);

      const { id, flag, changeCount } = payload;
      if (changeCount) {
        return;
      }

      const targetGoodIndex = this.goods.findIndex((good) => good.id === id);
      this.goods[targetGoodIndex].isBought = flag;
    },
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
