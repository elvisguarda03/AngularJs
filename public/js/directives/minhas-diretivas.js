angular.module('minhasDiretivas', [])
  .directive('meuPainel', function() {

    var ddo = {
      //A - Attribute
      //E - Element
      //Essa diretiva pode ser utilizada como atributo de uma tag, bem como pode ser uma tag.
      restrict: 'AE',

      //Este atributo é a interface de comunicação com a diretiva(como o dado será passado para dentro do scope)
      //Se o nome do atributo for idêntico ao nome da diretiva só é necessário colocar o @
      scope: {
        titulo: '@tituloFoto'
      },
      transclude: true,
      templateUrl: 'js/directives/meu-painel.html'
    };

    return ddo;
  })
  .directive('minhaFoto', function() {
    var ddo = {
      restrict: 'E',
      scope: {
        url: '@',
        titulo: '@'
      },
      template: '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}"></img>'
    }

    return ddo;
  });
