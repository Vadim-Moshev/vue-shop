<template>
  <div class="good-item">
    <span>{{ goodName }}</span>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    goodName: String,
  },
};
</script>

<style>
.good-item {
  display: flex;
  flex-direction: column;
  background-color: silver;
  padding: 5px;
}
</style>
