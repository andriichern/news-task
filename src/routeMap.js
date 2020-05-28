import { lazy } from 'react';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const GridPage = lazy(() => import('./components/pages/GridPage'));
const ListPage = lazy(() => import('./components/pages/ListPage'));

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
