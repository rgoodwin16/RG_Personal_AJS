﻿'use strict';
angular.module('rg_personal').controller('projects-longestCtrl', function () {
    var self = this;
    this.content = '';
    this.result = '';
    this.name = null;
    
    this.uploadFile = function () {
        self.name = event.target.files[0].name;
    }

    this.getTxt = function ($fileContent) {
        self.content = $fileContent;
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
