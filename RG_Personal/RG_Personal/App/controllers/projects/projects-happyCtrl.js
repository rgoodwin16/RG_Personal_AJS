'use strict';
angular.module('rg_personal').controller('projects-happyCtrl',['$state', function ($state){
    var self = this;
    this.$state = $state;
    this.results = [];

    this.isHappy = function (n) {
        var arr = [];
        var newNum = 0;
        //Ok split the number into a string then into an array
        var num = n.toString().split("");
        for (var i = 0; i < num.length; i++) {
            arr[i] = parseInt(num[i], 10);
        }
        //Ok square the numbers and add them to newNum
        for (var i = 0; i < arr.length; i++) {
            newNum += Math.pow(arr[i], 2);
        }
        //And here is a quick check to stop from hitting an endless loop
        if (newNum === 58 || newNum === 4 || newNum === 37) {
            return false;
        }
        if (newNum === 1) {
            return true;
        } else {
            return self.isHappy(newNum);
        }
    }

    this.calculate = function () {
        for (var j = 1; j < 20; j++) {
            if (self.isHappy(j)) {
                self.results.push(j + " is a Happy Number.");
            }
        }
    }
}])