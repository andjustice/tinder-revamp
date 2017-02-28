var app = angular.module("app", []);

app.controller("mainCtrl", function($scope) {
    $scope.womens = [{
        name     : "Jane Doe",
        age      : 27,
        from     : "Mar del plata",
        distance : "3 mi.",
        desc     : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error.",
        img      : ['img/01.jpg','img/01-a.jpg','img/01-b.jpg']
    },{
        name     : "Lucy Rose",
        age      : 22,
        from     : "Canada",
        distance : "5 mi.",
        desc     : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error.",
        img      : ['img/01.jpg','img/01-a.jpg','img/01-b.jpg']
    },{
        name     : "Mary Chloe",
        age      : 33,
        from     : "USA",
        distance : "7 mi.",
        desc     : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error.",
        img      : ['img/01.jpg','img/01-a.jpg','img/01-b.jpg']
    }];

    $scope.genreSelected    = $scope.womens;
    $scope.selectedImgSrc   = $scope.genreSelected[0].img[0];
    $scope.actualUser       = 0;
    $scope.translatePercent = 0;

    $scope.setImg = function(src) {
        $scope.selectedImgSrc = src;
    }

    $scope.nextImg = function(imgs) {
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i] === $scope.selectedImgSrc) {
                $scope.selectedImgSrc = i == imgs.length - 1 ? imgs[0] : imgs[i+1];
                return true;
            }
        }
    }

    $scope.prevImg = function(imgs) {
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i] === $scope.selectedImgSrc) {
                $scope.selectedImgSrc = i ?  imgs[i-1] : imgs[imgs.length - 1];
                return true;
            }
        }
    }

    $scope.nextUser = function() {
        if ($scope.translatePercent != 66.666) {
            $scope.translatePercent += 33.333;
            $scope.actualUser = $scope.actualUser + 1;
        }
    }
});
