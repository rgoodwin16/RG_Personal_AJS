'use strict'
angular.module('rg_personal').controller('modalCtrl', function ($modalInstance) {
    var self = this;

    //CLOSE MODAL
    this.close = function () {
        $modalInstance.close();
    }
})