const homeTemplate = require('./components/home/home.html');
const aboutTemplate = require('./components/about/about.html');
const newsTemplate = require('./components/news/news.html');
const reportsTemplate = require('./components/reports/reports.html');
const helpTemplate = require('./components/help/help.html');

const routing = ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise("/news");

    $stateProvider
        .state('home', {
            templateUrl: homeTemplate,
            controller: "HomeController as home"
        })
        .state('home.about', {
            parent: 'home',
            url: "/about",
            templateUrl: aboutTemplate,
            controller: 'AboutController as about'
        })
        .state('home.news', {
            parent: 'home',
            url: "/news",
            templateUrl: newsTemplate,
            controller: 'NewsController as news'
        })
        .state('home.reports', {
            parent: 'home',
            url: "/reports",
            templateUrl: reportsTemplate,
            controller: 'ReportsController as reports'
        })
        .state('home.help', {
            parent: 'home',
            url: "/helpUs",
            templateUrl: helpTemplate,
            controller: 'HelpController as help'
        })
};

export default routing;