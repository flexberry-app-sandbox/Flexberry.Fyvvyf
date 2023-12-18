import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fyvvyf-должность-l');
  this.route('i-i-s-fyvvyf-должность-e',
  { path: 'i-i-s-fyvvyf-должность-e/:id' });
  this.route('i-i-s-fyvvyf-должность-e.new',
  { path: 'i-i-s-fyvvyf-должность-e/new' });
  this.route('i-i-s-fyvvyf-отчет-о-сервере-l');
  this.route('i-i-s-fyvvyf-отчет-о-сервере-e',
  { path: 'i-i-s-fyvvyf-отчет-о-сервере-e/:id' });
  this.route('i-i-s-fyvvyf-отчет-о-сервере-e.new',
  { path: 'i-i-s-fyvvyf-отчет-о-сервере-e/new' });
  this.route('i-i-s-fyvvyf-расположение-l');
  this.route('i-i-s-fyvvyf-расположение-e',
  { path: 'i-i-s-fyvvyf-расположение-e/:id' });
  this.route('i-i-s-fyvvyf-расположение-e.new',
  { path: 'i-i-s-fyvvyf-расположение-e/new' });
  this.route('i-i-s-fyvvyf-сенсоры-l');
  this.route('i-i-s-fyvvyf-сенсоры-e',
  { path: 'i-i-s-fyvvyf-сенсоры-e/:id' });
  this.route('i-i-s-fyvvyf-сенсоры-e.new',
  { path: 'i-i-s-fyvvyf-сенсоры-e/new' });
  this.route('i-i-s-fyvvyf-серверная-l');
  this.route('i-i-s-fyvvyf-серверная-e',
  { path: 'i-i-s-fyvvyf-серверная-e/:id' });
  this.route('i-i-s-fyvvyf-серверная-e.new',
  { path: 'i-i-s-fyvvyf-серверная-e/new' });
  this.route('i-i-s-fyvvyf-сотрудник-l');
  this.route('i-i-s-fyvvyf-сотрудник-e',
  { path: 'i-i-s-fyvvyf-сотрудник-e/:id' });
  this.route('i-i-s-fyvvyf-сотрудник-e.new',
  { path: 'i-i-s-fyvvyf-сотрудник-e/new' });
});

export default Router;
