'use strict';
angular.module('rg_personal').controller('projects-searchCtrl',function(){
    var self = this;
    this.content = '';
    this.word = '';
    this.result = '';
    this.txtContent = '';
    this.name = null;

     this.uploadFile = function () {
        self.name = event.target.files[0].name;
    }


    this.getTxt = function ($fileContent) {
        self.content = $fileContent;
    }

    this.calculate = function () {
        var arr = self.content.match(new RegExp(self.word, 'gi'));
        if (arr == null) {
            self.result = "The word: " + "<strong class='text-warning'>" + self.word + "</strong>" + " did not appear in this text file.";
        } else if (arr.length == 1) {
            self.result = "The word: " + "<strong class='text-warning'>" + self.word + "</strong>" + " appears one time in this text file.";
            self.txtContent = self.content.replace(new RegExp(self.word, 'gi'), "<strong class='text-warning'>" + self.word + "</strong>");
        } else {
            self.result = "The word: " + "<strong class='text-warning'>" + self.word + "</strong>" + " appears " + arr.length + " times in this text file.";
            self.txtContent = self.content.replace(new RegExp(self.word, 'gi'), "<strong class='text-warning'>" + self.word + "</strong>");
        }
    }
})