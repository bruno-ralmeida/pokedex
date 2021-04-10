<template>
  <section class="card_header">
    <section class="card_type">
      <ul>
        <li
          :class="types.type.name"
          v-for="types of pokemon.types"
          :key="types.index"
        >
          {{ types.type.name }}
        </li>
      </ul>
    </section>
    <section class="card_image">
      <span class="rounded" :class="pokemonType"></span>
      <poke-image :url="pokemon.imageURL" :title="pokemon.name" />
    </section>
  </section>
</template>
<script>
import ImageResponsive from "../image-responsive/ImageResponsive";
export default {
  props: ["pokemon"],
  components: {
    "poke-image": ImageResponsive
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    
    pokemonType() {
      return this.pokemon.types[0].type.name || "normal";
    }
  }
};
</script>
<style scoped>
.card_header > .card_type {
  grid-area: types;
}

.card_type > ul > li {
  margin: 0.5em;
  padding: 0.25em;
  border-radius: 100px;
  text-align: center;
  text-transform: capitalize;
  list-style: none;
  color: white;
  text-shadow: -2px 0px 2px #000000cc;
}

.card_header > .card_image {
  grid-area: image;
  overflow: hidden;
  height: 250px;
  position: relative;
  z-index: 99;
}

.card_header {
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: auto;
  grid-template-areas: "types image";
}

/* POKÉMONS TYPE COLORS */
.rounded {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  z-index: -100;
}

.bug {
  background: #a8b820;
}

.dark {
  background: #705848;
}

.dragon {
  background: #7038f8;
}

.electric {
  background: #f8d030;
}

.fairy {
  background: #ee99ac;
}

.fighting {
  background: #c03028;
}

.fire {
  background: #f08030;
}

.flying {
  background: #a890f0;
}

.grass {
  background: #78c850;
}

.ghost {
  background: #705898;
}

.ground {
  background: #e0c068;
}

.ice {
  background: #98d8d8;
}

.normal {
  background: #a8a878;
}

.poison {
  background: #a040a0;
}

.psychic {
  background: #f85888;
}

.physical {
  background: #d96358;
}

.rock {
  background: #b8a038;
}

.steel {
  background: #b8b8d0;
}

.water {
  background: #6890f0;
}
</style>
