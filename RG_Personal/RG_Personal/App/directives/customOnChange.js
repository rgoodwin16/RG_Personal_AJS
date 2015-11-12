'use strict';
angular.module('rg_personal').directive('customOnChange', function () {//Thank you http://stackoverflow.com/users/434980/sqren, JSFiddle http://jsfiddle.net/sqren/27ugfym6/
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var onChangeFunc = scope.$eval(attrs.customOnChange);
            element.bind('change', onChangeFunc);
        }
    };
})