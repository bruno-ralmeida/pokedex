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
          <div v-show="visible">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            cupiditate officia architecto eveniet hic earum ab ad quae optio nam
            esse voluptatem, corporis totam rerum fugit temporibus id aspernatur
            tempore.
          </div>
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
  background: rgba(241, 241, 241, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}
.fire {
  background: rgba(255, 0, 0, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.water {
  background: rgba(0, 0, 255, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.grass {
  background: rgba(0, 128, 0, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.electric {
  background: rgba(255, 255, 0, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.ice {
  background: rgba(173, 216, 230, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.poison,
.fairy {
  background: rgba(255, 192, 203, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.psychic {
  background: rgba(128, 0, 128, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.fighting {
  background: rgba(139, 0, 0, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.ground {
  background: rgba(165, 42, 42, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.rock {
  background: rgba(128, 128, 128, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.bug {
  background: rgba(144, 238, 144, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.flying {
  background: rgba(0, 0, 128, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.ghost {
  background: rgba(230, 230, 250, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.dragon {
  background: rgba(255, 166, 0, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.steel {
  background: rgba(192, 192, 192, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.dark {
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
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
  font-weight: 400;
  text-shadow: 2px 1px black;
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
  background: pink;
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