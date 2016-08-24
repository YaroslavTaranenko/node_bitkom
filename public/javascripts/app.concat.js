/**
 * Created by yaroslav on 8/10/16.
 */
(function() {
    var app = angular.module('bitkom', ['templates', 'ngAnimate', "panelTop", 'mainMenu', "myHeader"]);

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

})();;/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {
    var app = angular.module('calls', []);

    app.directive('callBlock', function(){
        return{
            restrict: "E",
            templateUrl: "templates/calls.jade",
            controller: function($location, $scope, $http){
                //alert('top-panel');
                $scope.path = $location.url();
                alert($scope.path);
            },
            controllerAs: "hd"
        };
    });

})();;/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var app = angular.module('myHeader', ['topMenu', 'calls']);

    app.directive('myHeader', function(){
        return{
            restrict: "E",
            templateUrl: "templates/header.jade",
            controller: function($scope, $http){
                //alert('top-panel');

            },
            controllerAs: "hd"
        };
    });

})();

;/**
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
                            if($scope.mainMenu.item.length <= 5)$scope.nextEnd = true;
                        }, function(err){alert(err.data);});
                    this.next = function(){
                        $scope.cMenu = null;
                        $scope.csMenu = null;
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
                    };
                    this.prev = function(){
                        $scope.cMenu = null;
                        $scope.scMenu = null;
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
                    };
                    this.over = function(mi, $event){
                        //alert(mi.title);
                        this.pos($event);
                        if($scope.cMenu == mi){
                            $scope.cMenu = null;
                        }else{
                            $scope.cMenu = mi;
                        }
                    };
                    this.sover = function(smi, $event){
                        if($scope.csMenu == smi){
                            $scope.csMenu = null;
                        }else{
                            $scope.csMenu = smi;
                        }
                        $scope.ssubPos = {"left": (angular.element($event.target).prop('offsetLeft') + 250) + 'px', "top": (angular.element($event.target).prop('offsetTop')) + 'px'};
                    };
                    this.sclear = function(){
                        $scope.csMenu = null;
                    };
                    this.leave = function(){
                        $scope.cMenu = null;
                    };
                    this.pos = function($event){
                        //alert(angular.element($event.target).prop('offsetLeft'));
                        $scope.subPos = {"left": angular.element($event.target).prop('offsetLeft') + 'px', "top": (angular.element($event.target).prop('offsetTop') + 52) + 'px'};
                    }
                },
                controllerAs: "mm"
            };
        });


})();;/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {
    var app = angular.module('topMenu', []);

    app.directive('topMenu', function(){
        return{
            restrict: "E",
            templateUrl: "templates/top-menu.jade",
            controller: function($scope, $http){
                //alert('top-panel');

            },
            controllerAs: "hd"
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

})();;angular.module('templates', ['templates/calls.jade', 'templates/header.jade', 'templates/main-menu.jade', 'templates/test.jade', 'templates/top-menu.jade', 'templates/top-panel.jade']);

angular.module("templates/calls.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/calls.jade",
    "<div class=\"call-wrapper\"># {{path}}<ul id=\"call-block\"><li><i class=\"fa fa-phone\"></i><span>&nbsp;(7252)29-27-83</span></li><li> <i class=\"fa fa-mobile\"></i><span>&nbsp;+7(708)478-67-07</span></li><li> <i class=\"fa fa-mobile\"></i><span>&nbsp;+7(771)052-48-48</span></li><li> <a href tip=\"Заказать звонок\"><i class=\"fa fa-phone\"></i><span>&nbsp;Позвонить мне</span></a></li></ul></div>");
}]);

angular.module("templates/header.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/header.jade",
    "<div class=\"logo iblock w-200\"> <a href=\"/\"><img src=\"/images/logo.png\" class=\"w-200\"><span class=\"w-200\">Магазин цифровой техники</span></a></div><top-menu></top-menu><call-block></call-block>");
}]);

angular.module("templates/main-menu.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/main-menu.jade",
    "<!--Created by yaroslav on 8/16/16.\n" +
    " # {{cMenu}}\n" +
    " # {{ssubPos}} --><div class=\"menu-wrapper\"><div id=\"main-menu\"><div class=\"subprev\"><div ng-click=\"mm.prev()\" ng-class=\"{'mm-disabled': prevEnd}\" class=\"prev left fa fa-angle-left\"></div></div><ul ng-style=\"menuLength\"><li ng-repeat=\"mi in mainMenu.item\" ng-click=\"mm.over(mi, $event); mm.sclear()\" class=\"vt\"><a href><img ng-src=\"/images/menu/{{mi.icon}}\" class=\"left\"><div class=\"title\">{{mi.title}}</div><i ng-show=\"mi.subitems.length &gt; 0\" class=\"fa fa-angle-down\"></i></a></li></ul><div class=\"subnext\"><div ng-click=\"mm.next()\" ng-class=\"{'mm-disabled': nextEnd}\" class=\"next right fa fa-angle-right\"></div></div></div><div id=\"subitems\" ng-style=\"subPos\"><ul><li ng-repeat=\"si in cMenu.subitems\" ng-click=\"mm.sover(si, $event)\"><a href><img ng-src=\"/images/menu/{{si.icon}}\" class=\"h-50 w-50 left\"><div class=\"title\">{{si.title}}</div></a><i ng-show=\"si.subitems.length &gt; 0\" class=\"fa fa-angle-right\"></i></li></ul><div id=\"subitems\" ng-style=\"ssubPos\"><ul><li ng-repeat=\"ssi in csMenu.subitems\"><a href><img ng-src=\"/images/menu/{{ssi.icon}}\" class=\"h-50 w-50 left\"><div class=\"title\">{{ssi.title}}                </div></a></li></ul></div></div></div>");
}]);

angular.module("templates/test.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/test.jade",
    "<ul><li>j1</li><li>j2</li><li>j3</li><li>j4</li><li>j5</li></ul>");
}]);

angular.module("templates/top-menu.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/top-menu.jade",
    "<div id=\"top-menu\" class=\"iblock vt\"><ul><li><a href>Акции</a></li><li> <a href>Газета</a></li><li> <a href>Калькулятор компьютера</a></li><li> <a href>Оптовые продажи</a></li><li> <a href>Обмен и возврат </a></li></ul></div>");
}]);

angular.module("templates/top-panel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/top-panel.jade",
    "<div id=\"top-panel\"><a href id=\"enter\"> <i class=\"fa fa-user\"> </i># Вход на сайт</a><ul class=\"right\"><li class=\"iblock p-10\"><a href=\"/\">Главная</a></li><li class=\"iblock p-10\"><a href>Доставка</a></li><li class=\"iblock p-10\"><a href>Способы оплаты</a></li></ul><div style=\"clear:both\"></div></div>");
}]);
