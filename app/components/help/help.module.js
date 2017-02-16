'use strict';

import {default as HelpController} from './help.controller';
import angular from 'npm/angular';

export default angular
    .module('app.help', [])
    .controller('HelpController', HelpController)