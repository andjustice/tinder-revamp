var app = angular.module("app", []);

app.controller("mainCtrl", function($scope) {
    $scope.womens = [{
        name : "Jane Doe",
        age  : 27,
        from : "Mar del plata",
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error."
        img  : ['img/01.jpg','img/01-a.jpg','img/01-b.jpg']
    },{
        name : "Lucy Rose",
        age  : 22,
        from : "Canada",
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error."
        img  : ['img/01.jpg','img/01-a.jpg','img/01-b.jpg']
    },{
        name : "Mary Chloe",
        age  : 33,
        from : "USA",
        desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error."
        img  : ['img/01.jpg','img/01-a.jpg','img/01-b.jpg']
    }]
});
