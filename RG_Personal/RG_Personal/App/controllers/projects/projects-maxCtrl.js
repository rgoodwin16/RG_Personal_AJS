'use strict'
angular.module('rg_personal').controller('projects-maxCtrl',['$state', function ($state){
    var self = this;
    this.$state = $state;
    this.model = {};
    this.results = [];

    this.add = function (a, b) {
        return a + Math.round(b);
    }

    this.calculate = function (model) {
        var arr = [self.model.num1, self.model.num2, self.model.num3, self.model.num4, self.model.num5];
        if (isNaN(Math.max(self.model.num1, self.model.num2, self.model.num3, self.model.num4, self.model.num5)) ||
            isNaN(arr.reduce(self.add, 0)) ||
            isNaN(self.model.num1 * self.model.num2 * self.model.num3 * self.model.num4 * self.model.num5) ) {
            self.results.push('Please enter a number.');
        } else {
            self.results.push("The largest number is: " + Math.max(self.model.num1, self.model.num2, self.model.num3, self.model.num4, self.model.num5)); 
            self.results.push("The sum of the numbers is: " + arr.reduce(self.add, 0));
            self.results.push("The product of the numbers is: " + (self.model.num1 * self.model.num2 * self.model.num3 * self.model.num4 * self.model.num5));
        }
    }

}])