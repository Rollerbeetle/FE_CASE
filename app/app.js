import 'angular-material/angular-material.css';
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

import listViewFeature from './features/listView';

import wineComponent from './components/wine';
import addDialogComponent from './components/addDialog';

import routes from  './app.routes';


export default angular.module('app', [
    uirouter,
    ngMaterial,
    ngAnimate,
    ngAria,

    listViewFeature,

    wineComponent,
    addDialogComponent
  ])
  .config(routes)
  .name
