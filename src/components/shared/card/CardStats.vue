<template>
  <section class="card_stats">
    <input type="checkbox" :id="pokemonId" />
    <label :for="pokemonId" id="lblDown">
      <svg
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
    </label>
    <label :for="pokemonId" id="lblUp">
      <svg
        svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
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
          <g fill="#333333">
            <path
              d="M85.91042,51.6c-1.48937,0.02375 -2.91104,0.62615 -3.96406,1.67969l-57.33333,57.33333c-1.49776,1.43802 -2.1011,3.57339 -1.57731,5.58258c0.52378,2.00919 2.09283,3.57824 4.10202,4.10202c2.00919,0.52378 4.14456,-0.07955 5.58258,-1.57732l53.27969,-53.27969l53.27969,53.27969c1.43802,1.49778 3.5734,2.10113 5.5826,1.57735c2.0092,-0.52378 3.57826,-2.09284 4.10204,-4.10204c0.52378,-2.0092 -0.07957,-4.14458 -1.57735,-5.5826l-57.33333,-57.33333c-1.09692,-1.09743 -2.59177,-1.70345 -4.14323,-1.67969z"
            ></path>
          </g>
        </g>
      </svg>
    </label>
    <section class="card_stats__content">
      <ul>
        <li
          class="stats_item"
          v-for="stat of pokemon.stats"
          :key="stat.stat.name"
        >
          <h3>{{ stat.stat.name }}</h3>
          <p>{{ stat.base_stat }}</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import Up from "../../../assets/images/up.svg";
import Down from "../../../assets/images/down.svg";

export default {
  props: ["pokemon"],
  components: {
    "arrow-up": Up,
    "arrow-down": Down
  },
  computed: {
    pokemonId() {
      return `stats${this.pokemon.id}`;
    }
  }
};
</script>

<style scoped>
.card_stats {
  text-align: center;
  margin-top: 0.25em;
}

.card_stats input,
#lblUp {
  display: none;
}

.card_stats label {
  cursor: pointer;
}

[id^="stats"]:checked ~ .card_stats__content {
  height: 180px;
  width: 100%;
  border-radius: 20px;
  background: #fefefe80;
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
  transition: 0.2s ease-in;
  overflow: hidden;
}

.card_stats__content ul {
  list-style: none;
  margin: 0.5em;
}

.stats_item {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  padding: 0.2em;
  margin: 0.25em 0.2em;
}

.stats_item > h3 {
  font-family: Haettenschweiler, "Narrow Bold", sans-serif;
  color: #3d3d3d;
  font-weight: 700;
}

.stats_item > p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  color: #3c3c3c;
}
</style>
