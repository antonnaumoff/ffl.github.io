'use strict';

import {default as AboutController} from './about.controller';
import angular from 'npm/angular';

export default angular
    .module('app.about', [])
    .controller('AboutController', AboutController)