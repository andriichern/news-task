import HomePage from './components/pages/HomePage';
import GridPage from './components/pages/GridPage';
import ListPage from './components/pages/ListPage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
    title: 'Home',
  },
  {
    path: '/grid',
    exact: false,
    component: GridPage,
    title: 'Articles Grid',
  },
  {
    path: '/list',
    exact: false,
    component: ListPage,
    title: 'Articles List',
  },
];
