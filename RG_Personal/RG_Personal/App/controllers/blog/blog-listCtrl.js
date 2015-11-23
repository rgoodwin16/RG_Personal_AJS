'use strict';
angular.module('rg_personal').controller('blog-listCtrl',['$state','posts',function($state,posts){
    var self = this;
    this.$state = $state;
    this.posts = posts;
    console.log(posts)
    //this.posts = [
    //    { Title: "Lorem ipsum Example", Created: "9/25/2015 5:18:47 PM +00:00", Author: "Ray Goodwin", Category: "Professional", Comments: ["Well, the way they make shows is, they make one show.", "That show's called a pilot.", "Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."], Body: "<p>" + "From lipsum.com" + "</p>" + "<blockquote>" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." + "</blockqoute>" },
    //    { Title: "Artwork", Created: "9/27/2015 5:18:47 PM +00:00", Author: "Ray Goodwin", Category: "Personal", Comments: ["Well, the way they make shows is, they make one show.", "That show's called a pilot.", "Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."], Body: "<p>" + "Just figured I'd share a picture my writing partner sent me a while back showing that we are now actually published!!!" + "</p>" }
    //];
}])