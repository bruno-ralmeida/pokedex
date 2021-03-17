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
    linear-gradient(45deg, #fefefe 50%, #ff0000, #CC0000 50.1%) no-repeat fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  width: auto;
}

img, input {
  margin: 0 .25em;
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

@media only screen and (max-width: 800px) {
  nav > img {
    height: 30px;
    width: auto;
  }
  input:focus {
    width: 140px;
  }
}
</style>