'use strict';

/**
 * @ngdoc function
 * @name presentPickerApp.controller:PickerCtrl
 * @description
 * # PickerCtrl
 * Controller of the presentPickerApp
 */
angular.module('presentPickerApp')
  .controller('PickerCtrl', ['$scope', function ($scope) {
    $scope.greeting = 'Hi!';
    $scope.allAdjectiveTypes = [
      {
        type: 'Color',
        list: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'grey'],
        chosen: false
      },
      {
        type: 'Pattern',
        list: ['polka-dotted', 'checkered', 'argyle', 'plaid'],
        chosen: false
      },
      {
        type: 'Size',
        list: ['5-foot', 'one-foot', '6-inch'],
        chosen: false
      },
    ];
    $scope.activeAdjectiveTypes = [];
    $scope.allNounTypes = [
      {
        type: 'Car',
        list: ['Honda', 'Toyota', 'Subaru', 'Kia'],
        chosen: false
      },
      {
        type: 'Lamp',
        list: ['table lamp', 'floor lamp'],
        chosen: false
      },
      {
        type: 'Dress',
        list: ['evening gown', 'sun dress', 'summer dress', 'wedding dress'],
        chosen: false
      },
      {
        type: 'Shirt',
        list: ['t-shirt', 'button-down', 'polo'],
        chosen: false
      },
      {
        type: 'Pants',
        list: ['slacks', 'jeans', 'corduroy pants'],
        chosen: false
      },
    ];
    $scope.activeNounObj;
    $scope.activeNoun;

    $scope.toggleAdj = (adj)=>{
      if(!$scope.activeAdjectiveTypes.includes(adj)) {
        adj.current = adj.list[Math.floor(Math.random() * adj.list.length)]
        $scope.activeAdjectiveTypes.push(adj);
      } else {
        $scope.activeAdjectiveTypes.splice($scope.activeAdjectiveTypes.indexOf(adj), 1);
      }
      adj.chosen = !adj.chosen;
    }

    $scope.chooseNoun = (currNoun)=>{
      console.log('before:', $scope.activeNounObj, $scope.activeNoun);
      $scope.allNounTypes.forEach((noun)=>{
        noun.chosen = false;
      })
      currNoun.chosen = true;
      $scope.activeNounObj = currNoun;
      $scope.activeNoun = currNoun.list[Math.floor(Math.random() * currNoun.list.length)];
      console.log('after:', $scope.activeNounObj, $scope.activeNoun);
    }
  }]);
