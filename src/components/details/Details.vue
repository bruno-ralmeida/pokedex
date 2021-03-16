<template>
  <div class="detail">
    <div class="detail_main">
      <ul v-for="pokemon of pokemons" :key="pokemon.id">
        <poke-card :pokemon="pokemon" />
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

<style >
.detail {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #fefefec4;
  border-radius: 10px;
  margin: 1em 0;
  padding: 4rem 0;
  align-items: center;
}
.detail_main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>