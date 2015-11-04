var app = angular.module('rg_personal', ['ui.router', 'ui.bootstrap','LocalStorageModule']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    //For any unmatched url, redirect to state1
    $urlRouterProvider.otherwise("/home");
    //Now set up the states
    $stateProvider

////=================================================================================//

    //HOME STATE
    .state('home', {
        url: "",
        templateUrl: "/app/templates/home/home.html",
        controller: "homeCtrl as home"
    })

    //ABOUT STATE
    .state('about', {
        url: "/about",
        templateUrl: "app/templates/about/about.html",
        controller:"aboutCtrl as about"
    })

    //PORTFOLIO STATE
    .state('portfolio', {
        url: "/portfolio",
        templateUrl: "app/templates/portfolio/portfolio.html",
        controller:"portfolioCtrl as portfolio"
    })

    //CONTACT STATE
    .state('contact', {
        url: "/contact",
        templateUrl:"app/templates/contact/contact.html"
    })
////=================================================================================//

    //LOGIN STATES
    .state('login', {
        url: "/login",
        templateUrl: "/app/templates/login/login.html",
        abstract: true,
        controller: "loginCtrl as user"
    })

    .state('login.signin', {
        params: { 'isNew': false },
        url: "",
        templateUrl: "/app/templates/login/login.signin.html",
        controller: "loginCtrl as user"
    })

    .state('login.register', {
        url: "/register",
        templateUrl: "/app/templates/login/login.register.html",
        controller: "registerCtrl as register"
    })

});

var serviceBase = 'http://localhost:54163/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorSvc');
});

app.run(['$rootScope', '$state', '$stateParams', 'authSvc', function ($rootScope, $state, $stateParams, authService) {
    $rootScope.$state = $state;
    $rootScope.$state.$stateParams = $stateParams;
    authService.fillAuthData();

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromParams) {
        console.log('state change')

        if (toState.data) {
            if (!authService.authenication.isAuth) {
                $state.go('login');
            }
        }
    });
}]);