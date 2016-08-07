angular.module('clima').controller('ClimaController', function($scope, $http){
  $scope.clima = [];
  $scope.submeter = function(){  
      $http.get('http://api.openweathermap.org/data/2.5/weather/?q='+$scope.clima.cidade+'&APPID=3cf30ad4035fe6da2de2858236727cad&units=metric')
    .then(function(response) {
      $scope.clima = response.data;
      $scope.showThePanel = true;
      $scope.showThePanelAlert = false;
    }).
    catch(function(response) {
      $scope.clima = response.data;
      $scope.showThePanel = false;
      $scope.showThePanelAlert = true;
    });
  };
});


