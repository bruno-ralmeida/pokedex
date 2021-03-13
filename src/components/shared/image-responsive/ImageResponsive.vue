<template>
  <div class="image_content">
    <span>{{ title }}</span>
    <img class="image_responsive" :src="url" :alt="title" />
  </div>
</template>

<script>
export default {
  props: ["url", "title"],
};
</script>

<style scoped>
.image_content {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  max-height: 90vh;
}

.image_content > span {
  align-self: flex-end;
  height: 10vh;
  font-size: 32px;
  text-transform: capitalize;
  font-family: "Fredoka One", cursive;
  margin: 0 1em;
  color: #ffde00;
  text-shadow: #055cbeda -4px -1.5px;
}
</style>
