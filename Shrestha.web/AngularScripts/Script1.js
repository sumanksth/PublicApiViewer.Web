function firstController($scope,$http) {
    $scope.name = "Hello";
    var OnSuccess = function (response) {
        $scope.user = response.data;
    };
    var OnError = function () {
        $scope.error = "som thing wong - wee too lou";
    };
    $scope.searchGit = function () {
                        $http.get("https://api1.github.com/users/angular")
                         .then(OnSuccess, OnError)
    };
    
    
};