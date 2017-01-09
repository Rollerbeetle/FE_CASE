import controller from './listView.controller';


/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider
  .state('listView', {
    url: '/',
    template: require('./listView.tpl.html'),
    controller: controller.UID,
    controllerAs: 'vm'
  });
}
