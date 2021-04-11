export default class PokemonService {
  constructor(axios) {
    this.axios = axios;
  }

  list() {
    return this.axios
      .get("?limit=649&offset=0")
      .then(res =>
        res.data.results.map((pokemon, index) => {
          pokemon.id = index + 1;
          pokemon.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

          this.searchDetail(pokemon.id).then(res => {
            pokemon.types = res.types;
            pokemon.stats = res.stats;
            return pokemon;
          });

          return pokemon;
        })
      )
      .catch(err => {
        console.error(err);
        throw new Error(
          "Não foi possível obter informações sobres os Pokemons. Tente novamente mais tarde!"
        );
      });
  }

  searchDetail(id) {
    return this.axios
      .get(`/${id}`)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw new Error(
          `Não foi possível obter informações sobre o Pokemon com ID ou Nome: ${id}. Tente novamente mais tarde!`
        );
      });
  }
}
