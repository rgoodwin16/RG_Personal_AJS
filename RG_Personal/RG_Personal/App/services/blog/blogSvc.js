(function () {
    angular.module('rg_personal').factory('blogSvc', ['$http', function ($http) {
        var f = {};

        f.list = function () {
            return $http.post("api/Blog/Index").then(function (response) {
                return response.data;
            })
        }

        f.create = function (model) {
            return $http.post("api/Blog/Create", model).then(function (response) {
                return response.data;
            })
        }

        f.details = function (id) {
            return $http.post("api/Blog/Details?id=" + id).then(function (response) {
                return response.data;
            })
        }

        f.edit = function (model) {
            return $http.post("api/Blog/Edit", model).then(function (response) {
                return response.data;
            })
        }

        f.delete = function (id) {
            return $http.post("api/Blog/Delete?id=" + id).then(function (response) {
                return response.data;
            })
        }

        return f;
    }])
})();