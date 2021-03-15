import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon";

console.log('Configurações carregadas com sucesso.');