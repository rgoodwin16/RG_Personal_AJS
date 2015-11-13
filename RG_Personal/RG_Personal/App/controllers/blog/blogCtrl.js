'use strict'
angular.module('rg_personal').controller('blogCtrl', ['$state', function ($state) {
    var self = this;
    this.$state = $state;
    this.categories = ['Personal', 'Professional'];
}])