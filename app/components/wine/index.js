// Import Style
import './wine.scss';

// Import internal modules
import component from './wine.component';



export default angular.module('wine', [])
  .component(component.name, component)
  .name;
