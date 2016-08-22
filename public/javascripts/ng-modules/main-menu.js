/**
 * Created by yaroslav on 8/16/16.
 */
(function() {
    var app = angular.module('mainMenu', [])
        .directive('mainMenu', function(){
            return{
                restrict: "E",
                templateUrl: "templates/main-menu.jade",
                controller: function($scope, $http){
                    //alert('top-panel');
                    $http.post('/admin/view/interface', {name: 'main-menu'})
                        .then(function(resp){
                            $scope.mainMenu = resp.data.interface[0];
                            $scope.menuLength = {"width": ($scope.mainMenu.item.length * 200)+"px"};
                        }, function(err){alert(err.data);});
                },
                controllerAs: "mm"
            };
        });


})();