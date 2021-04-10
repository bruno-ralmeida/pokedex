<template>
  <section class="card_main">
    <section class="card_name">
      <p>#{{ idFormated }}</p>
      <span>{{ pokemon.name }} </span>
    </section>
    <Stats :pokemon="pokemon" />
  </section>
</template>

<script>
import CardStats from "./CardStats";

export default {
  props: ["pokemon"],
  components: {
    Stats: CardStats
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    idFormated() {
      return this.pokemon.id.toString().padStart(3, "0");
    }
  }
};
</script>

<style scoped>
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
</style>
