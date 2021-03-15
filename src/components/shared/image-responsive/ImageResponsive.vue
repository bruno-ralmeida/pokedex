<template>
  <div class="image_content">
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
  max-height: 85vh;
}
</style>
