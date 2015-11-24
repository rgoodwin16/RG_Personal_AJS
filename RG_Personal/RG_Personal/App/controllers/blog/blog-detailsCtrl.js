'use strict';
angular.module('rg_personal').controller('blog-detailsCtrl', ['$state','commentSvc','$stateParams','blogpost','comments', function ($state,commmentSvc,$stateParams,blogpost,comments) {
    var self = this;
    this.$state = $state;
    this.slug = $stateParams.Slug;
    this.blogpost = blogpost;
    this.comments = comments;
    this.model = { PostId: blogpost.Id };
    console.log(self.blogpost)
    
    this.createComment = function () {
        commmentSvc.create(self.model).then(function (success) {
            $state.go($state.current, null, { reload: true });
        })
    }

}])