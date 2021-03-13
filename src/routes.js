import Home from './components/home/Home';
import Detail from './components/detail/Detail';

export const routes = [
  { path: '/', component: Home , name: 'home'},
  { path: '/search', component: Detail, name: 'detail'}
]