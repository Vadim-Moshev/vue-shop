<template>
  <div class="message-container">
    {{ `Заполните поле «${invalidFieldName}»` }}
  </div>
</template>

<script>
export default {
  name: "FormValidationError",
  props: {
    invalidFieldName: String,
  },
};
</script>

<style scoped>
.message-container {
  padding: 15px;
  border-radius: 5px;
  border: 3px solid #696969;
  background-color: #fa8072;
  font-weight: bold;
}
</style>
