'use strict'
angular.module('rg_personal').controller('contactCtrl', ['$state','$http', function ($state,$http) {
    var self = this;
    this.$state = $state;
    this.model = {};
    this.message = null;

    this.submit = function(model) {
        $http.post('api/Contact/Send', model).then(function (success) {
            $state.go($state.current, null, { reload: true });
            self.message = "Your email was sent successfully.";
        }, function (error) {
            $state.go($state.current, null, { reload: true });
            self.message = error;
        })

    }
}])