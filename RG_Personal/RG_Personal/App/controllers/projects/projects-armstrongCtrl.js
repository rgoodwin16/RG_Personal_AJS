'use strict';
angular.module('rg_personal').controller('projects-armstrongCtrl',function(){
    var self = this;
    this.results = [];

    this.isArmstrong = function (n) {
        var arr = [];
        var newNum = 0;
        //Take n and split the digits into single numbers
        var num = n.toString().split("");
        for (var i = 0; i < num.length; i++) {
            arr[i] = parseInt(num[i], 10);
        }
        //Now cube the numbers and add them together
        for (var i = 0; i < arr.length; i++) {
            newNum += Math.pow(arr[i], 3);
        }
        //Here we check to see if the newNum matches the original num
        if (newNum === n) {
            return true;
        } else {
            return false;
        }
    }

    this.calculate = function () {
        for (var j = 1; j < 1000; j++) {
            if (self.isArmstrong(j)) {
                self.results.push(j + " is an Armstrong Number.");
            }
        }
    }
})