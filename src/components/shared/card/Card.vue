<template>
  <div class="card">
    <div class="card_header">
      <ul v-for="types of pokemon.types">
        <li class="card_type">
          {{ types.type.name }} 
        </li>
      </ul>

      <div class="card_image">
        <poke-image :url="pokemon.imageURL" :title="pokemon.name" />
      </div>
    </div>
    <div class="card_main">
      <div class="card_name">
        <p>#{{ idFormated }}</p>
        <span>{{ pokemon.name }} </span>
      </div>
      <div class="card_url">
        <button type="button">Detalhes</button>
      </div>
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
  computed: {
    idFormated() {
      return this.pokemon.id.toString().padStart(3, "0");
    },
  },
};
</script>

<style scoped>
.card {
  background: #fefefe7c;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: 1em;
  width: 400px;
}
.card_type {
  grid-area: types;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 50px;
  background: red;
  text-align: center;
  text-transform: capitalize;
  
}
.card_header > .card_image {
  grid-area: image;
}
.card_header {
  background: pink;
  border-radius: 20px;
  display: grid;
  overflow: hidden;
  height: 100%;
  margin: 0.5em;
  align-items: center;
  grid-template-columns: 1fr 70%;
  grid-template-areas: "types image";
}

.card_main {
  background: blue;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  align-content: center;
}

.card_name, .card_url{
  align-self: center;
  justify-content: center;
}
.card_main > .card_name,
.card_main > .card_url {
  width: calc(100% - 0.5em);
}
</style>