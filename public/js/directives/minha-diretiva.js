angular.module('minhaDiretiva', [])
  .directive('meuPainel', function () {

    var ddo = {
      //A - Attribute
      //E - Element
      //Essa diretiva pode ser utilizada como atributo de uma tag, bem como pode ser uma tag.
      restrict: 'AE',

      //Este atributo é a interface de comunicação com a diretiva(como o dado será passado para dentro do scope)
      //Se o nome do atributo for idêntico ao nome da diretiva só é necessário colocar o @
      scope: {
          titulo: '@'
      },
      transclude: true,
      templateUrl: 'js/directives/meu-painel.html'
    }

    return ddo;
  });
