'use strict';
angular.module('rg_personal').filter('renderHtmlCorrectly',function($sce) {
    return function(stringToParse) {
        return $sce.trustAsHtml(stringToParse);
    }
})