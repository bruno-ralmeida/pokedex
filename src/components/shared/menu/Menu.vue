<template>
  <nav>
    <img src="/static/images/logo.png" alt="Logo Pokémon" />
    <input
      type="search"
      class="input_search"
      placeholder="Search"
      autocomplete="true"
    />
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
   background: #fefefe
    linear-gradient(45deg, #fefefe 50%, #ff0000, #d30000 50.1%) no-repeat fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 0 .5em;
  top: 0;
  z-index: 100;
  width: auto;
}

nav > img {
  height: 50px;
  width: auto;
}

nav > input {
  border-radius: 20px;
  width: 140px;
  transition: 0.2s ease-in;
  border: 1px solid #86868641;
  padding: 0 0.5em;
  height: 30px;
}

input:focus {
  width: 220px;
  transition: 0.25s ease-out;
  outline: none;
}
</style>