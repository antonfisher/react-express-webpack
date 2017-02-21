import App from './containers/App';
import LoginForm from './containers/LoginForm';
import NotFound from './containers/NotFound';

export default [
  {
    path: '/',
    name: 'home',
    component: App
  }, {
    path: '/login',
    name: 'login',
    component: LoginForm
  }, {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
];
