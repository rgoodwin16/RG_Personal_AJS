'use strict'
angular.module('rg_personal').controller('imagesCtrl',['$state','grants',function ($state,grants){
    var self = this;
    this.$state = $state;
    this.grants = grants;
    console.log(self.grants)

    this.display = "before";
}])