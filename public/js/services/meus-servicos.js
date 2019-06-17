angular.module('meusServicos', [])
  .factory('resource', function ($resource) {
    return $resource('v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT'
      }
    });
});
