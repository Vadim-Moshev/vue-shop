<template>
  <div class="good-item">
    <div class="good-item__image"></div>
    <div class="good-item__info">
      <router-link to="/" class="good-item__title">{{ goodName }}</router-link>
      <p class="good-item__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        vitae, veritatis aut, aperiam eos, officia maxime reprehenderit sapiente
        ducimus incidunt quam sint laboriosam ea corrupti! Delectus omnis enim
        cumque iusto!
      </p>
    </div>
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
  gap: 15px;
  border-bottom: 1px solid navy;
  padding: 15px;
}

.good-item__image {
  width: 100px;
  height: 100px;
  background-color: navy;
}

.good-item__info {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
}

.good-item__title {
  font-size: 20px;
}

.good-item__description {
}
</style>
