<template>
  <nav class="side-menu">
    <router-link class="side-menu__link-item" :to="`/category/${CAT_MONITORS}`"
      >Мониторы</router-link
    >
    <router-link class="side-menu__link-item" :to="`/category/${CAT_MICE}`"
      >Мыши</router-link
    >
    <router-link class="side-menu__link-item" :to="`/category/${CAT_KEYBOARDS}`"
      >Клавиатуры</router-link
    >
    <router-link class="side-menu__link-item" :to="`/category/${CAT_HDD}`"
      >Жёсткие диски</router-link
    >
    <router-link class="side-menu__link-item" :to="`/category/${CAT_SSD}`"
      >Твердотельные диски</router-link
    >
    <router-link class="side-menu__link-item" :to="`/category/${CAT_LAPTOPS}`"
      >Ноутбуки</router-link
    >
    <router-link class="side-menu__link-item" :to="`/category/${CAT_PRINTERS}`"
      >Принтеры</router-link
    >
  </nav>
</template>

<script>
import {
  CAT_MONITORS,
  CAT_MICE,
  CAT_KEYBOARDS,
  CAT_HDD,
  CAT_SSD,
  CAT_LAPTOPS,
  CAT_PRINTERS,
} from "@/helpers/categories-indices.js";

export default {
  name: "SideMenu",
  data() {
    return {
      CAT_MONITORS,
      CAT_MICE,
      CAT_KEYBOARDS,
      CAT_HDD,
      CAT_SSD,
      CAT_LAPTOPS,
      CAT_PRINTERS,
    };
  },
};
</script>

<style scoped>
.side-menu {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px 20px;
  background-color: #e6e6fa;
}

.side-menu__link-item {
  text-align: left;
  display: flex;
  min-height: 30px;
  align-items: center;
}

.side-menu__link-item:hover {
  background-color: #b0c4de;
}
</style>
