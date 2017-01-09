// Import Style
import './addDialog.scss';

// Import controller
import controller from './addDialog.controller';


export default angular.module('addDialog', [])
  .controller(controller.name, controller)
  .name;
