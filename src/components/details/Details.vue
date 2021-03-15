<template>
  <div class="detail">
    <h2 class="detail_name">Result</h2>
    <div class="detail_main">
      <ul v-for="pokemon of pokemons" :key="pokemon.id">
        <poke-card :name="pokemon.name" :url="pokemon.url" :id="pokemon.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "../shared/card/Card";
export default {
  components: {
    "poke-card": Card,
  },
  props: ["pokemons"],
};
</script>

<style scoped>
.detail {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #cecece8c;
  border-radius: 10px;
  margin: 1.5em;
  padding: 1.5em;
  align-items: center;
}
.detail_name {
  font-family: "Fredoka One", cursive;
  font-size: 42px;
  color: #ffdf0c;
  text-shadow: -4px 1px 2px #386abb;
  margin: 0.5em 0;
}
.detail_main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>