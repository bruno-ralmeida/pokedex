<template>
  <section class="card" :class="pokemonTypeBg">
    <Header :pokemon="pokemon" />
    <Info :pokemon="pokemon" />
  </section>
</template>

<script>
import CardHeader from "./CardHeader";
import CardInfos from "./CardInfos.vue";
export default {
  props: ["pokemon"],
  components: {
    Header: CardHeader,
    Info: CardInfos
  },
  computed: {
    pokemonTypeBg() {
      return `${this.pokemon.types[0].type.name || "normal"}-bg`;
    }
  }
};
</script>

<style scoped>
.card {
  background: #f8f8f2;
  border-radius: 20px;
  box-shadow: 5px 3px 10px #44475a83, inset 0px 0px 2px #44475a83;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5em 0.5em;
  padding: 1em;
  width: 350px;
  position: relative;
}

/* POKÉMONS BG COLORS */

.bug-bg {
  background: #cfd3b5;
}

.dark-bg {
  background: #a09893;
}

.dragon-bg {
  background: #e3d7ff;
}

.electric-bg {
  background: #fdf5d4;
}

.fairy-bg {
  background: #fadde3;
}

.fighting-bg {
  background: #ceb5b4;
}

.fire-bg {
  background: #f6dece;
}

.flying-bg {
  background: #e2ddf0;
}

.grass-bg {
  background: #c9d3c5;
}

.ghost-bg {
  background: #b1adb9;
}

.ground-bg {
  background: #dfdbcf;
}

.ice-bg {
  background: #d6e7e7;
}

.normal-bg {
  background: #c0c0b4;
}

.poison-bg {
  background: #c0b5c0;
}

.psychic-bg {
  background: #fbe8ed;
}

.rock-bg {
  background: #ccc9be;
}

.steel-bg {
  background: #d2d2dd;
}

.water-bg {
  background: #e8edfa;
}

@media only screen and (max-width: 800px) {
  .card {
    width: 300px;
  }
}
</style>
