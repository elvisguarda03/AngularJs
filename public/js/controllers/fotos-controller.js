angular.module('alurapic').controller('FotosController', function($scope, $http) {

//  A injeção de dependência do angular não se importa com a ordem dos parâmetros, mas sim com o nome.

//  Serviço especializado do Angular para realizar requisição Ajax.
//  Consumindo o endpoint
//  $http efetua uma requisição assíncrona
  $http.get('v1/fotos')
    .success(function (fotos) {
      $scope.fotos = fotos;
    })
    .error(function (error) {
      console.log(error);
    });

//  Devolve u
  // var promise = $http.get('v1/fotos');

//  Se tudo for okay, ele executa o then
  // promise.then(function (retorno) {
  //   $scope.fotos = retorno.data;
  // }).catch( function (error) {
  //   console.log(error);
  // });

});
