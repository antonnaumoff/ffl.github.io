'use strict';

import {default as ReportsController} from './reports.controller';
import angular from 'npm/angular';

export default angular
    .module('app.reports', [])
    .controller('ReportsController', ReportsController)