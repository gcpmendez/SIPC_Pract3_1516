var app = angular.module("app", []);
app.controller('Mycontroler', function($scope, $http) {
  $http.get("http://opendatacanarias.es/datos/dataset/9fc31fda-1ea6-4532-a3dd-5c3afbcbd878/resource/0380d46d-a85e-4f52-b90b-1ac75f3c3f12/download/calendario.json")
  .success(function (response) {$scope.datos = response.eventos;});
});
