(function () {
    angular.module('rg_personal').factory('commentSvc', ['$http', function ($http) {
        var f = {};

        f.list = function () {
            return $http.post("api/Comments/Index").then(function (response) {
                return response.data;
            })
        }

        f.create = function (model) {
            return $http.post("api/Comments/Create", model).then(function (response) {
                return response.data;
            })
        }

        f.details = function (id) {
            return $http.post("api/Comments/Details?id=" + id).then(function (response) {
                return response.data;
            })
        }

        f.edit = function (model) {
            return $http.post("api/Comments/Edit", model).then(function (response) {
                return response.data;
            })
        }

        f.delete = function (id) {
            return $http.post("api/Comments/Delete?id=" + id).then(function (response) {
                return response.data;
            })
        }

        return f;
    }])
})();