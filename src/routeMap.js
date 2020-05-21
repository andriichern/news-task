import HomePage from './components/pages/HomePage';
import GridPage from './components/pages/GridPage';
import ListPage from './components/pages/ListPage';

export default [
  {
    path: '/articles',
    exact: true,
    component: HomePage,
    title: 'Home',
    show: false,
  },
  {
    path: '/articles/grid',
    exact: false,
    component: GridPage,
    title: 'Articles Grid',
    show: true,
  },
  {
    path: '/articles/list',
    exact: false,
    component: ListPage,
    title: 'Articles List',
    show: true,
  },
];
