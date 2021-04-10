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
    linear-gradient(45deg, #fefefe 50%, #ff0000, #cc0000 50.1%) no-repeat fixed;
  box-shadow: 0px 0px 10px #44475a83;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5em;
  position: sticky;
  top: 0;
  width: auto;
  z-index: 100;
}

img,
input {
  margin: 0 0.25em;
}

nav > img {
  height: 50px;
  width: auto;
}

nav > input {
  border-radius: 20px;
  border: 1px solid #86868641;
  height: 30px;
  padding: 0 1em;
  transition: 0.2s ease-in;
  width: 140px;
}

input:focus {
  outline: none;
  transition: 0.25s ease-out;
  width: 220px;
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
