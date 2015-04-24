rollCall.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];
  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName, present: false });
  };
  return factory;
});
