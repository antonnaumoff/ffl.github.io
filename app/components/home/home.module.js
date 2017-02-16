'use strict';

import {default as HomeController} from './home.controller';
import angular from 'npm/angular';

export default angular
    .module('app.home', [])
    .controller('HomeController', HomeController)