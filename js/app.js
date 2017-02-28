var app = angular.module("app", []);

app.controller("mainCtrl", function($scope,$timeout) {

    //Object of womens, "fake api call".
    $scope.womens = [{
        name         : "Jane Doe",
        age          : 27,
        from         : "Mar del plata",
        distance     : "3 mi.",
        spotify      : "Michael Jackson - Smooth Criminal",
        instagramImg : ['img/women/01/01.jpg','img/women/01/02.jpg','img/women/01/03.jpg'],
        desc         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error.",
        img          : ['img/women/01/01.jpg','img/women/01/02.jpg','img/women/01/03.jpg']
    },{
        name         : "Lucy Rose",
        age          : 22,
        from         : "Canada",
        distance     : "5 mi.",
        spotify      : "Justin Bieber - Sorry",
        instagramImg : ['img/women/02/02.jpg','img/women/02/03.jpg'],
        desc         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error.",
        img          : ['img/women/02/01.jpg','img/women/02/02.jpg','img/women/02/03.jpg']
    },{
        name         : "Mary Chloe",
        age          : 33,
        from         : "USA",
        spotify      : "Pink Floyd - Comfortably numb",
        instagramImg : ['img/women/03/01.jpg','img/women/03/03.jpg'],
        distance     : "7 mi.",
        desc         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae totam similique, maiores distinctio. Tempore et quod, iste accusantium perspiciatis, delectus nam suscipit cumque dolore, culpa aut praesentium ab. Similique, error.",
        img          : ['img/women/03/01.jpg','img/women/03/02.jpg','img/women/03/03.jpg']
    }];

    //Inicio variables
    //Tab selected se refiere a la tab seleccionada, por default es la pantalla para encuentros
    $scope.tabSelected      = 'encounter';
    //GenreSelected se refiere al genero seleccionado, puede ser women o men
    $scope.genreSelected    = $scope.womens;
    //selectedImgSrc es la variable que cambiaria dinamicamente en base al usuario que se este viendo por pantalla.
    $scope.selectedImgSrc   = $scope.genreSelected[0].img[0];
    //selectedIgImg Cumple la funcion de guardar dinamicamente la imagen de instagram seleccionada.
    $scope.selectedIgImg    = $scope.genreSelected[0].instagramImg[0];
    //actualUser Guarda el id, en este caso indice del usuario que se esta mostrando por pantalla.
    $scope.actualUser       = 0;
    //Variable que genera animacion en cambio de usuario
    $scope.translatePercent = 0;
    //Variable que determina si activar la vista de instagram o no
    $scope.instagramView    = false;
    //Variable que guarda el src de la imagen anterior, de esta forma se mantiene la vista mientras se hace la transicion de cambio de usuario
    $scope.prevImgSrc       = false;
    //Variable que guarda el src de la imagen de instagram anterior, de esta forma se mantiene la vista mientras se hace la transicion de cambio de usuario
    $scope.prevIgImgSrc     = false;

    //SetImg se encarga de cambiar el src de cada imagen
    $scope.setImg = function(src) {
        $scope.selectedImgSrc = src;
    }

    //SetImg se encarga de cambiar el src de cada imagen de instagram
    $scope.setIgImg = function(src) {
        $scope.selectedIgImg = src;
    }

    //nextImg Recibe y recorre el arreglo de imagenes del usuario actual, una vez que es encontrado determina si mostrar la siguiente imagen del usuario o la primera
    $scope.nextImg = function(imgs) {
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i] === $scope.selectedImgSrc) {
                $scope.selectedImgSrc = i == imgs.length - 1 ? imgs[0] : imgs[i+1];
                return true;
            }
        }
    }

    //prevImg Recibe y recorre el arreglo de imagenes del usuario actual, una vez que es encontrado determina si mostrar la anterior imagen del usuario o la ultima
    $scope.prevImg = function(imgs) {
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i] === $scope.selectedImgSrc) {
                $scope.selectedImgSrc = i ?  imgs[i-1] : imgs[imgs.length - 1];
                return true;
            }
        }
    }

    //nextUser Indica el indice de el nuevo usuario a mostrar, setea la primer foto del usuario por default y hace la animacion de cambio de usuario.
    $scope.nextUser = function() {
        $scope.instagramView = false;
        if ($scope.translatePercent != 66.666) {
            $scope.translatePercent += 33.333;
            $scope.actualUser       = $scope.actualUser + 1;
            $scope.prevImgSrc       = $scope.selectedImgSrc;
            $scope.selectedIgImg    = $scope.genreSelected[$scope.actualUser].instagramImg[0];
            $scope.selectedImgSrc   = $scope.genreSelected[$scope.actualUser].img[0];
        }
    }
});
