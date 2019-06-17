angular.module('alurapic')
  .controller('FotoController', function($scope, resource, $routeParams) {
    $scope.foto = {};

    if ($routeParams.fotoId) {
      resource.get({
        fotoId: $routeParams.fotoId
      }, function(foto) {
        $scope.foto = foto;
      }, function(erro) {
        $scope.message = 'Não foi possível obter a foto';
      })
      // $http.get('v1/fotos/' + $routeParams.fotoId)
      //   .success(function(foto) {
      //     $scope.foto = foto;
      //   })
      //   .error(function(erro) {
      //     $scope.message = 'Não foi possível obter a foto';
      //   });
    }

    $scope.save = function() {
      if ($scope.formulario.$valid) {

        if ($scope.foto._id) {
          resource.update({
            fotoId: $scope.foto._id
          }, $scope.foto, function() {
            $scope.message = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
          }, function(erro) {
            $scope.message = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
          });
          // $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
          //   .success(function() {
          //     $scope.message = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
          //   })
          //   .error(function() {
          //     $scope.message = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
          //   });
        } else {
          resource.save($scope.foto, function() {
            $scope.foto = {};
            $scope.message = 'Foto incluída com sucesso';
          }, function(erro) {
            $scope.message = 'Não foi possível incluir a foto.';
          });
          // $http.post('v1/fotos', $scope.foto)
          //   .success(function() {
          //     $scope.foto = {};
          //     $scope.message = 'Foto incluída com sucesso';
          //   })
          //   .error(function() {
          //     $scope.message = 'Não foi possível incluir a foto.';
          //   });
        }
      }
    };
  });