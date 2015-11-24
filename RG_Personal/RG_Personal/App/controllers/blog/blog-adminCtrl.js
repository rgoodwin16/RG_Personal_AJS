'use strict';
angular.module('rg_personal').controller('blog-adminCtrl', ['$state','blogSvc', function ($state,blogSvc) {
    var self = this;
    this.$state = $state;
    this.mainpanel = 'list';
    this.model = {};
    //this.posts = posts;
    //this.categories = categories;
   // console.log(self.categories)

    this.beginCreate = function () {
        self.mainpanel = 'create';
    }

    this.beginEdit = function () {
        blogSvc.details(id).then(function (result) {
            self.model = result;
            self.mainpanel = 'edit';
        })
    }

    this.beginDelete = function () {
        blogSvc.details(id).then(function (result) {
            self.model = result;
            self.mainpanel = 'delete';
        })
    }

    this.createPost = function () {
        blogSvc.create(self.model).then(function (success) {
            $state.go($state.current, null, { reload: true });
        })
    }
}])