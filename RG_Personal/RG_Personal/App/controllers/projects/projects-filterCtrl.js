'use strict';
angular.module('rg_personal').controller('projects-filterCtrl',function() {
    var self = this;
    this.content = '';
    this.num = '';
    this.result = '';
    this.name = null;

    this.uploadFile = function () {
        self.name = event.target.files[0].name;
    }

    this.getTxt = function ($fileContent) {
        self.content = $fileContent;
    }

    this.calculate = function () {
        var filterNum = self.num;
        var arr = self.content.split(new RegExp(/[\s,()\n\r\t]+/));
        var filterWord = '';
        var selectedWord = '';
        var printedWords = {};
        for (var i = 0; i < arr.length; i++) {
            selectedWord = arr[i].replace(/[^\w]/gi, ' ').toLowerCase();
            if (selectedWord.length > filterNum) {
                if (printedWords[selectedWord] == null) {
                    filterWord += selectedWord + "<br />";
                    printedWords[selectedWord] = true;
                }
            }
        }
        self.result = filterWord;
    }
})