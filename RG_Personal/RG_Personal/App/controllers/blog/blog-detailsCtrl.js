'use strict';
angular.module('rg_personal').controller('blog-detailsCtrl', ['$state','commentSvc','$stateParams','blogpost', function ($state,commmentSvc,$stateParams,blogpost) {
    var self = this;
    this.$state = $state;
    this.slug = $stateParams.Slug;
    this.blogpost = blogpost;
    this.model = { PostId: blogpost.Id };
    
    
    this.createComment = function () {
        commmentSvc.create(self.model).then(function (success) {
            $state.go($state.current, null, { reload: true });
        })
    }

}])