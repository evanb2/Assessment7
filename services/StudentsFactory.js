rollCall.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function(name) {
    this.students.push({ name: name, signIn: false });
    console.log(this.students);
  };
  return factory;
});
