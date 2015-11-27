'use strict';
angular.module('rg_personal').filter('orderObjectBy', function () {// Thank you Justin Klemm http://justinklemm.com/angularjs-filter-ordering-objects-ngrepeat/
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if (reverse) filtered.reverse();
        return filtered;
    };

})