'use strict';

import {default as NewsController} from './news.controller';
import angular from 'npm/angular';

export default angular
    .module('app.news', [])
    .controller('NewsController', NewsController)