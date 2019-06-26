"use strict";

var app = angular.module('Portfolio', ['ngMaterial', 'ngCookies', 'ngAnimate']);
app.config(["$mdThemingProvider", function ($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('deep-purple').accentPalette('green');
}]).directive('svgLogo', function () {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: './../partials/svgLogo.html'
  };
}).directive('socialLinks', function () {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: '/partials/socialLinks.html'
  };
}).directive('sideNavList', function () {
  return {
    scope: {
      onContactClick: '&',
      onHireMeClick: '&'
    },
    restrict: 'E',
    templateUrl: '/partials/sidenavList.html'
  };
}).directive('pageLoader', function () {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: '/partials/page-loader.html'
  };
}).directive('imagePicker', function () {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: '/partials/imagePicker.html',
    link: function link(scope, elm, attrs) {
      if (!attrs.images) return;
      scope.images = JSON.parse(attrs.images);
      scope.selectedImage = 0;

      scope.selectImage = function (index) {
        scope.selectedImage = index;
      };
    }
  };
}).directive('frameworksImages', function () {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: '/partials/frameworksImages.html',
    link: function link(scope, elm, attrs) {
      if (!attrs.images) return;
      scope.images = JSON.parse(attrs.images);
    }
  };
});

(function () {
  'use strict';

  angular.module('Portfolio').controller('PortfolioCtrl', PortfolioCtrl);
  PortfolioCtrl.$inject = ["$scope", "$http", "$mdSidenav", "$mdMedia", "ShareListener", "$cookies", '$location', "$anchorScroll"];

  function PortfolioCtrl($scope, $http, $mdSidenav, $mdMedia, ShareListener, $cookies, $location, $anchorScroll) {
    $http.get('/projects.data.json').then(function (response) {
      $scope.projects = response.data;
    });
    $scope.$mdMedia = $mdMedia;
    $scope.shareButtonListener = ShareListener.listener;
    $scope.copyToClipboard = ShareListener.copyToClipboard;
    $scope.nightMode = false;
    $scope.documentLoaded = false;
    $scope.cardToggle = false;
    $scope.selectedCardIndex = undefined;
    $scope.selectedCard = undefined;
    $anchorScroll.yOffset = 50;

    $scope.toggleSocialLinks = function () {
      $scope.showSocialLinks = !$scope.showSocialLinks; // close side nav if open

      if ($mdSidenav('left').isOpen) {
        $mdSidenav('left').toggle();
      }
    };

    $scope.togglePeoplePerHourWidget = function () {
      $scope.showPeoplePerHourWidget = !$scope.showPeoplePerHourWidget; // close side nav if open

      if ($mdSidenav('left').isOpen) {
        $mdSidenav('left').toggle();
      }
    };

    $scope.$watch('$viewContentLoaded', function () {
      if ($cookies.get("NIGHT_MODE") === 'on') {
        $scope.nightMode = true;
      }

      $scope.documentLoaded = true;
    });

    $scope.selectCard = function ($event, $index) {
      if ($scope.selectedCardIndex != $index) {
        // select card
        $scope.selectedCard = $scope.projects[$index];
        $scope.selectedCardIndex = $index; // scroll to top of card

        $location.hash("project" + $index);
        $anchorScroll();
      } else {
        // unselect card
        $scope.selectedCardIndex = undefined;
        $scope.selectedCard = undefined;
      }

      $event.cancelBubble = true; // prevent from firing again
    };

    $scope.onFavouriteClick = function ($event) {
      // TODO: Add animation transition
      var _this = $event.currentTarget;
      var iconContent = _this.children[0].textContent;
      console.log(iconContent);

      if (iconContent == 'favorite') {
        _this.children[0].textContent = 'favorite_border';
      } else {
        _this.children[0].textContent = 'favorite';
      }

      $event.cancelBubble = true; // prevent the card from toggling
    };

    $scope.toggleSideNav = function () {
      $mdSidenav('left').toggle();
    };

    $scope.toggleNightMode = function () {
      // toggle
      $scope.nightMode = !$scope.nightMode; // store cookie

      if ($scope.nightMode) {
        $cookies.put("NIGHT_MODE", "on");
      } else {
        $cookies.put("NIGHT_MODE", "off");
      }
    };
  }
})();

(function () {
  'use strict';

  angular.module('Portfolio').factory('ShareListener', ["$mdToast", function ($mdToast) {
    var copyToClipboard = function copyToClipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el); // show Toast message

      $mdToast.show($mdToast.simple().textContent('Link copied to clipboard!').hideDelay(2000));
    };

    function listener($event) {
      $event.preventDefault(); //cancel bubble

      var _this = $event.currentTarget;

      if (navigator.share) {
        navigator.share({
          title: 'CharisTheo',
          text: _this.children[0].textContent,
          url: _this.href
        }).then(function () {
          return console.log('Successful share');
        })["catch"](function (error) {
          return console.log('Error sharing', error);
        });
      } else {
        // No share API found!
        // copy link to clipboard
        copyToClipboard(_this.href);
      }

      $event.cancelBubble = true; // prevent the card from toggling
    }

    return {
      listener: listener,
      copyToClipboard: copyToClipboard
    };
  }]);
})();

var eye = document.getElementsByClassName('eye')[0];
var irises = document.getElementsByClassName('iris');
var styles = window.getComputedStyle(eye);

window.onload = function () {
  document.onmousemove = function (e) {
    var x = e.pageX;
    var y = e.pageY;
    tilt(x, y);
  };
};

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (event) {
    var x = event.gamma * 10 / 90;
    var y = event.beta * 10 / 90;
    tilt([x, y]);
  }, true);
} else if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', function (event) {
    var accX = Math.round(event.accelerationIncludingGravity.x * 10) / 10;
    var accY = Math.round(event.accelerationIncludingGravity.y * 10) / 10;
    var x = styles.width - accX * movement;
    var y = styles.height - accY * movement; // let x = 10/2 - event.acceleration.x * 5;
    // let y = 10/2 - event.acceleration.y * 5;

    tilt([x, y]);
  }, true);
} else {
  window.addEventListener("MozOrientation", function (event) {
    var x = 10 - event.orientation.x * 50;
    var y = styles.width - event.orientation.y * 50;
    tilt([x, y]);
  }, true);
}

function tilt(x, y) {
  var moveX = parseInt(x * 0.007) - 1;
  var moveY = parseInt(y * 0.006);
  irises[0].style.left = "".concat(moveX, "px");
  irises[1].style.left = "".concat(moveX, "px");

  if (y < window.innerHeight - 100) {
    // on the bottom half of the screen
    irises[0].style.top = "".concat(moveY, "px");
    irises[1].style.top = "".concat(moveY, "px");
  } else {
    // on the top half of the screen
    irises[0].style.bottom = "".concat(moveY, "px");
    irises[1].style.bottom = "".concat(moveY, "px");
  }
}