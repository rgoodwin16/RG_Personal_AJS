'use strict'
angular.module('rg_personal').controller('portfolioCtrl', ['$state','$modal', function ($state) {
    var self = this;
    this.$state = $state;
    this.itemList = 'all';
    this.code = [
        {
            Title: "Max Of Five | Sum of Five | Product of 5",
            SubTitle:"Javascript Example",
            ImgSrc: '../../../Theme_Template/img/projects/calc.png',
            Type: "javascript",
            State:'projects.max'
        }, {
            Title: "Factorials",
            SubTitle:"Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/factorial.png",
            Type: "Javascript Example",
            State: 'projects.factorial'
        }, {
            Title: "Perfect Numbers",
            SubTitle:"Javscript Example",
            ImgSrc: "../../../Theme_Template/img/projects/trophy.png",
            Type: "javascript",
            State: 'projects.perfect'
        }, {
            Title: "Happy Numbers",
            SubTitle:"Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/smile.png",
            Type: "javascript",
            State: 'projects.happy'
        }, {
            Title: "Armstrong Numbers",
            SubTitle:"Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/rocket.png",
            Type: "javascript",
            State: 'projects.armstrong'
        }, {
            Title: "Palindrome",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/exchange.png",
            Type: "javascript",
            State: 'projects.palindrome'
        }, {
            Title: "FizzBuzz",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/coffee.png",
            Type: "javascript",
            State: 'projects.fizzbuzz'
        }, {
            Title: "Longest Word",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/text_height.png",
            Type: "javascript",
            State: 'projects.longest'
        }, {
            Title: "Word Search",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/search.png",
            Type: "javascript",
            State: 'projects.search'
        }, {
            Title: "Word Filter",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/filter.png",
            Type: "javascript",
            State: 'projects.filter'
        }, {
            Title: "Word Frequency",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/sort.png",
            Type: "javascript",
            State: 'projects.frequency'
        }
    ];
    this.project = [
        {
            Title: "Bug Tracker",
            SubTitle: "Web Application",
            ImgSrc: "../../../Theme_Template/img/bt_logo.png",
            Type: "bugtracker",
            State: 'projects.bugtracker'
        }, {
            Title: "Car Finder",
            SubTitle: "Web Application",
            ImgSrc: "../../../Theme_Template/img/cf_logo.png",
            Type: "carfinder",
            State: 'projects.carfinder'
        }, {
            Title: "Budget Planner",
            SubTitle: "Web Application",
            ImgSrc: "../../../Theme_Template/img/bp_logo.png",
            Type: "budgetplanner",
            State:'projects.budgetplanner'
        }
    ]

    this.codeView = function (index) {
        $state.go(self.code[index].State);
    }

    this.projectView = function (index) {
        $state.go(self.project[index].State);
    }
}])