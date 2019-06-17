angular.module('alurapic').controller('FotosController', function($scope, resource) {

  $scope.filtro = '';

  //  A injeção de dependência do angular não se importa com a ordem dos parâmetros, mas sim com o nome.

  resource.query(function(fotos) {
    $scope.fotos = fotos;
  }, function(erro) {
    console.log(erro);
  });

  //  Serviço especializado do Angular para realizar requisição Ajax.
  //  Consumindo o endpoint
  //  $http efetua uma requisição assíncrona

  // $http.get('v1/fotos')
  //   .success(function(fotos) {
  //     $scope.fotos = fotos;
  //   })
  //   .error(function(error) {
  //     console.log(error);
  //   });

  $scope.remove = function(foto) {
    resource.delete({fotoId: foto._id}, function () {
      $scope.message = 'Foto ' + foto.titulo + ' foi removida com sucesso'
      $scope.fotos.splice($scope.fotos.indexOf(foto), 1);
    }, function (erro) {
      $scope.message = 'Não foi possível remover a foto ' + foto.titulo;
    });

    // $http.delete('v1/fotos/' + foto._id)
    //   .success(function() {
    //     $scope.message = 'Foto ' + foto.titulo + ' foi removida com sucesso'
    //     $scope.fotos.splice($scope.fotos.indexOf(foto), 1);
    //   })
    //   .error(function(erro) {
    //     $scope.message = 'Não foi possível remover a foto ' + foto.titulo;
    //   });
  };

  //  Devolve uma promessa
  // var promise = $http.get('v1/fotos');

  //  Se a requisição for bem sucedida, ele executa o then
  // promise.then(function (retorno) {
  //   $scope.fotos = retorno.data;
  // }).catch( function (error) {
  //   console.log(error);
  // });
});
