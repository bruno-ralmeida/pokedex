<template>
  <nav>
    <img src="/static/images/logo.png" alt="Logo Pokémon" />
    <input
      v-on:input="searchPokemon = $event.target.value"
      type="search"
      class="input_search"
      placeholder="Search"
      autocomplete="true"
    />
  </nav>
</template>

<script>
export default {
  data(){
    return {
      searchPokemon: '',
    }
  },
  
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  margin: 1em .5em;
}

nav > img {
  height: 50px;
  width: auto;
}

nav > input {
  margin: 1em;
  border-radius: 20px;
  width: 140px;
  transition: 0.2s ease-in;
  border: 1px solid #86868641;
  padding: 0 .5em;
}

input:focus {
  width: 220px;
  transition: 0.25s ease-out;
  outline: none;
}
</style>