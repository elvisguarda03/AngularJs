//Módulo responsável pelo carregamento de todos os outros módulos da aplicação.

//Criando um módulo com o nome alurapic que possui 2 dependências.
//Se o 2° parâmetro for omitido significa que estou tentando utilizar um módulo existente.

//Módulo Angular -
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
  .config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });

    $routeProvider.otherwise( {redirectTo: '/fotos'} );
  });
