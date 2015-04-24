rollCall.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addSignIn = function(student) {
    student.signIn = true;
  };

  $scope.removeSignIn = function(student) {
    student.signIn = false;
  };
});
