
import controller from './wine.controller';
import template from './wine.tpl.html';


export default {
  name: 'wine',
  controller,
  controllerAs: 'vm',
  template,
  bindings: {
    wine: '<'
  }
};
