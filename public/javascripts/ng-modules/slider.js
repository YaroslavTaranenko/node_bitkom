/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    var app = angular.module('mySlider', []);

    app.directive('mySlider', function(){
        return{
            restrict: "E",
            templateUrl: "templates/slider.jade",
            scope: {
                slids: "="
            },
            controller: function($scope, $http){
                this.cIndex = 0;
                this.next = function(){
                    
                    if(this.cIndex >= $scope.slids.length - 1){
                        this.cIndex = 0;
                    }else{
                        this.cIndex++;
                    }
                    //alert(this.cIndex);
                    this.changeSlide();
                };
                this.changeSlide = function(){
                    
                    for(var i = 0; i < $scope.slids.length; i++){
                        $scope.slids[i].show = false;
                    };
                    
                    $scope.slids[this.cIndex].show = true;
                    //alert($scope.slids.length);
                };
                this.showSlide = function(idx){                    
                    if(idx > ($scope.slids.length - 1)){
                        return;
                    }else{
                        this.cIndex = idx;
                    }
                    
                    this.changeSlide();
                };
                this.showSlide(0);
            },
            controllerAs: "sl"
        };
    });

})();

