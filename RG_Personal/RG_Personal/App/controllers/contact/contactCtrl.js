'use strict'
angular.module('rg_personal').controller('contactCtrl', ['$state','$http', function ($state,$http) {
    var self = this;
    this.$state = $state;
    this.model = {};
    this.message = null;
    console.log(self.message)

    this.submit = function(model) {
        $http.post('api/Contact/Send', model).then(function (success) {
            self.model = {};
            self.message = "Your email was sent successfully.";
            console.log("it worked")
        }, function (error) {
            self.message = "You must enter an email address.";
        })

    }
}])