const homeTemplate = require('./components/home/home.html');
const aboutTemplate = require('./components/about/about.html');
const newsTemplate = require('./components/news/news.html');
const reportsTemplate = require('./components/reports/reports.html');
const helpTemplate = require('./components/help/help.html');

const routing = ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise("/news");

    $stateProvider
        .state('home', {
            abstract: true,
            templateUrl: homeTemplate
        })
        .state('home.about', {
            url: "/about",
            templateUrl: aboutTemplate,
            controller: 'AboutController as about'
        })
        .state('home.news', {
            url: "/news",
            templateUrl: newsTemplate,
            controller: 'NewsController as news'
        })
        .state('home.reports', {
            url: "/reports",
            templateUrl: reportsTemplate,
            controller: 'ReportsController as reports'
        })
        .state('home.help', {
            url: "/helpUs",
            templateUrl: helpTemplate,
            controller: 'HelpController as help'
        })
};

export default routing;