angular.module('templates', ['templates/main-menu.jade', 'templates/test.jade', 'templates/top-panel.jade']);

angular.module("templates/main-menu.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/main-menu.jade",
    "<!--Created by yaroslav on 8/16/16.--># {{subPos}}    <div id=\"main-menu\"><div class=\"subprev\"><div ng-click=\"mm.prev()\" ng-class=\"{'mm-disabled': prevEnd}\" class=\"prev left fa fa-angle-left\"></div></div><ul ng-style=\"menuLength\"><li ng-repeat=\"mi in mainMenu.item\"><a href=\"/{{mi.code}}\" ng-mouseover=\"mm.over(mi, $event)\"><img ng-src=\"/images/menu/{{mi.icon}}\" class=\"left\"><div class=\"title\">{{mi.title}}</div></a></li></ul><div class=\"subnext\"><div ng-click=\"mm.next()\" ng-class=\"{'mm-disabled': nextEnd}\" class=\"next right fa fa-angle-right\"></div></div></div><div id=\"subitems\"><ul><li ng-repeat=\"si in cMenu.subitems\"><a href=\"/{{si.code}}\"><img ng-src=\"/images/menu/{{si.icon}}\" class=\"h-50 w-50 left\"><div class=\"title\">{{si.title}}</div></a></li></ul></div>");
}]);

angular.module("templates/test.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/test.jade",
    "<ul><li>j1</li><li>j2</li><li>j3</li><li>j4</li><li>j5</li></ul>");
}]);

angular.module("templates/top-panel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/top-panel.jade",
    "<ul class=\"right\"><li class=\"iblock p-10\"><a href=\"/\">Главная</a></li><li class=\"iblock p-10\"><a href>Доставка</a></li><li class=\"iblock p-10\"><a href>Способы оплаты</a></li></ul><div style=\"clear:both\"></div>");
}]);
