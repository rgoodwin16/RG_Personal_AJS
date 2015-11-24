'use strict'
angular.module('rg_personal').controller('blogCtrl', ['$state','posts','categories', function ($state,posts,categories) {
    var self = this;
    this.$state = $state;
    this.posts = posts;
    this.categories = categories;
   // console.log(self.posts)
    
}])