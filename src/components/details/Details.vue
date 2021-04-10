<template>
  <div class="detail">
    <div class="detail_main">
      <ul>
        <li v-for="pokemon of pokemons" :key="pokemon.id">
          <poke-card :pokemon="pokemon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "../shared/card/Card";
export default {
  components: {
    "poke-card": Card
  },
  props: ["pokemons"]
};
</script>

<style>
.detail {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #fefefec4;
  border-radius: 10px;
  margin: 4em 0;
  padding: 0 50px;
  align-items: center;
}
.detail_main > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5em 0;
}
</style>
