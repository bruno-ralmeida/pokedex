<template>
  <div class="main">
    <menu-default class="menu" />
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
      <image-responsive
        :url="mainPokemon.sprites.other.dream_world.front_default"
        :title="mainPokemon.name"
      />
    </div>
  </div>
</template>

<script>
import Menu from "../shared/menu/Menu";
import PokemonService from "../../domain/pokemon/PokemonService";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";

export default {
  components: {
    "menu-default": Menu,
    "image-responsive": ImageResponsive,
  },
  data() {
    return {
      pokemons: [],
      pokemonService: new PokemonService(this.axios),
      mainPokemon: "",
    };
  },

  created() {
    this.pokemonService
      .list()
      .then((res) => {
        this.pokemons = res.results;
        let id = Math.floor(Math.random() * 150);
        this.searchMainPokemon(id);
      })
      .catch((err) => console.error(err));
  },
  methods: {
    searchMainPokemon(id) {
      this.pokemonService
        .search(id)
        .then((res) => {
          this.mainPokemon = res;
          console.log('==========')
          console.log(res);
        })
        .catch((err) => console.err(err));
    },
  },
};
</script>

<style>
body {
  background: #ffffff;
  background: linear-gradient(
    240deg,
    #ff0000,
    #d30000 50%,
    #fefefe 50.1%
  );
  background-attachment: fixed;
}
.menu {
  grid-area: header;
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

.main {
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "header header"
    "description image";
}

.pokemon__description > h2,
p {
  font-family: "Fredoka One", cursive;
}
.pokemon__description > h2 {
  font-size: 42px;
  color: #ffdf0c;
  text-shadow: #055cbeda -5px -2px;
}

.pokemon__description > p {
  font-size: 18px;
}
</style>>
