angular.module('alurapic')
  .controller('GruposController', function($scope, $http, $resource) {
    var resource = $resource('v1/grupos/:grupoId');

    resource.query(function(grupos) {
      $scope.grupos = grupos;
    }, function(erro) {
      $scope.message = erro;
    });

    // $http.get('v1/grupos')
    //   .success(function(grupos) {
    //     $scope.grupos = grupos;
    //   })
    //   .error(function(erro) {
    //     $scope.message = erro;
    //   });
  });
