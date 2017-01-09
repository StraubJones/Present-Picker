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

    $scope.greeting = 'Hi';

    $scope.adjToAdd;

    $scope.allAdjectiveTypes = [
      {
        type: 'Color',
        list: [
          {
            value: 'red',
            active: true
          },
          {
            value: 'orange',
            active: true
          },
          {
            value: 'yellow',
            active: true
          },
          {
            value: 'green',
            active: true
          },
          {
            value: 'blue',
            active: true
          },
          {
            value: 'purple',
            active: true
          },
          {
            value: 'black',
            active: true
          },
          {
            value: 'grey',
            active: true
          }
        ],
        chosen: false
      },
      {
        type: 'Pattern',
        list: [
          {
            value: 'polka-dotted',
            active: true
          },
          {
            value: 'checkered',
            active: true
          },
          {
            value: 'argyle',
            active: true
          },
          {
            value: 'plaid',
            active: true
          }
        ],
        chosen: false
      },
      {
        type: 'Size',
        list: [
          {
            value: '5-foot',
            active: true
          },
          {
            value: 'one-foot',
            active: true
          },
          {
            value: '6-inch',
            active: true
          },
        ],
        chosen: false
      },
    ];
    $scope.activeAdjectiveTypes = [];

    $scope.allNounTypes = [
      {
        type: 'Car',
        list: [
          {
            value: 'Honda',
            active: true
          },
          {
            value: 'Toyota',
            active: true
          },
          {
            value: 'Subaru',
            active: true
          },
          {
            value: 'Kia',
            active: true
          }
        ],
        chosen: false
      },
      {
        type: 'Lamp',
        list: [
          {
            value: 'table lamp',
            active: true
          },
          {
            value: 'floor lamp',
            active: true
          }
        ],
        chosen: false
      },
      {
        type: 'Dress',
        list: [
          {
            value: 'evening gown',
            active: true
          },
          {
            value: 'sun dress',
            active: true
          },
          {
            value: 'summer dress',
            active: true
          },
          {
            value: 'wedding dress',
            active: true
          }
        ],
        chosen: false
      },
      {
        type: 'Shirt',
        list: [
          {
            value: 't-shirt',
            active: true
          },
          {
            value: 'button-down',
            active: true
          },
          {
            value: 'polo',
            active: true
          }
        ],
        chosen: false
      },
      {
        type: 'Pants',
        list: [
          {
            value: 'slacks',
            active: true
          },
          {
            value: 'jeans',
            active: true
          },
          {
            value: 'corduroy pants',
            active: true
          },
        ],
        chosen: false
      },
    ];
    $scope.activeNounObj;
    $scope.activeNoun;

    $scope.toggleAdj = (adj)=>{
      if(!$scope.activeAdjectiveTypes.includes(adj)) {
        adj.current = adj.list[Math.floor(Math.random() * adj.list.length)].value;
        $scope.activeAdjectiveTypes.push(adj);
      } else {
        $scope.activeAdjectiveTypes.splice($scope.activeAdjectiveTypes.indexOf(adj), 1);
      }
      adj.chosen = !adj.chosen;
    };

    $scope.chooseNoun = (currNoun)=>{
      console.log('before:', $scope.activeNounObj, $scope.activeNoun);
      $scope.allNounTypes.forEach((noun)=>{
        noun.chosen = false;
      })
      currNoun.chosen = true;
      $scope.activeNounObj = currNoun;
      $scope.activeNoun = currNoun.list[Math.floor(Math.random() * currNoun.list.length)].value;
      console.log('after:', $scope.activeNounObj, $scope.activeNoun);
    };

    $scope.addNoun = (noun)=>{
      activeNounObj.list.push({
        value: noun,
        active: true
      });
    };

    $scope.reroll = ()=>{

      $scope.activeNoun = $scope.activeNounObj.list[Math.floor(Math.random() * currNoun.list.length)].value;
    }
  }]);
