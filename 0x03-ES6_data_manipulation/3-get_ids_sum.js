export default function getStudentIdsSum(getListStudents) {
  if (getListStudents instanceof Array) {
    return getListStudents.reduce((total, student) => total + student.id, 0);
  }
  return 0;
}
