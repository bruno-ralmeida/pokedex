export default class PokemonService {
  constructor(axios) {
    this.axios = axios;
    
  }

  list() {
    return this.axios
      .get('?limit=1118&offset=0')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        throw new Error(
          "Não foi possível obter informações sobres os Pokemons. Tente novamente mais tarde!"
        );
      });
  }

  search(id) {
    return this.axios
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw new Error(
        `Não foi possível obter informações sobre o Pokemon com ID: ${id}. Tente novamente mais tarde!`
      );
    });
  }
}
