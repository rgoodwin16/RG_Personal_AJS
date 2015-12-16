var app = angular.module('rg_personal', ['ui.router', 'ui.bootstrap','LocalStorageModule','hljs']);

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
        templateUrl:"app/templates/contact/contact.html",
        controller: "contactCtrl as contact"
    })

////=================================================================================//

    //BLOG STATES
    .state('blog',{
        url:"/blog",
        templateUrl: "app/templates/blog/blog.html",
        abstract: true,
        controller: "blogCtrl as blog",
        resolve: {
            posts: function (blogSvc) {
                return blogSvc.list();
            },
            categories: ['$http', function ($http) {
                return $http.post("api/Blog/Categories").then(function (response) {
                    return response.data;
                })
            }]
        }
    })

    .state('blog.list', {
        url: "",
        templateUrl: "app/templates/blog/blog.list.html",
        controller:"blog-listCtrl as list",
    })

    .state('blog.details', {
        url: "/:slug",
        templateUrl: "app/templates/blog/blog.details.html",
        controller: "blog-detailsCtrl as details",
        resolve: {
            blogpost: ['blogSvc', '$stateParams', function (blogSvc, $stateParams) {
                return blogSvc.details($stateParams.slug)
            }],
        }
    })

    .state('blog.admin',{
        url: "/admin",
        templateUrl: "app/templates/blog/blog.admin.html",
        controller: "blog-adminCtrl as admin",
        resolve: {
           role: ['$http','$state',function($http,$state){
                return $http.post("api/Blog/Check").then(function(response) {
                    return response.data;
                },function(error){
                    $state.go('login.signin', { needAuth: true });
                })
            }],
        }
    })
////=================================================================================//

    //PROJECT STATES
    .state('projects', {
        url: "/projects",
        templateUrl: "/app/templates/projects/projects.html",
        abstract: true,
        controller: "projectsCtrl as project"
    })

    .state('projects.max', {
        url: "/max",
        templateUrl: "/app/templates/projects/projects.max.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.factorial', {
        url: "/factorial",
        templateUrl: "/app/templates/projects/projects.factorial.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.perfect', {
        url: "/perfect",
        templateUrl: "/app/templates/projects/projects.perfect.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.happy', {
        url: "/happy",
        templateUrl: "/app/templates/projects/projects.happy.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.armstrong', {
        url: "/armstrong",
        templateUrl: "/app/templates/projects/projects.armstrong.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.palindrome', {
        url: "/palindrome",
        templateUrl: "/app/templates/projects/projects.palindrome.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.fizzbuzz', {
        url: "/fizzbuzz",
        templateUrl: "/app/templates/projects/projects.fizzbuzz.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.longest', {
        url: "/projects/longest",
        templateUrl: "/app/templates/projects/projects.longest.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.search', {
        url: "/search",
        templateUrl: "/app/templates/projects/projects.search.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.filter', {
        url: "/filter",
        templateUrl: "/app/templates/projects/projects.filter.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.frequency', {
        url: "/frequency",
        templateUrl: "/app/templates/projects/projects.frequency.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.bugtracker', {
        url: "/bugtracker",
        templateUrl: "/app/templates/projects/projects.bugtracker.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.carfinder', {
        url: "/carfinder",
        templateUrl: "/app/templates/projects/projects.carfinder.html",
        controller: "projectsCtrl as project"
    })

    .state('projects.budgetplanner', {
        url: "/budgetplanner",
        templateUrl: "/app/templates/projects/projects.budgetplanner.html",
        controller: "projectsCtrl as project"
    })


////=================================================================================//

    .state('image-test',{
        url: "/image-test",
        templateUrl: "app/templates/images/image-test.html",
        controller: "imagesCtrl as image",
        resolve: {
            grants: ['$http', '$state', function ($http, $state) {
                return $http.post("api/Images/List").then(function (response) {
                    return response.data;
                })
            }]
        }
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
        params: { 'isNew': false, 'needAuth':false },
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


    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromParams,$http) {
        console.log('state change')

    
    });
}]);