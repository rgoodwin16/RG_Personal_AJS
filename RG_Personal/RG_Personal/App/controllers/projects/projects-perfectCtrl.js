'use strict';
angular.module('rg_personal').controller('projects-perfectCtrl',['$state', function ($state){
    var self = this;
    this.$state = $state;
    this.result = [];

    this.isPerfect = function (n) {
        var temp = 0;
        for (var i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                temp += i;
            }
        }
        if (temp === n) {
            return true;

        } else {
            return false;

        }
    }

    this.calculate = function () {
        for (var j = 0; j < 10000; j++) {
            if (self.isPerfect(j)) {
                self.result.push(j + " is a Perfect Number.");
            }
        }
    }
}])