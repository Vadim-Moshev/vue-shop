<template>
  <div class="wrapper">
    <h2>Вы смотрите категорию {{ this.$route.params.categoryName }}</h2>
    <div class="goods-container">
      <GoodItem goodName="Пётр" />
    </div>
  </div>
</template>

<script>
import GoodItem from "@/components/GoodItem";

export default {
  name: "CategoryViewer",
  components: {
    GoodItem,
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
