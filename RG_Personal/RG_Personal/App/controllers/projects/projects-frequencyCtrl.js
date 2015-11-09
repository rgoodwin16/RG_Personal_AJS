'use strict';
angular.module('rg_personal').controller('projects-frequencyCtrl',function() {
    var self = this;
    var content = '';
    var result = '';

    this.getTxt = function ($fileContent) {
        self.content = $fileContent;
    }

    this.calculate = function () {
        var arr = self.content.split(" ");
        var wordFrequency = "";
        var selectedWord = "";
        var printedWords = {};
        // First Count The Words in the Array
        for (var i = 0; i < arr.length; i++) {
            selectedWord = arr[i].replace(/[^\w]/gi, '').toLowerCase();
            if (printedWords[selectedWord] != null)
                printedWords[selectedWord]++;
            else
                printedWords[selectedWord] = 1;
        }
        // Create Dictionary - Create Array of Objs  
        var objArr = [];
        for (var key in printedWords) {
            objArr.push({ word: key, count: printedWords[key] });
        }
        //Sort Dictionary in Descending Order
        objArr.sort(function (a, b) { return b.count - a.count });

        wordFrequency = objArr.reduce(function (a, b) {
            return a += b.word + " appears " + b.count + " times." + "<br />"
        }, " ");
        self.result =  wordFrequency;
    }
})