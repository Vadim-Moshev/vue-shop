<template>
  <div class="good-control-panel">
    <template v-if="isBought">
      <div class="good-control-panel__notification">Товар в корзине</div>
      <input
        class="good-control-panel__button"
        type="button"
        value="Убрать из корзины"
        @click="$emit('changeGoodAvailability', { flag: false })"
      />
      <GoodCounter
        :countInCart="countInCart"
        @changeGoodCount="changeGoodCount"
      />
    </template>
    <input
      v-else
      class="good-control-panel__button"
      type="button"
      value="В ворзину"
      @click="$emit('changeGoodAvailability', { flag: true })"
    />
  </div>
</template>

<script>
import GoodCounter from "@/components/GoodCounter";

export default {
  name: "GoodControlPanel",
  emits: ["changeGoodAvailability", "changeGoodCount"],
  props: {
    isBought: Boolean,
    countInCart: Number,
  },
  components: {
    GoodCounter,
  },
  methods: {
    changeGoodCount(payload) {
      this.$emit("changeGoodCount", payload);
    },
  },
};
</script>

<style scoped>
.good-control-panel {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.good-control-panel__notification {
  color: navy;
  font-weight: bold;
}

.good-control-panel__button {
  cursor: pointer;
  background-color: navy;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  width: 160px;
}

.good-control-panel__button:hover {
  background-color: darkorange;
}
</style>
