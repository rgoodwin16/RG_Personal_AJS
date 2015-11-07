'use strict'
angular.module('rg_personal').controller('projectsCtrl',['$state',function($state){
    var self = this;
    this.$state = $state;
    this.projects = ["projects.max",
                     "projects.factorial",
                     "projects.perfect",
                     "projects.happy",
                     "projects.armstrong",
                     "projects.palindrome",
                     "projects.fizzbuzz",
                     "projects.longest",
                     "projects.search",
                     "projects.filter",
                     "projects.frequency",
                     "projects.bugtracker",
                     "projects.carfinder",
                     "projects.budgetplanner"];

    this.nextProject = function (name) {
        $state.go(self.projects[self.projects.indexOf(name) + 1])
    }

    this.prevProject = function (name) {
        $state.go(self.projects[self.projects.indexOf(name) - 1])
    }

}])