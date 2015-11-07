'use strict';
angular.module('rg_personal').controller('projects-fizzCtrl', function () {
    var self = this;
    this.results = [];

    this.calculate = function () {
        for (var i = 1; i<= 100; i++){
            if (i % 15 == 0) {
                self.results.push("FizzBuzz" + " ")
            } else if (i % 3 == 0) {
                self.results.push("Fizz" + " ")
            } else if (i % 5 == 0) {
                self.results.push("Buzz" + " ")
            } else {
                self.results.push(i + " ")
            }
        }
    }
})
