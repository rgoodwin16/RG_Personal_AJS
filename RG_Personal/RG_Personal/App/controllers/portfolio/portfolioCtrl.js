'use strict'
angular.module('rg_personal').controller('portfolioCtrl', ['$state','$modal', function ($state,$modal) {
    var self = this;
    this.$state = $state;
    this.itemList = 'all';
    this.code = [
        {
            Title: "Max Of Five | Sum of Five | Product of 5",
            SubTitle:"Javascript Example",
            ImgSrc: '../../../Theme_Template/img/projects/calc.png',
            Type:"javascript"
        }, {
            Title: "Factorials",
            SubTitle:"Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/factorial.png",
            Type: "Javascript Example"
        }, {
            Title: "Perfect Numbers",
            SubTitle:"Javscript Example",
            ImgSrc: "../../../Theme_Template/img/projects/trophy.png",
            Type: "javascript"
        }, {
            Title: "Happy Numbers",
            SubTitle:"Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/smile.png",
            Type: "javascript"
        }, {
            Title: "Armstrong Numbers",
            SubTitle:"Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/rocket.png",
            Type: "javascript"
        }, {
            Title: "Palindrome",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/exchange.png",
            Type: "javascript"
        }, {
            Title: "FizzBuzz",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/coffee.png",
            Type: "javascript"
        }, {
            Title: "Longest Word",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/text_height.png",
            Type: "javascript"
        }, {
            Title: "Word Search",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/search.png",
            Type: "javascript"
        }, {
            Title: "Word Filter",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/filter.png",
            Type: "javascript"
        }, {
            Title: "Word Frequency",
            SubTitle: "Javascript Example",
            ImgSrc: "../../../Theme_Template/img/projects/sort.png",
            Type: "javascript"
        }
    ];
    this.project = [
        {
            Title: "Bug Tracker",
            SubTitle: "Web Application",
            ImgSrc: "../../../Theme_Template/img/bt_logo.png",
            Type: "bugtracker"
        }, {
            Title: "Car Finder",
            SubTitle: "Web Application",
            ImgSrc: "../../../Theme_Template/img/cf_logo.png",
            Type: "carfinder"
        }, {
            Title: "Budget Planner",
            SubTitle: "Web Application",
            ImgSrc: "../../../Theme_Template/img/bp_logo.png",
            Type: "budgetplanner"
        }
    ]




}])