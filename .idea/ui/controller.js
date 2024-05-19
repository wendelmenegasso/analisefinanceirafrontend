// controller.js
app.controller('MyController', function($scope, $location) {
        $scope.goToAbout = function() {
        $location.path('/auth');
        };
  });
  