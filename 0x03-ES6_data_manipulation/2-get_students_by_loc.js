export default function getStudentsByLocation(getListStudents, city) {
  if (getListStudents instanceof Array) {
    return getListStudents.filter((student) => student.location === city);
  }
  return [];
}
