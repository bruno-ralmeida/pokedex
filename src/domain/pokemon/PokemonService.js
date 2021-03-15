export default class PokemonService {
  constructor(axios) {
    this.axios = axios;
    
  }

  list() {
    return this.axios
      .get('?limit=649&offset=0')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        throw new Error(
          "Não foi possível obter informações sobres os Pokemons. Tente novamente mais tarde!"
        );
      });
  }

  search(idOrName) {
    return this.axios
    .get(`/${idOrName}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw new Error(
        `Não foi possível obter informações sobre o Pokemon com ID ou Nome: ${idOrName}. Tente novamente mais tarde!`
      );
    });
  }
}
