<template>
  <div class="goods-counter">
    <input
      class="goods-counter__button"
      type="button"
      value="-"
      :disabled="decButtonDisabled"
      @click="decrement"
    />
    <div class="goods-counter__indicator">{{ counterValue }}</div>
    <input
      class="goods-counter__button"
      type="button"
      value="+"
      :disabled="incButtonDisabled"
      @click="increment"
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
  emits: ["changeGoodCount"],
  data() {
    return {
      counterValue: 0,
      decButtonDisabled: false,
      incButtonDisabled: false,
    };
  },
  created() {
    this.counterValue = this.countInCart;

    this.decButtonDisabled = false;
    this.incButtonDisabled = false;

    if (this.counterValue === MIN_VAL) {
      this.decButtonDisabled = true;
    }

    if (this.counterValue === MAX_VAL) {
      this.incButtonDisabled = true;
    }
  },
  methods: {
    decrement() {
      if (this.counterValue === MIN_VAL) {
        return;
      }

      this.counterValue--;

      this.$emit("changeGoodCount", { flag: false });
    },

    increment() {
      if (this.counterValue === MAX_VAL) {
        return;
      }

      this.counterValue++;

      this.$emit("changeGoodCount", { flag: true });
    },
  },
  watch: {
    counterValue(newValue) {
      this.decButtonDisabled = false;
      this.incButtonDisabled = false;

      if (newValue === MIN_VAL) {
        this.decButtonDisabled = true;
      }

      if (newValue === MAX_VAL) {
        this.incButtonDisabled = true;
      }
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

.goods-counter__button:hover {
  background-color: darkorange;
}

.goods-counter__button:disabled {
  background-color: gray;
  cursor: not-allowed;
}

.goods-counter__indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  color: navy;
  border: 1px solid navy;
  width: 40px;
  cursor: default;
}
</style>
