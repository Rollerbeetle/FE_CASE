//Import Style
import './listView.scss';

//Import external modules
import uirouter from 'angular-ui-router'

//import internal modules
import routes from './listView.routes.js'
import controller from './listView.controller'

export default angular.module('listView', [uirouter])
.controller(controller.UID, controller)
.config(routes)
.name
