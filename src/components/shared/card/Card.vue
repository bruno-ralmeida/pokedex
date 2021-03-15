<template>
  <div class="card">
    <div class="card_image">
      <poke-image :url="pokemon.imageURL" :title="pokemon.name" />
    </div>
    <div class="card_name">
      <span> {{ pokemon.type }} </span> 
      <span>|| </span>
      <span>{{ pokemon.name }}</span>
    </div>
    <div class="card_url">
      <button type="button"> Detalhes </button>
    </div>
  </div>
</template>

<script>
import ImageResponsive from "../image-responsive/ImageResponsive";
export default {
  props: ["pokemon"],
  components: {
    "poke-image": ImageResponsive,
  },
};
</script>

<style scoped>

.card, .card_image, .card_name, .card_url {
  margin: 1em;
}

.card, .card_image {
  overflow: hidden;
}

.card_image {
  grid-area: image;
  width: 100%;
}

.card_name > span {
  grid-area: name;
  font-size: 28px;
  text-transform: capitalize;
  font-family: "Fredoka One", cursive;
  color: #ffdf0c;
  text-shadow: -4px 2px 2px #386abb;
}

.card_url {
  grid-area: details;
  width: 100%;
}

.card {
  align-items: center;
  background: #fefefe7c;
  border-radius: 20px;
  display: grid;
  padding: .5em;
  justify-items: center;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: auto;
  grid-template-areas:
    "image"
    "name"
    "details";
  height: 450px;
  width: 300px;
  margin: 1em .5em;
}

</style>