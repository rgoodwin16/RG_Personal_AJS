'use strict'
angular.module('rg_personal').controller('aboutCtrl', ['$state', function ($state) {
    var self = this;
    this.$state = $state;
    this.skills = 'front';

    this.frontEnd = function (){
        self.skills = 'front';
    }

    this.backEnd = function () {
        self.skills = 'back';
    }
}])