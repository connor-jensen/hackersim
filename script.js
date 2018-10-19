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

  setInterval(function() { addRandomNotification() }, 8000)

  function removeNotifications() {
    var elements = document.getElementsByClassName("notification");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  
  function addRandomNotification() {
    removeNotifications();
    
    var action = Math.floor(Math.random() * 5);
    angular.element(document.body).prepend(events[action]);
  }
  
  var events = [
      function success() {
        var success = angular.element("<div>ACCESS GRANTED</div>");
        success.addClass("good");
        success.addClass("notification");
        return success;
      },
      function denied() {
        var denied = angular.element("<div>ACCESS DENIED</div>");
        denied.addClass("bad");
        denied.addClass("notification");
        return denied;
      },
      function bitcoin() {
        var bitcoin = angular.element("<div>BITCOIN MINED</div>");
        bitcoin.addClass("good");
        bitcoin.addClass("notification");
        return bitcoin;
      },
      function mainframe() {
        var mainframe = angular.element("<div>HACKING INTO THE MAINFRAME</div>");
        mainframe.addClass("good");
        mainframe.addClass("notification");
        return mainframe;
      },
      function detected() {
        var detected = angular.element("<div>HACKING DETECTED!</div>");
        detected.addClass("bad");
        detected.addClass("notification");
        return detected;
      }
    ]

  $scope.hack = function(event) {
    if (event.key === "+") {
      speed = 30;
    }
    else if (event.key === "-" && speed > 10) {
      speed = 5;
    }

    if (event.key > '0' && event.key <= '5') {
      // addRandomNotification()      
      var action = Math.floor(Math.random() * 5);
      if (action === 1) {
        
        // removeNotifications();
        // var success = angular.element("<div>ACCESS GRANTED</div>");
        // success.addClass("good");
        // success.addClass("notification");
        // angular.element(document.body).prepend(success);
        // var audio = new Audio('sounds/access_granted.wav');
        // audio.play();
      }
      else if (action === 2) {
        removeNotifications();
        var denied = angular.element("<div>ACCESS DENIED</div>");
        denied.addClass("bad");
        denied.addClass("notification");
        angular.element(document.body).prepend(denied);
        // var audio = new Audio('sounds/access_denied.wav');
        // audio.play();
      }
      else if (action === 3) {
        removeNotifications();
        var bitcoin = angular.element("<div>BITCOIN MINED</div>");
        bitcoin.addClass("good");
        bitcoin.addClass("notification");
        angular.element(document.body).prepend(bitcoin);
        // var audio = new Audio('sounds/bitcoin_mined.wav');
        // audio.play();
      }
      else if (action === 4) {
        removeNotifications();
        var mainframe = angular.element("<div>HACKING INTO THE MAINFRAME</div>");
        mainframe.addClass("good");
        mainframe.addClass("notification");
        angular.element(document.body).prepend(mainframe);
        // var audio = new Audio('sounds/hacking_into_mainframe.wav');
        // audio.play();
      }
      else if (action === 5) {
        removeNotifications();
        var detected = angular.element("<div>HACKING DETECTED!</div>");
        detected.addClass("bad");
        detected.addClass("notification");
        angular.element(document.body).prepend(detected);
        // var audio = new Audio('sounds/hacking_detected.wav');
        // audio.play();
      }
    }
    else if (event.key === "]") {
      removeNotifications();
    }
    else if ($scope.codingText.length < content.length) {
      $scope.codingText += content.substr($scope.codingText.length, speed);
      window.scrollBy(0, 50);
    }
  };
}]);
