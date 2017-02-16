'use strict';

// vendor module imports
require('npm/bootstrap/dist/css/bootstrap.css');
import angular from 'npm/angular';
import formly from 'npm/angular-formly';
import formlyBootstrap from 'npm/angular-formly-templates-bootstrap';
import ngAria from 'npm/angular-aria';
import uiRouter from 'npm/angular-ui-router';

// custom module imports
import {default as AppConfig} from './app.config';
import {default as HomeModule} from './components/home/home.module';
import {default as AboutModule} from './components/about/about.module';
import {default as NewsModule} from './components/news/news.module';
import {default as ReportsModule} from './components/reports/reports.module';
import {default as HelpModule} from './components/help/help.module';
import {default as routing} from './routing'

angular
	.module('app', [
		// vendor modules
		ngAria,
		uiRouter,
		formly,
		formlyBootstrap,
		
		// custom modules
		HomeModule.name,
		AboutModule.name,
        NewsModule.name,
        ReportsModule.name,
        HelpModule.name

	])
	.config(AppConfig.disableDebugInfo)
	.config(['$stateProvider', '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => routing($stateProvider, $urlRouterProvider)]);
