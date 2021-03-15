<template>
  <div class="card">
    <div class="card_image">
      <poke-image :url="urlPokemonImage()" :title="name" />
    </div>
    <div class="card_name">
      <span>{{ name }}</span>
    </div>
    <div class="card_url">
      <!-- <a href="url"> Detalhes</a> -->
    </div>
  </div>
</template>

<script>
import ImageResponsive from "../image-responsive/ImageResponsive";
export default {
  props: ["name", "url", "id"],
  components: {
    "poke-image": ImageResponsive,
  },
  data() {
    return {};
  },
  methods: {
    urlPokemonImage() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
    },
  },
};
</script>

<style scoped>
.card_image {
  grid-area: image;
  margin: 0.5em 1em;
  overflow: hidden;
}

.card_name > span {
  grid-area: name;
  font-size: 28px;
  text-transform: capitalize;
  font-family: "Fredoka One", cursive;
  margin: 0 1em;
  color: #ffdf0c;
  text-shadow: -4px 2px 2px #386abb;
}

.card_url {
  grid-area: details;
  margin: 0.5em 1em;
}

.card {
  background: #fefefe7c;
  border-radius: 30px;
  display: grid;
  padding: 1em 0;
  justify-items: center;
  grid-template-rows: 80% 10% 10%;
  grid-template-columns: auto;
  grid-template-areas:
    "image"
    "name"
    "details";
  height: 450px;
  width: 300px;
  margin: 1em .5em;
  overflow: hidden;
}

</style>