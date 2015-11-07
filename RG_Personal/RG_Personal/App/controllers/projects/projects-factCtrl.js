'use strict';
angular.module('rg_personal').controller('projects-factCtrl', ['$state', function ($state) {
    var self = this;
    this.$state = $state;
    this.model = {};
    this.result = '';

    this.factorial = function(n){
        if (isNaN(n) || n < 1) {
            self.result = 'Please enter a positive interger.';
        }

        if (n === 1) {
            return 1;
        }

        return n * self.factorial(n -1);
    }

    this.calculate = function (model) {
        self.result = "The factorial of " + self.model.num +" is: "+  self.factorial(self.model.num);
    }

}])