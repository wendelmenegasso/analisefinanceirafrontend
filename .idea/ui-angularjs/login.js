// Define o módulo da aplicação
// app.js
angular.module('myLogin', [])
    .controller('UserController', ['$scope', '$http', '$window', function($scope, $http, $window) {
        $scope.loginData = {};
        $scope.errorMessage = '';

        $scope.login = function() {
            $http.post('http://127.0.0.1:9090/login', $scope.loginData)
                .then(function(response) {
                    alert(response.data.token);
                    console.log('Login successful:', response.data);
                    $window.location.href = 'home.htm';
                    // Redirecionar ou realizar outra ação após o login
                }, function(error) {
                    alert("Deu errado");
                    console.error('Login error:', error);
                    $scope.errorMessage = 'Invalid username or password.';
                });
        };
    }]);