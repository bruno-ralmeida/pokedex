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
      <image-responsive :url="imagePokemon" :title="pokemon.name" />
    </div>
    <div class="pokemons__details" v-show="(filterName) && (searchPokeName.length > 0)">
      <pokemon-details :pokemons="searchPokeName"/>
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
      imagePokemon: "",
      filterName: "",
    };
  },
  created() {
    this.pokemonService
      .list()
      .then((res) => {
        this.pokemons = res.results;
        let id = Math.floor(Math.random() * 24);
        this.pokemon = this.pokemons[id];
        this.imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`;
      })
      .catch((err) => console.error(err));
  },
  computed: {
    searchPokeName() {
      let exp = new RegExp(this.filterName.trim(), "i");
      let pokemonsFilter = this.pokemons.filter((poke, index) =>{
        if(exp.test(poke.name)){
          let pokemon = poke;
          pokemon.id = index+1;
          return pokemon;
        }
      });

      return pokemonsFilter;
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

.pokemon__description > h2,
p {
  font-family: "Fredoka One", cursive;
}
.pokemon__description > h2 {
  font-size: 42px;
  color: #ffdf0c;
  text-shadow: -4px 2px 2px #386abb;
}

.pokemon__description > p {
  font-size: 18px;
}

</style>>
