class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    students.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('students must be an array of strings');
      }
    });
    this._students = students;
  }
}
export default HolbertonCourse;
