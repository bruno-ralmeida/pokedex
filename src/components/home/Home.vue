<template>
  <div class="home">
    <menu-default
      class="menu"
      v-on:input.native="filterName = $event.target.value"
    />
    <main class="main">
      <section class="pokemon__description">
        <h2>Pokémon</h2>
        <p>
          Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak
          e publicados pela Nintendo como parte da franquia de mídia Pokémon.
          Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a
          principal série de jogos de RPGs, que continuou em cada geração em
          portáteis da Nintendo.
        </p>
      </section>
      <aside class="pokemon__image">
        <image-responsive :url="pokemon.imageURL" :title="pokemon.name" />
      </aside>
    </main>
    <div class="pokemons__details" v-show="divStatus">
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
      pokemon: "",
      filterName: "",
      visible: false,
    };
  },
  beforeCreate() {
    const pokemonService = new PokemonService(this.axios);
    pokemonService
      .list()
      .then((res) => {
        this.pokemons = res;
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

    divStatus() {
      this.visible = this.filterName.trim() && this.searchPokeName.length > 0;
      if (this.visible) this.scrollToTop();
      return this.visible;
    },
  },
  methods: {
    pokemonRandom() {
      const id = Math.floor(Math.random() * 50);
      return (this.pokemon = this.pokemons[id]);
    },
    scrollToTop() {
      let el = this.$children[2].$el;
      if (el) {
        setTimeout(function () {
          el.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    },
  },
};
</script>

<style>

.pokemon__description > h2 {
  font-size: 38px;
  margin: 0.5em 0;
}

.pokemon__description > p {
  font-size: 18px;
}

.pokemon__description {
  max-width: 30vw;
  text-align: justify;
}

.pokemon__image {
  width: 100%;
  height: 100%;
}
.pokemons__details {
  grid-area: search;
}
.main {
  align-items: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  padding: 0 .5em;
  grid-area: main;
}

.menu {
  grid-area: menu;
}

.home {
  display: grid;
  grid-template-rows: 8vh 92vh auto;
  grid-template-areas:
    "menu"
    "main"
    "search";
}

@media only screen and (max-width: 800px) {
  .home {
    grid-template-rows: 10vh auto auto;
  }
  .main {
    flex-direction: column-reverse;

  }
  .pokemon__description,
  .pokemon__image {
    max-width: 98vw;
  }
}
</style>
