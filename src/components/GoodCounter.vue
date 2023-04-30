<template>
  <div class="goods-counter">
    <input
      @click="decrement"
      class="goods-counter__button"
      type="button"
      value="-"
    />
    <div class="goods-counter__indicator">{{ counterValue }}</div>
    <input
      @click="increment"
      class="goods-counter__button"
      type="button"
      value="+"
    />
  </div>
</template>

<script>
const MIN_VAL = 1;
const MAX_VAL = 999;

export default {
  name: "GoodCounter",
  props: {
    countInCart: Number,
  },
  emits: ["incrementgood"],
  data() {
    // console.log("А это я: ", this.countInCart);
    return {
      counterValue: this.countInCart,
    };
  },
  methods: {
    decrement() {
      if (this.counterValue === MIN_VAL) {
        return;
      }

      this.counterValue--;
    },

    increment() {
      if (this.counterValue === MAX_VAL) {
        return;
      }

      this.counterValue++;

      this.$emit("incrementgood");
    },
  },
};
</script>

<style scoped>
.goods-counter {
  display: flex;
  gap: 5px;
}

.goods-counter__button,
.goods-counter__indicator {
  width: 25px;
  height: 25px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
}

.goods-counter__button {
  background-color: navy;
  color: #fff;
  cursor: pointer;
}

.goods-counter__indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  color: navy;
  border: 1px solid navy;
  width: 40px;
}
</style>
