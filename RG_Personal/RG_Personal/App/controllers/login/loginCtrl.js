'use strict';
angular.module('rg_personal').controller('loginCtrl', ['authSvc', '$state', '$stateParams', function ($authSvc, $state, $stateParams) {
    var self = this;

    self.username = '';
    self.password = '';
    self.isNew = $state.$stateParams.isNew === true;
    self.needAuth = $state.$stateParams.needAuth === true;
    self.errors = null;

    //LOGIN FORM SUBMIT
    this.login = function () {
        $authSvc.login(self.username, self.password).then(function (success) {
            $state.go('blog.list');
        }, function (error) {
            self.errors = error;
        })
    }
}])