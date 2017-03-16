angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',])

.run(function($ionicPlatform,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    if (window.Connection) {
  if (navigator.connection.type == Connection.NONE) {
    $ionicPopup.confirm({
        title: "Internet Disconnected",
        content: "The internet is disconnected on your device."
      })
      .then(function (result) {
        if (!result) {
          ionic.Platform.exitApp();
        }
      });
  }
}

  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(2);

  $stateProvider

    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.task', {
    url: '/task',
    views: {
      'menuContent': {
        templateUrl: 'templates/task.html',
        controller: 'TaskCtrl'
      }
    }
  })

  .state('app.photos-documents', {
    url: '/photos-documents/:assignId/:surveyId',
    views: {
      'menuContent': {
        templateUrl: 'templates/photos-documents.html',
        controller: 'PhotosDocumentsCtrl'
      }
    }
  })

  .state('app.emergency', {
    url: '/emergency',
    views: {
      'menuContent': {
        templateUrl: 'templates/photos-documents.html',
        controller: 'EmergencyCtrl'
      }
    }
  })

  .state('app.survey', {
    url: '/survey',
    views: {
      'menuContent': {
        templateUrl: 'templates/survey.html',
        controller: 'SurveyCtrl'
      }
    }
  })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
})


.filter('uploadpath', function () {
    return function (input, width, height, style) {
      var other = "";
      if (width && width != "") {
        other += "&width=" + width;
      }
      if (height && height != "") {
        other += "&height=" + height;
      }
      if (style && style != "") {
        other += "&style=" + style;
      }
      if (input) {
        if (input.indexOf('https://') == -1) {
          return imgpath + input + other;

        } else {
          return input;
        }
      }
    };
  });
