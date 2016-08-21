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
    "--><div>main menu</div>");
}]);

angular.module("templates/test.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/test.jade",
    "<ul><li>j1</li><li>j2</li><li>j3</li><li>j4</li><li>j5</li></ul>");
}]);

angular.module("templates/top-panel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/top-panel.jade",
    "<ul class=\"right\"><li class=\"iblock p-10\"><a href>Главная</a></li><li class=\"iblock p-10\"><a href>Доставка</a></li><li class=\"iblock p-10\"><a href>Способы оплаты</a></li></ul><div style=\"clear:both\"></div>");
}]);
