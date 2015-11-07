'use strict'
angular.module('rg_personal').controller('projects-maxCtrl',['$state', function ($state){
    var self = this;
    this.$state = $state;
    this.model = {};
    this.largest = '';
    this.sum = '';
    this.product = '';
    this.error = null;

    this.reset = function () {
        $state.go($state.current, null, { reload: true });
    }

    this.add = function (a, b) {
        return a + Math.round(b);
    }

    this.calculate = function (model) {
        var arr = [self.model.num1, self.model.num2, self.model.num3, self.model.num4, self.model.num5];
        if (isNaN(Math.max(self.model.num1, self.model.num2, self.model.num3, self.model.num4, self.model.num5)) ||
            isNaN(arr.reduce(self.add, 0)) ||
            isNaN(self.model.num1 * self.model.num2 * self.model.num3 * self.model.num4 * self.model.num5) ) {
            self.error = 'Please enter a number.';
        } else {
            self.largest = Math.max(self.model.num1, self.model.num2, self.model.num3, self.model.num4, self.model.num5);
            self.sum = arr.reduce(self.add, 0);
            self.product = (self.model.num1 * self.model.num2 * self.model.num3 * self.model.num4 * self.model.num5);
        }
    }

}])