<template>
  <div class="make-order__header-container">
    <h1 v-if="cartIsNotEmtpy">Оформление заказа</h1>
    <h1 v-else>оформление зказа недоступно, поскольку ваша корзина пуста</h1>
  </div>
  <form v-if="cartIsNotEmtpy" class="make-order__form" action="" novalidate>
    <div class="make-order__form-row">
      <span class="make-order__field-caption">
        Ваше имя <i class="required"></i>
      </span>
      <input class="make-order__field" type="text" v-model="name" />
    </div>
    <div class="make-order__form-row">
      <span class="make-order__field-caption">
        Ваш адрес <i class="required"></i
      ></span>
      <input class="make-order__field" type="text" v-model="address" />
    </div>
    <div class="make-order__form-row">
      <span class="make-order__field-caption">
        Ваш телефон <i class="required"></i
      ></span>
      <input class="make-order__field" type="text" v-model="phone" />
    </div>
    <div class="make-order__form-row">
      <span class="make-order__field-caption"> Комментарий к заказу </span>
      <input class="make-order__field" type="text" v-model="comment" />
    </div>
    <span class="make-order__notice"
      >Если все поля были заполнены верно, то при нажатии на кнопку «Оформить
      заказ» все товары из корзины будут удалены, а вы будете перемещены на
      главную страницу.</span
    >
    <button class="make-order__submit" type="button" @click="makeOrder">
      Оформить заказ
    </button>

    <FormValidationError v-if="isError" :invalidFieldName="invalidFieldName" />
  </form>
</template>

<script>
import boughtGoodsStorage from "@/mocks/bought-goods-storage";

import FormValidationError from "@/components/FormValidationError";

export default {
  name: "MakeOrder",
  emits: ["clearCartContent"],
  components: {
    FormValidationError,
  },
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      comment: "",
      isError: false,
      invalidFieldName: "",
    };
  },
  computed: {
    cartIsNotEmtpy() {
      return boughtGoodsStorage.cartSize > 0;
    },
  },
  methods: {
    makeOrder() {
      if (this.name === "") {
        this.invalidFieldName = "Ваше имя";
        this.isError = true;
        return;
      }

      if (this.address === "") {
        this.invalidFieldName = "Ваш адрес";
        this.isError = true;
        return;
      }

      if (this.phone === "") {
        this.invalidFieldName = "Ваш телефон";
        this.isError = true;
        return;
      }

      this.$emit("clearCartContent");
      this.$router.push("/");
    },
  },
  watch: {
    name() {
      this.invalidFieldName = "";
      this.isError = false;
    },
    address() {
      this.invalidFieldName = "";
      this.isError = false;
    },
    phone() {
      this.invalidFieldName = "";
      this.isError = false;
    },
  },
};
</script>

<style scoped>
.make-order__header-container {
  padding: 15px;
  padding-left: 0;
  border-bottom: 2px solid navy;
}

.make-order__form {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.make-order__form-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.make-order__field-caption {
  width: 120px;
}

.required {
  position: relative;
}

.required:after {
  content: "*";
  position: absolute;
  color: #f00;
  font-size: 22px;
}

.make-order__field {
  flex-grow: 1;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid silver;
}

.make-order__field:focus {
  border-color: navy;
}

.make-order__notice {
  color: navy;
  font-weight: bold;
}

.make-order__submit {
  align-self: flex-start;
  padding: 10px;
  background-color: navy;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
</style>
