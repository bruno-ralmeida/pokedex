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
        <span
          class="rounded"
          :class="pokemon.types[0].type.name || 'normal'"
        ></span>
        <poke-image :url="pokemon.imageURL" :title="pokemon.name" />
      </div>
    </div>
    <div class="card_main">
      <div class="card_name">
        <p>#{{ idFormated }}</p>
        <span>{{ pokemon.name }} </span>
      </div>
      <div class="card_url">
        <svg
          @dblclick="visible = !visible"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 172 172"
          style="fill: #000000"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#000000">
              <path
                d="M123.49063,63.02188l-37.49063,37.49063l-37.49062,-37.49062c-1.6125,-1.6125 -4.16562,-1.6125 -5.64375,0c-1.6125,1.6125 -1.6125,4.16562 0,5.64375l40.3125,40.3125c0.80625,0.80625 1.88125,1.20938 2.82187,1.20938c0.94062,0 2.01563,-0.40313 2.82187,-1.20938l40.3125,-40.3125c1.6125,-1.6125 1.6125,-4.16563 0,-5.64375c-1.6125,-1.6125 -4.03125,-1.6125 -5.64375,0z"
              ></path>
            </g>
          </g>
        </svg>

        <transition name="card_fade">
          <ul v-show="visible" v-for="stat of pokemon.stats">
            <li>{{ stat.stat.name }} - {{ stat.base_stat }}</li>
          </ul>
        </transition>
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
  },
  methods: {
    teste() {
      alert("Aqui");
    },
  },
};
</script>

<style scoped>
.normal {
  background: #C6C6A7;
}
.fire {
  background: #F5AC78;
}
.water {
  background: #9DB7F5;
}
.grass {
  background: #A7DB8D;
}
.electric {
  background: #FAE078
}
.ice {
  background: #BCE6E6;
}
.poison {
  background: #C183C1;
}
.fairy {
  background: #FABDC9;
}
.psychic {
 background: #FA92B2;
}
.physical {
  background: #d96358;
}
.fighting {
  background: #D67873;
}
.ground {
  background: #EBD69D;
}
.rock {
  background: #D1C17D;
}
.bug {
  background: #C6D16E;
}
.flying {
  background: #C6B7F5;
}
.ghost {
  background: #A292BC;
}
.dragon {
  background: #A27DFA
}
.steel {
  background: #D1D1E0;
}
.dark {
  background: #A29288
}

.special {
  background: #83899a;
}

.status {
  background: #aeabae;
}

.typeless {
  background: #9DC1B7;
}

.menu {
  grid-area: menu;
  position: sticky;
}

.card {
  background: whitesmoke;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 400px;
  margin: 1em 0.5em;
  width: 300px;
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
.card_type {
  grid-area: types;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: flex-start;
}
.card_type > ul {
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 100px;
  text-align: center;
  text-transform: capitalize;
  list-style: none;
  color: white;
  text-shadow: -2px 0px 2px #000000cc;
}
.card_header > .card_image {
  grid-area: image;
}

.card_header {
  border-radius: 20px;
  display: grid;
  margin: 0.5em;
  align-items: center;
  grid-template-columns: 1fr 70%;
  grid-template-rows: auto;
  grid-template-areas: "types image";
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 99;
}
.card_main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.card_name {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  font-size: 36px;
}

.card_name > p {
  font-size: 18px;
  background: #9c530070;
  padding: 0.325em;
  margin: 0.5em;
  border-radius: 50%;
  align-self: flex-end;
}

.card_url {
  align-self: center;
}

.card_fade-enter,
.card_fade-leave-active {
  opacity: 0;
}

.card_fade-enter-active,
.card_fade-leave-active {
  transition: opacity 0.5s;
}
</style>