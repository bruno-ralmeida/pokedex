<template>
  <div class="card">
    <div class="card_header">
      <div class="card_type">
        <ul :class="types.type.name" v-for="types of pokemon.types">
          <li>
            {{ types.type.name }}
          </li>
        </ul>
      </div>
      <div class="card_image">
        <span class="rounded" :class="pokemonType || 'normal'"></span>
        <poke-image :url="pokemon.imageURL" :title="pokemon.name" />
      </div>
    </div>
    <div class="card_main">
      <div class="card_name">
        <p>#{{ idFormated }}</p>
        <span>{{ pokemon.name }} </span>
      </div>
      <div class="card_stats">
        <input type="checkbox" :id="pokemonId" />
        <label id="lblDown" :for="pokemonId"> 
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 172 172" style="fill: #000000"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" > <path d="M0,172v-172h172v172z" fill="none"></path> <g fill="#000000"> <path d="M123.49063,63.02188l-37.49063,37.49063l-37.49062,-37.49062c-1.6125,-1.6125 -4.16562,-1.6125 -5.64375,0c-1.6125,1.6125 -1.6125,4.16562 0,5.64375l40.3125,40.3125c0.80625,0.80625 1.88125,1.20938 2.82187,1.20938c0.94062,0 2.01563,-0.40313 2.82187,-1.20938l40.3125,-40.3125c1.6125,-1.6125 1.6125,-4.16563 0,-5.64375c-1.6125,-1.6125 -4.03125,-1.6125 -5.64375,0z" ></path> </g> </g> </svg>
        </label>
        <label :for="pokemonId" id="lblUp"> 
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M85.91042,51.6c-1.48937,0.02375 -2.91104,0.62615 -3.96406,1.67969l-57.33333,57.33333c-1.49776,1.43802 -2.1011,3.57339 -1.57731,5.58258c0.52378,2.00919 2.09283,3.57824 4.10202,4.10202c2.00919,0.52378 4.14456,-0.07955 5.58258,-1.57732l53.27969,-53.27969l53.27969,53.27969c1.43802,1.49778 3.5734,2.10113 5.5826,1.57735c2.0092,-0.52378 3.57826,-2.09284 4.10204,-4.10204c0.52378,-2.0092 -0.07957,-4.14458 -1.57735,-5.5826l-57.33333,-57.33333c-1.09692,-1.09743 -2.59177,-1.70345 -4.14323,-1.67969z"></path></g></g></svg>
        </label>
        <div class="card_stats__content">
          <ul v-for="stat of pokemon.stats" :key="stat.stat.name">
            <li>{{ stat.stat.name }} - {{ stat.base_stat }}</li>
          </ul>
          
        </div>
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
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    idFormated() {
      return this.pokemon.id.toString().padStart(3, "0");
    },
    pokemonType() {
      return this.pokemon.types[0].type.name;
    },
    pokemonId() {
      return `stats${this.pokemon.id}`;
    },
  },
};
</script>

<style scoped>
.card {
  background: whitesmoke;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  padding: 1em 0.5em;
  width: 350px;
}

.card_header > .card_type {
  grid-area: types;
}

.card_type > ul {
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

.card_main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card_name {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  font-size: 24px;
}

.card_name > p {
  font-size: 18px;
  background: #9c530070;
  padding: 0.325em;
  margin: 0.5em;
  border-radius: 50%;
  align-self: flex-end;
}

.card_stats {
  text-align: center;
}

.card_stats input,#lblUp {
  display: none;
}

.card_stats label {
  cursor: pointer;
}

[id^="stats"]:checked ~ .card_stats__content {
  height: 150px;
  transition: 0.2s ease-in;
}

[id^="stats"]:checked ~ #lblDown {
  display: none;
}

[id^="stats"]:checked ~ #lblUp {
  display: block;
}

.card_stats__content {
  height: 0;
  transition: 0.1s ease-out;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card_stats__content ul{
  list-style: none;
}

.card_stats__content li{
  text-transform: capitalize;
}


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

/* POKÉMONS TYPE COLORS */
.bug {
  background: #c6d16e;
}

.dark {
  background: #a29288;
}

.dragon {
  background: #a27dfa;
}

.electric {
  background: #fae078;
}

.fairy {
  background: #fabdc9;
}

.fighting {
  background: #d67873;
}

.fire {
  background: #f5ac78;
}

.flying {
  background: #c6b7f5;
}

.grass {
  background: #a7db8d;
}

.ghost {
  background: #a292bc;
}

.ground {
  background: #ebd69d;
}

.ice {
  background: #bce6e6;
}

.normal {
  background: #c6c6a7;
}

.poison {
  background: #c183c1;
}

.psychic {
  background: #fa92b2;
}

.physical {
  background: #d96358;
}

.rock {
  background: #d1c17d;
}

.steel {
  background: #d1d1e0;
}

.special {
  background: #83899a;
}

.status {
  background: #aeabae;
}

.typeless {
  background: #9dc1b7;
}

.water {
  background: #9db7f5;
}
</style>