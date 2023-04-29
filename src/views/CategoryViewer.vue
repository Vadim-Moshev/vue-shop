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
        @addgoodtocart="addGoodToCart"
        @removegoodfromcart="removeGoodFromCart"
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
  });

  return filteredGoods;
}

export default {
  name: "CategoryViewer",
  emits: ["addgoodtocart", "removegoodfromcart"],
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
    addGoodToCart(payload) {
      this.$emit("addgoodtocart", payload);

      const { id } = payload;
      const targetGoodIndex = this.goods.findIndex((good) => good.id === id);
      this.goods[targetGoodIndex].isBought = true;
    },
    removeGoodFromCart(payload) {
      this.$emit("removegoodfromcart", payload);

      const { id } = payload;
      const targetGoodIndex = this.goods.findIndex((good) => good.id === id);
      this.goods[targetGoodIndex].isBought = false;
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
