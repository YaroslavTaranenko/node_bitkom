/**
 * Created by yaroslav on 8/10/16.
 */
(function() {
    var app = angular.module('bitkom', ['templates', 'ngAnimate', "panelTop", 'mainMenu']);

    app.directive("scroll", function ($window) {
        return function (scope, element, attrs) {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 50) {
                    scope.boolPageScrolled = true;
                } else {
                    scope.boolPageScrolled = false;
                }
                scope.$apply();
            });
        };
    });

    app.controller('TestCtlr', function(){
        //alert('test');
    });

})();;/**
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


})();;/**
 * Created by yaroslav on 8/15/16.
 */
(function(){
    var app = angular.module('panelTop', [])
        .directive('topPanel', function(){
            return{
                restrict: "E",
                templateUrl: "templates/top-panel.jade",
                controller: function($scope, $http){
                    //alert('top-panel');

                },
                controllerAs: "tp"
            };
        });

})();;angular.module('templates', ['templates/main-menu.jade', 'templates/test.jade', 'templates/top-panel.jade']);

angular.module("templates/main-menu.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/main-menu.jade",
    "<!--Created by yaroslav on 8/16/16.\n" +
    " # {{prevEnd}}\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    " --><div id=\"main-menu\"> <div class=\"subprev\"><div ng-click=\"mm.prev()\" ng-class=\"{'mm-disabled': prevEnd}\" class=\"prev left fa fa-angle-left\"></div></div><ul ng-style=\"menuLength\"><li ng-repeat=\"mi in mainMenu.item\"><a href=\"/{{mi.code}}\"><img ng-src=\"/images/menu/{{mi.icon}}\" class=\"left\"><div class=\"title\">{{mi.title}}</div></a></li></ul><div class=\"subnext\"><div ng-click=\"mm.next()\" ng-class=\"{'mm-disabled': nextEnd}\" class=\"next right fa fa-angle-right\"></div></div></div><div id=\"subitems\"><ul><li ng-repeat=\"si in cMenu\">{{si.title}}</li></ul></div><button ng-mouseover=\"count = count + 1\" ng-init=\"count=0\">Increment (when mouse is over)</button><div class=\"count\">count: {{count}}</div>");
}]);

angular.module("templates/test.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/test.jade",
    "<ul><li>j1</li><li>j2</li><li>j3</li><li>j4</li><li>j5</li></ul>");
}]);

angular.module("templates/top-panel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/top-panel.jade",
    "<ul class=\"right\"><li class=\"iblock p-10\"><a href>Главная</a></li><li class=\"iblock p-10\"><a href>Доставка</a></li><li class=\"iblock p-10\"><a href>Способы оплаты</a></li></ul><div style=\"clear:both\"></div>");
}]);
