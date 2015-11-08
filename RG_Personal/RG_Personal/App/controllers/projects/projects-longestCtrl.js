'use strict';
angular.module('rg_personal').controller('projects-longestCtrl', function () {
    var self = this;
    this.content = '';
    this.result = '';
    

    this.getTxt = function ($fileContent) {
        self.content = $fileContent;
        console.log(self.content)
    }

    this.calculate = function () {
        var arr = self.content.split(new RegExp(/[\s,()\n\r\t]+/));
        var longest = '';
        for (var i = 0; i < arr.length; i++) {
            var current = arr[i];
            if (current.length > longest.length)
                longest = current;
        }
        self.result =  "The longest word is: " + longest;
    }

})
