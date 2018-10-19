var app = angular.module('HackerSim', []);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
    
    var speed = 10;
    var content = '';
    $scope.codingText = '';
    $scope.cursor = '|';
    $http.get('code.txt').then(function(file) {
      content = file.data;
      console.log(file);
    })
    
    setInterval(function(){removeNotifications()}, 8000)
    
    function removeNotifications() {
      var elements = document.getElementsByClassName("notification");
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
      }
    }
    
    $scope.hack = function(event) {
      if(event.key === "+") {
        speed = 30;
      }
      else if(event.key === "-" && speed > 10) {
        speed = 5;
      }
      
      if(event.key === "1") {
        removeNotifications();
        var success = angular.element("<div>ACCESS GRANTED</div>");
        success.addClass("good");
        success.addClass("notification");
        angular.element(document.body).prepend(success);
      }
      else if(event.key === "2") {
        removeNotifications();
        var denied = angular.element("<div>ACCESS DENIED</div>");
        denied.addClass("bad");
        denied.addClass("notification");
        angular.element(document.body).prepend(denied);
      }
      else if(event.key === "3") {
        removeNotifications();
        var bitcoin = angular.element("<div>BITCOIN MINED</div>");
        bitcoin.addClass("good");
        bitcoin.addClass("notification");
        angular.element(document.body).prepend(bitcoin);
      }
      else if(event.key === "4") {
        removeNotifications();
        var mainframe = angular.element("<div>HACKING INTO THE MAINFRAME</div>");
        mainframe.addClass("good");
        mainframe.addClass("notification");
        angular.element(document.body).prepend(mainframe);
      }
      else if(event.key === "5") {
        removeNotifications();
        var detected = angular.element("<div>HACKING DETECTED!</div>");
        detected.addClass("bad");
        detected.addClass("notification");
        angular.element(document.body).prepend(detected);
      }
      else if(event.key === "]") {
        removeNotifications();
      }
      else if ($scope.codingText.length < content.length) {
        $scope.codingText += content.substr($scope.codingText.length, speed);
        window.scrollBy(0,50);
      } 
    };
}]);