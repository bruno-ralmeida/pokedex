<template>
  <div class="main">
    <menu-default
      class="menu"
      v-on:input.native="filterName = $event.target.value"
    />
    <div class="pokemon__description">
      <h2>Pokémon</h2>
      <p>
        Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e
        publicados pela Nintendo como parte da franquia de mídia Pokémon.
        Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a
        principal série de jogos de RPGs, que continuou em cada geração em
        portáteis da Nintendo.
      </p>
    </div>
    <div class="pokemon__image">
      <image-responsive :url="pokemon.imageURL" :title="pokemon.name" />
    </div>
    <div
      class="pokemons__details"
      v-show="filterName.trim() && searchPokeName.length > 0"
    >
      <pokemon-details :pokemons="searchPokeName" />
    </div>
  </div>
</template>

<script>
import Menu from "../shared/menu/Menu";
import PokemonService from "../../domain/pokemon/PokemonService";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Details from "../details/Details";

export default {
  components: {
    "menu-default": Menu,
    "image-responsive": ImageResponsive,
    "pokemon-details": Details,
  },
  data() {
    return {
      pokemons: [],
      pokemonService: new PokemonService(this.axios),
      pokemon: "",
      filterName: "",
    };
  },
  created() {
    this.pokemonService
      .list()
      .then((res) => {
        this.pokemons = res.map((poke) => {
          this.pokemonService.search(poke.id).then((res) => {
            poke.types = res.types
            return poke;
          });
          return poke;
        });
        this.pokemonRandom();
      })
      .catch((err) => console.error(err));
  },
  computed: {
    searchPokeName() {
      if (!this.filterName.trim() > 0) return [];
      let exp = new RegExp(this.filterName.trim(), "i");
      return this.pokemons.filter((pokemon) => exp.test(pokemon.name));
    },
  },
  methods: {
    pokemonRandom() {
      const id = Math.floor(Math.random() * 150);
      return (this.pokemon = this.pokemons[id]);
    },
  },
};
</script>

<style>
body {
  background: #fefefe
    linear-gradient(45deg, #fefefe 50%, #ff0000, #d30000 50.1%);
  background-attachment: fixed;
}
.menu {
  grid-area: header;
  position: sticky;
}

.pokemon__description {
  grid-area: description;
  padding: 0 2em;
  text-align: justify;
}

.pokemon__image {
  grid-area: image;
}
.pokemon__image > span {
  text-transform: capitalize;
}

.pokemons__details {
  grid-area: poke;
}

.main {
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "header header"
    "description image"
    "poke poke";
}

.pokemon__description > p {
  font-size: 18px;
}

h2 {
  font-family: "Fredoka One", cursive;
  font-size: 42px;
  color: #ffdf0c;
  text-shadow: -4px 1px 2px #386abb;
  margin: 0.5em 0;
}
</style>>
