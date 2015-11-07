'use strict';
angular.module('rg_personal').controller('projects-palindromeCtrl', function () {
    var self = this;
    this.result = '';
    this.str = '';
    this.rStr = '';

    this.calculate = function () {
        if (self.str === "") {
            self.result = "Please enter a word or phrase.";
        } else {
            self.rStr = self.str.split("").reverse().join("");
            if (self.str == self.rStr) {
                self.result = self.str + " is a Palindrome.";
            } else {
                self.result = self.str + " is NOT a Palindrome.";
            }
        }
        
    }
})