import { lazy, LazyExoticComponent, ReactNode } from 'react';

import Paths from '../constants/path';

const Home = lazy(() => import(/* webpackChunkName: "pages/home" */ '../pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "pages/test-page" */ '../pages/About'));
const NotFound = lazy(() => import(/* webpackChunkName: "pages/not-found" */ '../pages/NotFound'));

type TRoute = {
  name: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  Fallback: ReactNode | null;
};

const routes = [
  {
    name: 'home',
    path: Paths.HOME,
    Component: Home,
    Fallback: null,
  },
  {
    name: 'about',
    path: Paths.ABOUT,
    Component: About,
    Fallback: null,
  },
  {
    name: 'projects',
    path: Paths.PROJECTS,
    Component: About,
    Fallback: null,
  },
  {
    name: 'contact',
    path: Paths.CONTACT,
    Component: About,
    Fallback: null,
  },
  {
    name: 'blog',
    path: Paths.BLOG,
    Component: About,
    Fallback: null,
  },
  {
    name: 'not-found',
    path: Paths.NOT_FOUND,
    Component: NotFound,
    Fallback: null,
  },
] as TRoute[];

export default routes;
