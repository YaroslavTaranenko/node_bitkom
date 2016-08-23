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
                            $scope.menuLength = {"width": ($scope.mainMenu.item.length * 200)+"px", "margin-left": "10px"};
                            $scope.prevEnd = true;
                        }, function(err){alert(err.data);});
                    this.next = function(){
                        var ml = parseInt($scope.menuLength["margin-left"]);
                        
                        if(ml <= (($scope.mainMenu.item.length - 5)*193 - 10)*-1){
                            $scope.nextEnd = true;
                            return;
                        }
                        $scope.menuLength["margin-left"] = (ml - 193) + "px";
                        ml = ml - 193;
                        if(ml <= (($scope.mainMenu.item.length - 5)*193 - 10)*-1){
                            //alert(ml);
                            $scope.nextEnd = true;                            
                        }else{
                            $scope.nextEnd = false;
                        }
                        if(ml >= 10){
                            //alert(ml);
                            $scope.prevEnd = true;                            
                        }else{
                            $scope.prevEnd = false;
                        }
                    }
                    this.prev = function(){
                        var ml = parseInt($scope.menuLength["margin-left"]);                        
                        if(ml >= 10){
                            $scope.prevEnd = true;
                            return;
                        }
                        $scope.menuLength["margin-left"] = (ml + 193) + "px";
                        ml = ml + 193;
                        if(ml >= 10){
                            //alert(ml);
                            $scope.prevEnd = true;                            
                        }else{
                            $scope.prevEnd = false;
                        }
                        if(ml <= (($scope.mainMenu.item.length - 5)*193 - 10)*-1){
                            //alert(ml);
                            $scope.nextEnd = true;                            
                        }else{
                            $scope.nextEnd = false;
                        }
                    }
                },
                controllerAs: "mm"
            };
        });


})();