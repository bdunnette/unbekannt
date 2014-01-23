'use strict';

angular.module('unbekanntApp')
  .controller('CaseCtrl', function ($scope) {
    $scope.cases = [
      {'case': 'S14-726',
       'sex': 'F',
       'age': 66,
       'description': 'Hypothalamic tumor'},
      {'case': 'S13-40321',
       'sex': 'M',
       'age': 59,
       'description': 'Duodenum; loose stools, weakness, abdominal pain'},
      {'case': 'S14-240',
       'age': 34,
       'sex': 'F',
       'description': 'Kidney mass'},
      {'case': 'S13-41731',
       'age': 84,
       'sex': 'M',
       'description': 'Perianal rash'},
      {'case': 'S13-44143',
       'age': 64,
       'sex': 'M',
       'description': 'Ascending aortic aneurysm'},
      {'case': 'S13-42276',
       'age': 74,
       'sex': 'F',
       'description': 'Breast mass'},
      {'case': 'S12-33303',
       'age': 55,
       'sex': 'F',
       'description': 'Neck mass'},
      {'case': 'S13-41220',
       'age': 59,
       'sex': 'F',
       'description': 'Mesenteric mass'},
      {'case': 'S14-438',
       'age': 67,
       'sex': 'F',
       'description': 'Bilateral ovarian masses'},
      {'case': 'F13-40165',
       'age': 27,
       'sex': 'M',
       'description': 'Left testicular mass'}
    ];
    $scope.gridOptions = { data: 'cases' };
  });
